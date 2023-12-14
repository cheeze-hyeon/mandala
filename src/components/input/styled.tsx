import styled from 'styled-components';
import theme from 'Theme/theme';

export const TextInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flexdirection: row;
`;

export const TextInputWrapper = styled.input`
  display: flex;
  width: 450px;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding-left: 10px;
  margin: 0 auto;
  border-radius: 20px;
  border: 3px solid ${theme.blue};
`;
