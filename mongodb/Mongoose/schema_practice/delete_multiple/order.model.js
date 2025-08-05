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

//middleware must be defined before model is compiled
userSchema.post("findOneAndDelete", async function (userdata) {
  if (userdata.orders) {
    const result = await Order.deleteMany({ _id: { $in: userdata.orders } });
    console.log(result);
  }
  //   console.log("why is if not working");
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
    item: { $in: ["Chole Bhature"] },
  });
  const userOne = { name: "Ghost", orders: userOneOrders };

  await User.create(userOne);
};

// addUser();

//delete middleware

// delete user

const delUser = async () => {
  const result = await User.findByIdAndDelete("6890beaab2d27b8f587f3ceb");
  //   console.log(result);
};

delUser();
