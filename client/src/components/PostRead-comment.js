import React from "react"
import styled from "styled-components"
import axios from "axios"

const Outer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

`
const LeftDiv = styled.div`
  text-align: left;
  #userid {
    font-weight: bold;
  }
`
const RightDiv = styled.div`
  display: block;
`
const DeleteBtn = styled.button`
  display: block;
  border: 1px solid black;
`
const LikeBtn = styled.button`
  display: block;
  margin-top: 0.3rem;
  border: 1px solid black;
`
// 아이디, 댓글내용, 날짜 / 좋아요하트, 삭제버튼
export default function Comment({content, commentDelete}) {
  // console.log("content : ", content);
  return (
    <Outer>
      <LeftDiv>
        <p id="userid">{content.comment_user_id}</p>
        <p>{content.comment_content}</p>
        <p>{content.createdAt}</p>
      </LeftDiv>

      <RightDiv>
        <DeleteBtn onClick={() => commentDelete(content.id)}>삭제</DeleteBtn>
        <LikeBtn>하투</LikeBtn>
      </RightDiv>
    </Outer>
  )
}
