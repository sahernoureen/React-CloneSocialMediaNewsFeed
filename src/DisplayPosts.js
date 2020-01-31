import React, { Component } from "react";
import "./InitialStyles.css";

import ManageLikes from "./ManageLikes";
import Comments from "./Comments";
import FacebookEmoji from "react-facebook-emoji";

export default class DisplayPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: ""
    };
    this.getInitialState = this.getInitialState.bind(this);
    this.onClick = this.onClick.bind(this);
    this.updateLikes = this.updateLikes.bind(this);
  }
  updateLikes = id => {
    let findPost = this.props.posts;
    findPost.find(postid => postid.id === id).count++;
    this.setState({ Users: findPost });
  };
  getInitialState() {
    return { showResults: false };
  }
  onClick() {
    this.setState({ showResults: true });
  }

  render() {
    let timelineMessage = this.props.posts;
    let newtimelineMessage = timelineMessage.sort((a, b) => b.id - a.id);
    let List_timelineMessage = newtimelineMessage.map(post => {
      return (
        <div class="post">
          <p></p>
          <div key={post.id}>
            {" "}
            <img
              class="postBy"
              src={post.addedBy}
              className="ui avatar image"
              width="18"
              height="18"
              alt=""
            />{" "}
            {post.name}
          </div>
          <div class="posttime"> {post.time}</div>
          <div class="postmsg"> {post.text}</div>
          <div class="reactions">
            <ManageLikes
              likes={post.likes}
              id={post.id}
              posts={this.props.posts}
              updateLikes={this.updateLikes}
            />

            <div class="commentButton">
              <button onClick={this.onClick}>comments</button>
            </div>
          </div>
          <div class=" commentbar">
            {" "}
            {this.state.showResults ? (
              <Comments
                commentsArray={post.comments}
                myuser={this.props.myuser}
              />
            ) : null}
          </div>
        </div>
      );
    });

    return <div>{List_timelineMessage}</div>;
  }
}

/*

<FacebookEmoji type="like" size="sm">
 */
