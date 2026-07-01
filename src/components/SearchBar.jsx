import {FieldsetSets, SearchBtn, SearchTbx} from './SearchBarStyled';

const SearchBar = () => {
  return (
    <>
      <form>
        <FieldsetSets>
          <SearchTbx placeholder="검색어를 입력해 주세요" />
          <SearchBtn type="submit">검색</SearchBtn>
        </FieldsetSets>
      </form>
    </>
  );
};
export default SearchBar;
