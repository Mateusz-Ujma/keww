import { styled } from 'styled-components';
import Colors from '../../assets/Colors';
import { Button } from '../../assets/Components/Button';

export const MainSection = styled.div`
  background-color: ${Colors.lightGrey};
  width: 100%;
  height: 100vh;
  color: ${Colors.darkGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const Wrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
export const ButtonLogin = styled(Button)`
  background-color: ${Colors.darkGrey};
`;
