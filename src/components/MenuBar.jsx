import {LargeMenu, SmallMenu} from './MenuBarStyed';
const MenuBar = () => {
  return (
    <>
      <div>
        <LargeMenu>
          <LargeMenu>
            영화
            <ul>
              <li>국내영화</li>
              <li>해외영화</li>
            </ul>
          </LargeMenu>
          <LargeMenu>
            순위
            <ul>
              <li>인기 많은 순</li>
              <li>많은 리뷰순</li>
            </ul>
          </LargeMenu>
          <LargeMenu>최신</LargeMenu>
          <LargeMenu>방영중</LargeMenu>
          <LargeMenu>개봉 예정</LargeMenu>
          <LargeMenu>
            연령
            <ul>
              <li>어린이</li>
              <li>성인</li>
            </ul>
          </LargeMenu>
        </LargeMenu>
      </div>
    </>
  );
};

export default MenuBar;
