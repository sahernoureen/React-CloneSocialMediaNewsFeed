import React, { Component } from "react";
import Navbar from "./Navbar";
import "./AppStyles.css";
import Header from "./Header";

const usersdata = [
  {
    id: 1,
    name: "saher",
    addedBy: require("./pic1.jpg")
  },
  { id: 5, name: "seemal", addedBy: require("./pic2.jpg") }
];

const PostsData = [
  {
    id: 1,
    name: "saher",
    addedBy: require("./pic1.jpg"),
    text: "here is my first post",
    comments: [
      {
        id: 1,
        msg: "hello",
        by: require("./pic1.jpg"),
        time: "",
        reply: ["hi"],
        likes: 0
      },
      {
        id: 2,
        msg: "just checking",
        by: `https://api.adorable.io/avatars/48/@adorable.io.png`,
        time: "",
        reply: ["ok"],
        likes: 0
      },
      {
        id: 3,
        msg: "how react works",
        by: require("./pic1.jpg"),
        time: "",
        reply: [],
        likes: 0
      }
    ],
    likes: 2
  },
  {
    id: 2,
    name: "saher",
    addedBy: require("./pic1.jpg"),
    text: "here is my 2nd post",
    comments: [
      {
        id: 1,
        msg: "thats amazing",
        by: "john",
        reply: [{ id: 1, re: "thanks" }],
        likes: 5
      },
      {
        id: 2,
        msg: "good start",
        by: `https://api.adorable.io/avatars/48/@adorable.io.png`,
        time: "",
        reply: [{ id: 2, re: ":)" }],
        likes: 4
      },
      {
        id: 3,
        msg: "keep it up",
        by: require("./pic2.jpg"),
        time: "",
        reply: [{ id: 3, re: "Thank you" }],
        likes: 6
      }
    ],
    likes: 2,
    time: "Yesterday at 9:20 Pm"
  },
  {
    id: 3,
    name: "John",
    addedBy: "",
    text: "Hi there",
    comments: [
      {
        id: 1,
        msg: ":) good to see",
        by: "https://api.adorable.io/avatars/48/@adorable.io.png",
        time: "",
        reply: [{}],
        likes: 0
      }
    ],
    likes: 5,
    time: "Yesterday at 5:40 Pm"
  },
  {
    id: 4,
    name: "React",
    addedBy: require("./pic2.jpg"),
    text: "React giving a hard time",
    comments: [
      {
        id: 1,
        msg: "JavaScripts was much easy",
        by: `https://api.adorable.io/avatars/48/@adorable.io.png`,
        time: "Yesterday at 9:20 Pm",
        reply: [{ id: 1, re: "ya i know" }],
        likes: 10
      },
      {
        id: 2,
        msg: "it will take some time to use to of react",
        by: `https://api.adorable.io/avatars/48/@adorable.io.png`,
        time: "Today at 10:40 Am",
        reply: [{ id: 1, re: "ofcourse" }],
        likes: 12
      },
      {
        id: 3,
        msg: "keep it up",
        by: require("./pic1.jpg"),
        time: "Today at 10:40 Am",
        reply: [{}],
        likes: 0
      }
    ],
    likes: 5,
    time: "Yesterday at 09:10 Am"
  },
  {
    id: 5,
    name: "seemal",
    addedBy: `https://api.adorable.io/avatars/48/@adorable.io.png`,
    text: "Hi there, i am seemal",
    comments: [
      {
        id: 1,
        msg: "thats amazing",
        by: "john",
        time: "Today at 10:40 Am",
        reply: [{ id: 1, re: "thanks" }],
        likes: 6
      },
      {
        id: 2,
        msg: "good start",
        by: require("./pic2.jpg"),
        time: "",
        reply: [{}],
        likes: 4
      },
      {
        id: 3,
        msg: "keep it up",
        by: `https://api.adorable.io/avatars/48/@adorable.io.png`,
        time: "",
        reply: [{}],
        likes: 0
      }
    ],
    likes: 0,
    time: "Today at 10:30 Am"
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PostsData: PostsData,
      usersdata: usersdata
    };
    this.updatelikes = this.updatelikes.bind(this);
  }

  updatelikes = id => {
    let userPost = this.state.PostsData;
    userPost.find(postid => postid.id === id).likes++;
    this.setState({ PostsData: userPost });
  };

  render() {
    return (
      <div class="main">
        <Header />
        <Navbar
          usersdata={this.state.usersdata}
          PostsData={this.state.PostsData}
        />
      </div>
    );
  }
}
