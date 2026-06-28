/* styled-components */
import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 0px 25px;
  font-weight: bold;
  margin-right: 20px;
  border: 2px solid black;
`;

export const SearchBtn = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 6px;
  border: 2px solid black;

  &:hover {
    cursor: pointer;
  }
`;
