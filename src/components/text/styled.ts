import styled from 'styled-components';

export const TitleHeavy = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: 'GmarketSans';
  font-size: 28px;
  line-height: 19px;
  letter-spacing: 0px;
  font-weight: 700;
  text-align: left;
  color: ${(props) => props.color};
`;
