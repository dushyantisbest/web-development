import connectionMongo from "./index.js";
import user from "./models/user.model.js";

try {
  await connectionMongo();
  console.log("connection established");

  const newUser = await user.create({
    name: "dushyant",
    email: "ghost@mail.com",
  });
  console.log("User added:", newUser);

  const users = await user.find();
  console.log("All users:", users);
} catch (err) {
  console.error("Error:", err);
}
