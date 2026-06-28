import styled from 'styled-components';
/* 검색tbx */
const SearchTbx = styled.input`
  height: 45px;
  width: 450px;
  border-radius: 30px;
  font-size: 20px;
  padding: 0px 25px;
  font-weight: bold;
  margin-right: 20px;
  border: 1px solid #ccc;
  border: 2px solid black;
`;

/* 검색btn */
const SearchBtn = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 6px;
  border: none;
  border: 2px solid black;

  &:hover {
    cursor: pointer;
  }
`;

const SearchBar = () => {
  return (
    <form>
      <fieldset>
        <SearchTbx placeholder="검색어를 입력해 주세요" />
        <SearchBtn type="submit">검색</SearchBtn>
      </fieldset>
    </form>
  );
};

export default SearchBar;
