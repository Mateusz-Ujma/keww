import { styled } from 'styled-components';
import Colors from '../Colors';

export const Button = styled.button`
  background-color: ${Colors.lightGrey};
  border: none;
  border-radius: 5px;
  margin: 10px auto 10px auto;
  width: 170px;
  height: 35px;
`;
export const ButtonText = styled.p`
  color: ${(props) => (props.light == 'true' ? Colors.lightGrey : Colors.darkGrey)};
  text-shadow: 1px 1px 4px rgba(193, 194, 200, 0.5);
`;
