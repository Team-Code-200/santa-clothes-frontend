import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button/Button";
import palette from "../../lib/styles/palette";
import { Image } from '@chakra-ui/react';
import treeIcon from './treeIcon.png';

const Header = styled.div`
  display: flex;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  margin-top: 6.5vh;
  margin-left: 18vw;
`;

const Donate = styled.div`
  margin-left: 6vw;
`

const Icon = styled.div`
  width: 1rem;
  height: 1rem;
  margin-left: 27vw;
  margin-top: 1.5rem;
`

const Line = styled.hr`
  margin-left: 14vw;
  width: 70vw;
  color: ${palette.gray[2]};
`

const onHandleClick = () => {
  window.location.href="/donate/write";
}

const DonateTemplate = () => {
  return (
    <>
      <Header>
        <Icon>
          <Image src={treeIcon} alt='Santa' />
        </Icon>
        <Donate>
          <h1>나눔 게시판</h1>
          <h2 style={{color: palette.gray[6]}}>나눠주고 싶은 물품을 이곳에 등록해주세요</h2>
        </Donate>
        <StyledButton onClick={onHandleClick}>글쓰기</StyledButton>
      </Header>



      <Line />


    </>
  );
}

export default DonateTemplate;