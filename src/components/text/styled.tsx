import theme from 'Theme/theme';
import styled from 'styled-components';

export const TitleHeavy = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: 'GmarketSans';
  font-size: 35px;
  letter-spacing: 0px;
  font-weight: 700;
  color: ${(props) => (props.color ? props.color : theme.deepBlue)};
`;

export const TextHeavy = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: 'GmarketSans';
  font-size: 22px;
  letter-spacing: 0px;
  font-weight: 700;
  color: ${(props) => (props.color ? props.color : theme.black)};
`;

export const TextMedium = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: 'GmarketSans';
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : theme.black)};
`;

export const TextLight = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: 'GmarketSans';
  font-size: 15px;
  letter-spacing: 0px;
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : theme.darkGray)};
`;
