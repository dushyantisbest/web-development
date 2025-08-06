async function connection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/delete_multiple");
  console.log("connection established");
}

connection();
