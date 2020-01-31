import React, { Component } from "react";

export default class DisplayReply extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let CommentReply = this.props.replyArray;
    let newCommentReply = CommentReply.sort((a, b) => b.id - a.id);
    let List_Replies = newCommentReply.map(reply => {
      return (
        <div class="commentText">
          <div key={reply.id}>
            <img
              className="ui avatar image"
              width="18"
              height="18"
              src={require("./pic2.jpg")}
            />{" "}
            {reply.re}
          </div>
        </div>
      );
    });

    return <div>{List_Replies}</div>;
  }
}
