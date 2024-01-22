import { styled } from 'styled-components';
import Colors from '../Colors';

export const Text = styled.h1`
  display: ${(props) => (props.visible == 'true' ? 'block' : 'none')};
  font-size: ${(props) => props.fontSize || '20px'};
  margin-bottom: 30px;
  text-shadow: 1px 1px 4px rgba(193, 194, 200, 0.5);
  margin-top: ${(props) => (props.fontSize ? '0px' : '40px')};
`;
