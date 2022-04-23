import styled from 'styled-components';

interface IProps {
  colorText: string;
}

export const StyledFooter = styled.div<IProps>`
  width: 70%;
  color: ${props => props.colorText};
  margin: 0 auto;
  padding: 5px;
  border-top: 1px solid ${props => props.colorText};
  text-align: center;
  margin-top: 23px;
  padding-bottom: 15px;
`;