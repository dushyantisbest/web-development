import Chat from "./chat.model.js";

//to add data
// Example fake data for userSchema

const fakeChats = [
  {
    to: "alice@example.com",
    from: "bob@example.com",
    content: "Hey Alice, how are you?",
  },
  {
    to: "bob@example.com",
    from: "alice@example.com",
    content: "Hi Bob! I'm good, thanks.",
  },
  {
    to: "carol@example.com",
    from: "dave@example.com",
    content: "Carol, did you get my email?",
  },
  {
    to: "dave@example.com",
    from: "carol@example.com",
    content: "Yes, I got it. Thanks Dave!",
  },
  {
    to: "eve@example.com",
    from: "frank@example.com",
    content: "Eve, let's meet tomorrow.",
  },
  {
    to: "frank@example.com",
    from: "eve@example.com",
    content: "Sure, what time works for you?",
  },
  {
    to: "grace@example.com",
    from: "heidi@example.com",
    content: "Grace, the report is ready.",
  },
  {
    to: "heidi@example.com",
    from: "grace@example.com",
    content: "Great, I'll review it soon.",
  },
  {
    to: "ivan@example.com",
    from: "judy@example.com",
    content: "Ivan, can you call me back?",
  },
  {
    to: "judy@example.com",
    from: "ivan@example.com",
    content: "Of course, I'll call you now.",
  },
];

const importFakeChats = async () => {
  try {
    await Chat.insertMany(fakeChats);
  } catch (error) {
    console.log(error);
  }
};

export default importFakeChats;
