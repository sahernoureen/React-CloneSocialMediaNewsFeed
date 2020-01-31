import React, { Component } from "react";
import ReplyComment from "./ReplyComment";
import ManageLikes from "./ManageLikes";

export default class DisplayCommentbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: this.props.commentsArray
    };
    this.updateLikes = this.updateLikes.bind(this);
    this.getInitialState = this.getInitialState.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  getInitialState() {
    return { showResults: false };
  }
  onClick() {
    this.setState({ showResults: true });
  }
  updateLikes = id => {
    let findComment = this.props.commentsArray;
    findComment.find(commentid => commentid.id === id).likes++;
    this.setState({ newMessage: findComment });
  };
  render() {
    console.log(this.props.commentsArray);
    let PostComments = this.props.commentsArray;
    console.log(PostComments);
    let newPostComments = PostComments.sort((a, b) => b.id - a.id);
    let List_PostCommnets = PostComments.map(comment => {
      return (
        <div class="commentText">
          <div key={comment.id}>
            <img
              className="ui avatar image"
              width="38"
              height="38"
              src={comment.by}
            />{" "}
            {comment.msg}
          </div>
          <div class="commentlikes">
            <ManageLikes
              likes={comment.likes}
              id={comment.id}
              posts={this.props.newMessage}
              updateLikes={this.updateLikes}
            />

            <div class="replyBox">
              <ReplyComment
                replyArray={comment.reply}
                myuser={this.props.myuser}
              ></ReplyComment>
              ;
            </div>
          </div>
        </div>
      );
    });

    return <div>{List_PostCommnets}</div>;
  }
}
