import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import myGif from '../../../assets/Eye-Animation-v4.gif';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Wrapper>
        <Wrapper2>
          <h1 className="title">UNDER CONSTRUCTION</h1>
          <PTag>Looking to ask a question or work together?</PTag>
          <PTag2>Email me at kinghuthman@gmail.com</PTag2>
          <MyGif src={myGif} />
        </Wrapper2>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper2 = styled.div`
  margin-top: 25vh;
`;

const PTag = styled.p`
  margin-left: 2vw;
`;

const PTag2 = styled.p`
  margin-left: 3vw;
`;

const MyGif = styled.img`
  height: 250px;
  width: 400px;
`;
