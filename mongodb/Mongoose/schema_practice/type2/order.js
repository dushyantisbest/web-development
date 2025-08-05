import mongoose, { Schema } from "mongoose";
async function connection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  console.log("connection established");
}

connection();

const orderSchema = mongoose.Schema({
  item: { type: String },
  quantity: { type: Number },
  price: { type: Number },
});

const Order = mongoose.model("Order", orderSchema);

const userSchema = mongoose.Schema({
  name: { type: String },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

const User = mongoose.model("User", userSchema);

const addOrder = async () => {
  const orderOne = {
    item: "samosa",
    quantity: 2,
    price: 12,
  };

  const orderTwo = {
    item: "Choclate",
    quantity: 1,
    price: 100,
  };

  const orderThree = {
    item: "Chole Bhature",
    quantity: 4,
    price: 80,
  };

  const result = await Order.insertMany([orderOne, orderTwo, orderThree]);
  console.log(result);
};

// addOrder();

const addUser = async () => {
  const userOneOrders = await Order.find({
    item: { $in: ["samosa", "Choclate"] },
  });
  const userOne = { name: "Dushyant Sharma", orders: userOneOrders };

  await User.create(userOne);
};

// addUser();

const result = await User.findOne({ name: "Dushyant Sharma" }).populate(
  "orders"
);

console.log(result);
