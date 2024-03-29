import styled from "@emotion/styled";
import React from "react";
import { useLocation } from "react-router";
import BasicLayout from "../../layouts/BasicLayout";
import { Movie } from "./MoviePage";
import useCustomMove from "../../hooks/useCustomMove";

const DetailWrap = styled.div`
  width: 100%;
  min-height: 780px;
  background: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1248px) {
    justify-content: space-around;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const DetailPrev = styled.div`
  position: absolute;
  cursor: pointer;
  top: 90px;
  left: 0;
  img {
    width: 50px;
    height: 50px;
    transform: rotate(270deg);
  }
  @media screen and (max-width: 1248px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const DetailLeft = styled.div`
  img {
    width: 350px;
  }
  @media screen and (max-width: 1248px) {
    img {
      width: 300px;
    }
  }
  @media screen and (max-width: 850px) {
    img {
      width: 200px;
    }
  }
`;

const DetailRight = styled.div`
  width: 700px;
  height: 525px;
  border-radius: 25px;
  background: rgba(13, 37, 63, 0.8);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 4rem;
    margin: 0.5rem 0;
  }
  p {
    font-size: 2.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 11;
    -webkit-box-orient: vertical;
  }
  @media screen and (max-width: 1248px) {
    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 9;
      -webkit-box-orient: vertical;
    }
    width: 500px;
    height: 450px;
    padding: 15px;
  }
  @media screen and (max-width: 850px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 9;
      -webkit-box-orient: vertical;
    }
    width: 400px;
    height: 300px;
    padding: 15px;
  }
`;

const DetailRightMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailRightEtc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MovieDetail = () => {
  const state = useLocation().state as Movie;
  const image_Url = "https://image.tmdb.org/t/p/w220_and_h330_face/";
  const { moveToPrev } = useCustomMove();

  return (
    <>
      <BasicLayout>
        <DetailWrap>
          <DetailPrev onClick={() => moveToPrev()}>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/bt_arrow.svg"}
              alt="bt-arrow"
            ></img>
          </DetailPrev>

          <DetailLeft>
            {state && state.poster_path && (
              <img src={`${image_Url}${state.poster_path}`} alt={state.title} />
            )}
          </DetailLeft>
          <DetailRight>
            <DetailRightMain>
              <h1>제목 : {state && state.title}</h1>
              <p>{state && state.overview}</p>
            </DetailRightMain>
            <DetailRightEtc>
              <p>개봉일자 : {state && state.release_date}</p>
              <p>평점 : {state && state.vote_average.toFixed(2)}</p>
            </DetailRightEtc>
          </DetailRight>
        </DetailWrap>
      </BasicLayout>
    </>
  );
};

export default MovieDetail;
