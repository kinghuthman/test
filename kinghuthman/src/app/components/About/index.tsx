/**
 *
 * About
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

import aboutText from '../../../assets/aboutText';
import testImage from '../../../assets/testImageHK.jpg';

interface Props {}

export function About(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing)}  */}
      <Contents>
        <Text>{aboutText}</Text>
        <Image src={testImage} />
      </Contents>
    </Div>
  );
}

const Div = styled.div``;

const Text = styled.div`
  text-align: center;
  width: 50ch;
`;

const Image = styled.img`
  height: 250px;
  width: 400px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5rem;
  padding: 5rem;
`;
