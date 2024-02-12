import styled from "@emotion/styled";
import React from "react";
import useCustomMove from "../../hooks/useCustomMove";

const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 39px;
  font-size: 25px;
  background: #0d253f;
  color: #d9d9d9;
  z-index: 2;
`;

const HeaderLeft = styled.div`
  background: transparent;
  button {
    border: none;
    background: transparent;
    color: #d9d9d9;
    cursor: pointer;
  }
`;
const HeaderRight = styled.div`
  margin-right: 30px;
  display: flex;
  gap: 30px;
  background: transparent;
  button {
    width: 120px;
    height: 40px;
    border: none;
    font-size: 2.2rem;
    color: #d9d9d9;
    background: transparent;
    cursor: pointer;
  }
  button:hover {
    background: #444;
    opacity: 50;
    border-radius: 5px;
  }
  @media screen and (max-width: 1248px) {
    margin-right: 0px;
  }
`;

const BasicHeader = () => {
  const { moveToMain, moveToMovie, moveToRecommend, moveToBoard } =
    useCustomMove();
  return (
    <HeaderWrap>
      <HeaderLeft>
        <button onClick={() => moveToMain()}>MovieView</button>
      </HeaderLeft>
      <HeaderRight>
        <button onClick={() => moveToMain()}>Home</button>
        <button onClick={() => moveToMovie()}>Movie</button>
        <button onClick={() => moveToRecommend()}>Recomend</button>
        <button onClick={() => moveToBoard()}>Board</button>
      </HeaderRight>
    </HeaderWrap>
  );
};

export default BasicHeader;
