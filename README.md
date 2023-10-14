# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[NOMFLIX-CLONE](#nomflix---clone)**
   * **[Header part One](#header-part-one)**
   * **[Header part Two](#header-part-two)**
   * **[Header part Four](#header-part-four)**
   * **[Slider part Two](#slider-part-two)**

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

## Slider part Two
### 다음 슬라읻로 넘어갈 때 자꾸 겹침현상 해결
1. 함수 컴포넌트 하나를 만든다.
```javascript
import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleSize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  return windowDimensions;
}

export default useWindowDimensions;
```
2. `Home.tsx`에서 `import` 해온다.
```javascript
const width = useWindowDimensions();
```
3. `const rowVariants`를 삭제하고 컴포넌트에 직접 `initial`, `animate`, `exit` 값을 준다.
```javascript
...
<Row
  initial={{ x: width + 10 }}
  animate={{ x: 0 }}
  exit={{ x: -width - 10 }}
  transition={{ type: "tween", duration: 1 }}
  key={index}
>
...
```
### AnimatePresence
[onExitComplete](https://www.framer.com/docs/animate-presence/###onexitcomplete)      
exit 중인 모든 노드들이 애니메이션을 끝내면 실행된다.

__initial__   
`initial={false}`를 전달하면 AnimatePresence는 컴포넌트가 처음 렌더링될 때 자식의 초기 애니매이션을 비활성화한다.

[slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)      
slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환한다. 원본 배열은 바뀌지 않는다.
