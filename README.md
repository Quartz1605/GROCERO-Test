# GROCERO-Test
For Testing purposes of website.
## 🛠️ Project Setup Guide
Follow these steps to set up and run both the Django backend and React frontend on your local machine.

### 📌 Prerequisites
Make sure you have the following installed on your system:
✅ Python (3.x)
✅ Node.js (latest LTS recommended)
✅ Git
✅ PostgreSQL (if required)

### 🔹 Step 1: Clone the Repository
First, clone the repository to your local machine:

```sh
git clone https://github.com/Quartz1605/GROCERO-Test.git
```

### 🔹 Step 2: Backend Setup (Django)
1️⃣ Navigate to the backend directory:

```sh
cd Backend
```

2️⃣ Create a virtual environment:
```sh
pip install virtualenv
```
```sh
virtualenv venv
```
3️⃣ Activate the virtual environment:

Windows:
```sh
venv\Scripts\activate
```

4️⃣ Install dependencies:

```sh
pip install -r requirements.txt
```
5️⃣ Apply migrations:

```
python manage.py migrate
```
6️⃣ Create a superuser (optional but recommended):
```sh
python manage.py createsuperuser
```
Follow the prompts to set up an admin user.

7️⃣ Start the Django server:

```sh
python manage.py runserver
```
Your Django backend should now be running at http://127.0.0.1:8000/

### 🔹 Step 3: Frontend Setup (React)
1️⃣ Open a new terminal and navigate to the frontend directory:

2️⃣ Install dependencies:

```sh
npm install
```

3️⃣ Start the development server:

```sh
npm run dev
```
Your React frontend should now be running at http://localhost:5173/

###🎯 Done!
Now, both the Django backend and React frontend should be up and running. 🚀



