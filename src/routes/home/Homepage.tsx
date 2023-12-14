import * as s from './styled';
import Logo from '../../asset/logo.png';
import { TextLight, TitleHeavy } from 'components/text/styled';
import { LargeBtn } from 'components/button/index';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <s.homeLayout>
      <div>
        <TitleHeavy>2024</TitleHeavy>
        <img src={Logo} width={300} />
        <TitleHeavy>
          만다라트
          <br />
          만드러용
        </TitleHeavy>
      </div>
      <LargeBtn onClick={() => navigate('/chat')} text="만들러가기" />
      <TextLight>
        다가오는 2024년, 청룡의 해!
        <br />
        청뇽이와 함께 <b>만다라트</b>로
        <br />
        새해 계획을 세워보는 건 어떨까용?
      </TextLight>
    </s.homeLayout>
  );
};

export default Homepage;
