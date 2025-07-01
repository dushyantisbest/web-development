const express = require("express");
const app = express();
const path = require("path");
const ShortUniqueId = require("short-unique-id");
const methodOverride = require("method-override");

const uid = new ShortUniqueId();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const port = 8080;
app.listen(port, () => {
  console.log(`Listning to port : ${port}`);
});

let posts = [
  {
    id: uid.rnd(),
    username: "Dushyant kumar",
    content: "keep living",
  },
  {
    id: uid.rnd(),
    username: "light",
    content: "give up and die",
  },
];

// render main page
app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

//render form to add new post
app.get("/post", (req, res) => {
  res.render("form.ejs");
});

//add new post using post request
app.post("/post", (req, res) => {
  let new_post = { id: uid.rnd(), ...req.body };
  posts.push(new_post);
  res.redirect("http://localhost:8080");
  console.log(posts);
});

// get isolated post and reder it
app.get("/post/:id", (req, res) => {
  let { id } = req.params;

  //   let getPost = (post_array, id_to_find) => {
  // for (let post of post_array) {
  //   if (post.id === id_to_find) {
  //     return post;
  //   } else {
  //     console.log("post not found");
  //   }
  // }
  //   };
  let post = posts.find((post) => post.id === id);
  res.render("single_post.ejs", { post });
});

// render a form to edit a post

app.get("/post/edit/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id === id);
  res.render("edit.ejs", { post });
});

//actually updating the content (editing the post)
app.patch("/post/edit/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);

  let { content } = req.body;
  console.log(content);

  let post = posts.find((post) => post.id === id);
  post.content = content;
  res.redirect("/");
});

//deleting the post

app.delete("/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((post) => post.id !== id);
  res.redirect("/");
});
