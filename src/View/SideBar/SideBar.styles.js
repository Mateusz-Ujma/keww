import { styled } from 'styled-components';
import Colors from '../../assets/Colors';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.darkGrey};
  width: 300px;
  height: 100vh;
  color: ${Colors.lightGrey};
`;

export const ButtonText = styled.a`
  text-decoration: none;
  color: ${Colors.darkGrey};
  font-weight: 700;
  font-size: 20px;
  text-shadow: 1px 1px 4px rgba(66, 68, 90, 0.5);
`;
