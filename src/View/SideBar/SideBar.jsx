import React from 'react';
import { ButtonText, Main } from './SideBar.styles';
import { Text } from '../../assets/Components/Text';
import { Button } from '../../assets/Components/Button';
const SideBar = () => {
  return (
    <Main>
      <Text fontSize="50px" visible="true">
        KEWW
      </Text>

      <Button>
        <ButtonText href="#">Spis</ButtonText>
      </Button>
      <Button>
        <ButtonText href="#">Lista Pojazdów</ButtonText>
      </Button>
      <Button>
        <ButtonText href="#">Zarządzanie</ButtonText>
      </Button>

      <Text visible="false"> nr 1234</Text>
    </Main>
  );
};

export default SideBar;
