import React from 'react';
//css-in-js   npm i styled-components
import styled from 'styled-components';
import LogoCatImage from '../assets/logocat.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    //useNavigate를 이용해 page 이동 
    navigate('/question');
  }

  return(
    <Wrapper>
    <Header>예비 집사 판별기</Header>
    <Contents>
      <Title>나에게 맞는 주인님은?</Title>
      <LogoImage>
        <img src={LogoCatImage} className ="rounded-circle" width = {350} height = {350}/>
      </LogoImage>
      <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기!</Desc>
      <Button style={{fontFamily:"SimKyungha"}} onClick={handleClickButton}>테스트 시작하기</Button>
    </Contents>
    </Wrapper>
    
  )
}

export default Home;

const Wrapper = styled.div`
  height : 100vh;
  width : 100%;

  `

const Header = styled.div`
  font-size : 40px;
  display : flex;
  justify-content : center;
  align-items : center;
  font-family: "SimKyungha";
`
const Contents = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction: column;
  font-family: "SimKyungha";
`

const Title = styled.div`
  font-size : 30px;
  margin-top : 40px;
  font-family: "SimKyungha";
`

const LogoImage = styled.div`
  margin-top : 10px;
`
const Desc = styled.div`
  font-size : 20px;
  margin-top : 20px;
  font-family: "SimKyungha";
`


