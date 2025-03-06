# CRUD API with Node.js, Express, and MongoDB

## 🛠 Technologies Used

- Node.js
- Express.js
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

**POST** `/api/user`

```json
{
  "name": "Nguyen Van A",
  "email": "nguyenvana@example.com",
  "age": 25
}
```

### ✅ 2. Get User List (Read) with Pagination and Search

**GET** `/api/user?page=1&limit=10&search=van`

#### Query Parameters:

- `page` (optional, default: 1) - The page number.
- `limit` (optional, default: 10) - The number of users per page.
- `search` (optional) - Filter users by name or email.

### ✅ 3. Get User by ID

**GET** `/api/user/:id`

### ✅ 4. Update User (Update)

**PUT** `/api/user/:id`

```json
{
  "name": "Nguyen Van B",
  "email": "nguyenvanb@example.com",
  "age": 30
}
```

### ✅ 5. Delete User (Delete)

**DELETE** `/api/user/:id`

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
