import styled from 'styled-components';

export const SearchTbx = styled.input`
  padding: 0px 25px 0px 25px;
  font-weight: bold;
  margin-right: 20px;
  border: 2px solid black;
  font-size: 20px;
  width: 400px;
  border-radius: 6px;
`;

export const SearchBtn = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 6px;
  border: 2px solid black;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: #90cea1;
    background-color: #032541;
    font-weight: bold;
  }
`;
