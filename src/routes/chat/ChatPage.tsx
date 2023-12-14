import * as s from './styled';
import Logo from '../../asset/logo.png';
import data from './chatting.json';
import { useState } from 'react';
import { TextBox } from './styled';
import { TextInputValue } from 'components/input/index';
import { ThinBtn } from 'components/button/index';

const ChatPage = () => {
  const [okNext, setOkNext] = useState(false); // 다음으로 넘어가기 가능 여부
  const handleTextBoxComplete = () => {
    console.log('Typing in TextBox completed!');
    setOkNext(true);
  };

  const [currentTextBox, setCurrentTextBox] = useState(0); // 현재 텍스트 박스
  const handleNextClick = () => {
    console.log(`Clicked next button`);
    if (currentTextBox < data.length - 1 && okNext) {
      setCurrentTextBox(currentTextBox + 1);
      setOkNext(false);
    }
  };

  const [isConnectDB, setIsConnectDB] = useState(false); // 데이터베이스 연결 여부
  const handleOptionClick = (optionText: string) => {
    console.log(`Selected option: ${optionText}`);
    handleNextClick();
    // 이메일 리마인드를 원하는 경우
    if (optionText === '너무 좋아용😍' && okNext) {
      console.log('데이터베이스와 연결!');
      setIsConnectDB(true);
    } else if (optionText === '괜찮아용😶' && okNext) {
      setCurrentTextBox(currentTextBox + 2);
      setOkNext(false);
    }
  };

  return (
    <s.ChatLayout>
      <s.ImgWraaper>
        <img src={Logo} width={200} />
      </s.ImgWraaper>
      {data.map((item, index) => (
        <div key={item.id}>
          {index === currentTextBox && (
            <div>
              <TextBox
                onClick={handleNextClick}
                onTypingComplete={handleTextBoxComplete}
              >
                {item.text}
              </TextBox>
              <s.OptionContainer>
                {item.isOption &&
                  item.options &&
                  item.options.map((option) => (
                    <ThinBtn
                      key={option.id}
                      onClick={() => handleOptionClick(option.text)}
                      width={120}
                      text={option.text}
                    />
                  ))}
              </s.OptionContainer>
            </div>
          )}
          {item.isInput && index === currentTextBox && (
            <TextInputValue
              onClick={handleNextClick}
              placeholder={item.placeholder}
            />
          )}
        </div>
      ))}
    </s.ChatLayout>
  );
};

export default ChatPage;
