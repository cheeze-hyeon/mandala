import { TextHeavy, TextMedium } from 'components/text/styled';
import React from 'react';
import { LargeBtnWrapper, ThinBtnWrapper } from './styled';
import theme from 'Theme/theme';

interface LargeBtnProps {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  text: string;
}
export const LargeBtn: React.FC<LargeBtnProps> = (props) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(event);
    }
  };
  return (
    <LargeBtnWrapper onClick={handleClick}>
      <TextHeavy color={theme.whtie}>{props.text}</TextHeavy>
    </LargeBtnWrapper>
  );
};

interface ThinBtnProps {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  text: string;
  width?: number;
}
export const ThinBtn: React.FC<ThinBtnProps> = (props) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(event);
    }
  };
  return (
    <ThinBtnWrapper width={props.width} onClick={handleClick}>
      <TextMedium color={theme.whtie}>{props.text}</TextMedium>
    </ThinBtnWrapper>
  );
};
