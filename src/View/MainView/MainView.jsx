import React from 'react';
import { MainSection, Wrapper, ButtonLogin } from './MainView.styles';
import { Text } from '../../assets/Components/Text';
import { Input } from '../../assets/Components/Input';
import { ButtonText } from '../../assets/Components/Button';

const MainView = () => {
  return (
    <MainSection>
      <Text visible="true" fontSize="50px">
        Książka Eksploatacji Wózka Widłowego
      </Text>

      <Wrapper>
        <Input type="text" placeholder="identyfikator" />
        <Input type="password" placeholder="hasło" />
        <ButtonLogin>
          <ButtonText light="true">Zaloguj</ButtonText>
        </ButtonLogin>
      </Wrapper>
    </MainSection>
  );
};

export default MainView;
