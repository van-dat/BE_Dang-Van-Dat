const mongoose = require("mongoose");
import connectDB from "./src/config/database";
import User from "./src/models/model_user";

const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nguyenvana@example.com", age: 25 },
  { id: 2, name: "Trần Thị B", email: "tranthib@example.com", age: 30 },
  { id: 3, name: "Lê Văn C", email: "levanc@example.com", age: 22 },
];

const importUsers = async () => {
  try {
    await connectDB();
    await User.insertMany(users);
    console.log("✅ Import users thành công!");
  } catch (error) {
    console.error("❌ Lỗi khi import users:", error);
  } finally {
    mongoose.connection.close();
    process.exit();
  }
};

importUsers();
