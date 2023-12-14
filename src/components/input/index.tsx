import React, { useState, ChangeEvent } from 'react';
import { TextInputContainer, TextInputWrapper } from './styled';
import { ThinBtn } from 'components/button/index';

interface TextInputProps {
  placeholder?: string;
  onClick?: () => void;
}
export const TextInputValue: React.FC<TextInputProps> = (props) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(); // 함수를 호출
    }
  };

  return (
    <TextInputContainer>
      <TextInputWrapper
        type="text"
        onChange={handleInputChange}
        placeholder={props.placeholder}
      />
      <ThinBtn onClick={handleClick} width={100} text="작성" />
    </TextInputContainer>
  );
};
