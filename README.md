# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[NOMFLIX-CLONE](#nomflix---clone)**
   * **[Header part One](#header-part-one)**
   * **[Header part Two](#header-part-two)**
   * **[Header part Four](#header-part-four)**

## Header part One
[넷플릭스 로고](https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg) : 개발자 도구에서 svg 태그 복사해서 사용하기    

## Header part Two
react-router-dom v6   
https://reactrouter.com/docs/en/v6/upgrading/reach#usematch   
https://reach.tech/router/api/useMatch

1. `Link`에서 `to`는 상대경로로 적으면 된다. (ex. '/tv' -> 'tv')
2. `isExact`가 없어졌다. 대신 알아서 최적의 경로를 react-router-dom이 판단해서 매칭해준다.
3. `useRouteMatch`가 `useMatch`로 변경되었다. 이것 또한 상대경로로 작성하는 것으로 변경되었다. (ex. useRouteMatch('/tv') -> useMatch('tv')

## Header part Four
- `useViewportScroll` -> `useScroll` : useViewportScroll은 deprecated 되었다.
- `useEffect` 대신 framer motion에서 지원하는 [useMotionValueEvent](https://www.framer.com/motion/use-motion-value-event/)를 사용하면 된다.
