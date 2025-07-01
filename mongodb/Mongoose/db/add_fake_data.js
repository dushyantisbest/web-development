import connectionMongo from "./index.js";
import User from "./models/user.model.js";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";

const numberOfFakeData = 15;
let dataEntries = [];

for (let index = 0; index < numberOfFakeData; index++) {
  const data = {
    name: faker.internet.username(),
    email: faker.internet.email(),
  };
  dataEntries.push(data);
}

const addEntries = async () => {
  try {
    await connectionMongo();
    await User.insertMany(dataEntries);
    const users = await User.find();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

addEntries();
