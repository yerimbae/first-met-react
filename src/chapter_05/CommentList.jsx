import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요. 소플입니다.",
    },
    {
        name: "김하나",
        comment: "우왕",
    },
    {
        name: "이그때",
        comment: "안녕하세요. 소풍갑니다.",
    },
];



function CommentList (props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;