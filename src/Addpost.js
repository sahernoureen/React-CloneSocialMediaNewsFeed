import React, { Component } from "react";
import DisplayPosts from "./DisplayPosts";
import "./AppStyles.css";
import moment from "moment";
export default class Addpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArray: this.props.Users,
      selectedUser: this.props.myuser,
      posts: this.props.posts
    };

    this.addPost = this.addPost.bind(this);
  }
 
  addPost(e) {
    let newPostId = this.state.posts.length;
    console.log(this.props.myuser);
    if (this.textarea.value !== "") {
      let newPost = {
        id: ++newPostId,
        text: this.textarea.value,
        name: "",
        addedBy: this.props.myuser,
        likes: 0,
        comments: [],
        time: moment().calendar()
      };

      const newTimeLinePost = [...this.state.posts, newPost];
      this.setState({ posts: newTimeLinePost });
      e.preventDefault();
      console.log("here are new posts :" + newTimeLinePost);
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div class="newPost">
          <img
            class="postBy"
            src={this.props.myuser}
            className="ui avatar image"
            alt=""
          />
          <form onSubmit={this.addPost}>
            <div class="ui focus input">
              {" "}
              <textarea
                rows="4"
                cols="50"
                ref={a => (this.textarea = a)}
                placeholder="Add new Message here"
              ></textarea>{" "}
            </div>
            <div class="button">
              <button>Post </button>
            </div>
          </form>
        </div>
        <DisplayPosts
          posts={this.state.posts}
          newMessage={this.state.newMessage}
          Users={this.state.usersArray}
          myuser={this.props.myuser}
        />
      </div>
    );
  }
}

//
