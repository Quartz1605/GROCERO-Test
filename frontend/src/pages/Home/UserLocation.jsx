import { useContext, useState } from "react";
import UserContext from "../../../contexts/UserContext";

const UserLocation = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [homeAdd, sethomeAdd] = useState("");

  const { setUser } = useContext(UserContext);

  function getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          getAddress(lat, lon);
        },
        (error) => {
          console.log("Error in getting location");
        }
      );
    } else {
      console.log("Geolocation not supported by your browser.");
    }
  }

  async function getAddress(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    try {
      const resp = await fetch(url);
      const data = await resp.json();

      if (data && data.display_name) {
        let address = data.display_name;
        document.getElementById("locationDisplay").innerHTML = `Current Location: ${address}`;
        sethomeAdd(address);
        localStorage.setItem("homeAddress", address);

        setUser((prevUser) => ({
          ...prevUser,
          homeAddress: address,
        }));
      } else {
        document.getElementById("locationDisplay").innerHTML += "<br>Failed to get address.";
      }
    } catch (error) {
      document.getElementById("locationDisplay").innerHTML += "<br>Error fetching address.";
    }
  }


  //Sending Address to backend using API calls.

  const sendingAddressToBackend = async () => {
    
    const userAddress = {
      homeAddress : address,
    };

    try{
      const response = await fetch("http://localhost:8000/api/address/",{
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body:JSON.stringify(userAddress)
      });

      if(response.ok){
        const data = await response.json();
        console.log("Address sent successfully",data)
      }
      else{
        console.log("Failed to send address.");
      }

    }
    catch(error){
      console.log("Error:",error)
    }


  }



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-md">
      <div className="bg-white bg-opacity-40 backdrop-blur-lg p-6 rounded-2xl shadow-xl w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Location</h2>
          <button onClick={onClose} className="text-[#F9429E] hover:cursor-pointer">✖</button>
        </div>

        <input
          type="text"
          placeholder="Search a new address"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fc82bf] bg-white bg-opacity-80 backdrop-blur-sm"
        />

        <div className="mt-4 flex items-center space-x-3 p-3 bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md">
          <span className="text-[#F9429E]">📍</span>
          <div className="flex-1">
            <h3 className="font-semibold text-[#F9429E]">Current Location</h3>
            <p className="text-gray-500 text-sm">Enable your current location for better services</p>
          </div>
          <button className="bg-[#F2429E] text-white px-4 py-1 rounded-lg hover:bg-[#D40085] transition-all duration-200" onClick={getLocation}>
            Enable
          </button>
        </div>

        <p id="locationDisplay" className="mt-3 ml-3 text-black text-[16px] bg-white bg-opacity-70 backdrop-blur-sm p-2 rounded-lg shadow-sm"></p>

        <div className="flex items-center justify-center">
          <button className="mt-8 bg-[#F9429E] text-amber-50 p-3 rounded-xl hover:bg-[#F400A1] transition-all duration-200" onClick={sendingAddressToBackend}>Set as "Home" Address.</button>
        </div>
      </div>
    </div>
  );
};

export default UserLocation;
