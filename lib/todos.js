const express = require("express");
const morgan = require("morgan");

const app = express();
const host = "localhost";
const port = 3000;

//let todoList = require("./lib/seed-data");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));

app.get("/", (req, res) => {
  res.render("lists");
})

// Listener
app.listen(port, host, () => {
  console.log(`Todos is listening on port ${port} of ${host}!`)
})

const nextId = require("./next-id");

class Todo {
  constructor(title) {
    this.id = nextId();
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  setTitle(title) {
    this.title = title;
  }
}

Todo.DONE_MARKER = "X";
Todo.UNDONE_MARKER = " ";

module.exports = Todo;