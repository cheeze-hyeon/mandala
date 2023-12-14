import styled from 'styled-components';
import theme from 'Theme/theme';

export const LargeBtnWrapper = styled.div`
  display: flex;
  width: 250px;
  height: 50px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: ${theme.deepBlue};
  border-radius: 10px;
`;

interface ThinBtnWrapperProps {
  width?: number;
}
export const ThinBtnWrapper = styled.div<ThinBtnWrapperProps>`
  display: flex;
  width: ${(props) => (props.width ? `${props.width}px` : '225px')};
  height: 50px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: ${theme.lightBlue};
  border-radius: 20px;
`;
