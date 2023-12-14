import styled from 'styled-components';
import theme from 'Theme/theme';
import Box from '../../asset/textbox.png';
import { TextMedium } from 'components/text/styled';
import { TypingEffect } from './funcText';
import { useCallback } from 'react';

export const ChatLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const ImgWraaper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 100%;
  border: 13px solid ${theme.blue};
  margin-bottom: 50px;
`;

export const TextBoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  width: 425px;
  position: absolute;
`;

interface TextBoxProps {
  children: string;
  onClick?: () => void;
  onTypingComplete?: () => void;
}
export const TextBox: React.FC<TextBoxProps> = (props) => {
  const { children, onClick, onTypingComplete } = props;
  const handleTypingComplete = useCallback(() => {
    console.log('Typing effect completed');
    if (onTypingComplete) {
      onTypingComplete(); // 타이핑이 끝났음을 상위 컴포넌트로 알림
    }
  }, [onTypingComplete]);

  return (
    <TextBoxWrapper onClick={onClick}>
      <img src={Box} width={600} height={160} />
      <TextWrapper>
        <TextMedium>
          <TypingEffect text={children} onComplete={handleTypingComplete} />
        </TextMedium>
      </TextWrapper>
    </TextBoxWrapper>
  );
};

export const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 20px;
`;
