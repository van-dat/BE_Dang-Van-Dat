## 🛠 Technologies Used

- Node.js
- Express.js
- Socket.io
- MongoDB Atlas
- Mongoose

## 🚀 Installation

### 1️⃣ Install dependencies

```sh
npm install
```

### 2️⃣ Configure Environment

Create a `.env` file and add MongoDB connection details:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

### 3️⃣ Run the Application

```sh
npm start  # Run with Node.js
# or
npm run dev  # Run with Nodemon (hot reload)
```

### 4️⃣ Import Sample Data

Run the following command to insert sample users into the database:

```sh
npm run seed
```

## 📌 API Endpoints

### ✅ 1. Create a User (Create)

**POST** `/api/register`

```json
{
  "name": "Nguyen Van A",
  "email": "nguyenvana@example.com"
}
```

### ✅ 2. Get Top scores User

**GET** `/api/top-scores`

### ✅ 3. login

**GET** `/api/login`

### ✅ 4. Update Score (Update)

**Post** `/api/update-score`

## 🔥 Support Commands

```sh
npm run dev  # Run server with Nodemon
npm start    # Run server with Node.js
```

## 📥 Add Sample Data

If you want to insert sample users into the database, you can use the following script:

### Run the script

```sh
npm run add_data
```
