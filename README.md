# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[CRYPTO TRACKER](#crypto-tracker)**
    * **[Setup](#setup)**
    * **[Styles](#styles)**
    * **[Home part One](#home-part-one)**
    * **[Route States](#route-states)**
    * **[Coin Data](#coin-data)**
    * **[Data Types](#data-types)**
    * **[Nested Routes part One](#nested-routes-part-one)**

## CRYPTO TRACKER
### Setup
__library__   
```
npm i react-router-dom@5.3.0 react-query
```

### Styles   
스타일은 브라우저의 기본 스타일을 따른다. 예를 들어, `<h1>` 태그의 font-size의 기본은 2em 인 것이다. 이러한 것을 Setup 시키는 작업을 진행해보려고 한다. 
만약 해당 작업 없이 진행한다고 하면 `<ul>` 태그에 패딩이 존재하며 `<li>` 태그에 마진이 붙는 경우 이러한 속성값을 없애고 0으로 셋팅하기엔 번거로운 작업이 진행될 것이다. 
이러한 작업을 도와주기 위해 Reset CSS 을 도와주는 라이브러리가 존재한다.    

__library__    
[styled-reset](https://github.com/zacanger/styled-reset/blob/master/src/index.ts)   
[flat ui color](https://flatuicolors.com/)

__createGlobalStyle__   
전역 스타일을 처리하는 함수이다. `styled-reset`에 존재하는 속성을 복사하여 해당 부분에 사용하고 필요한 부분은 추가하여 사용한다.
```javascript
const GlobalStyle = createGlobalStyle``;
```

__fragment__   
불필요한 div 생성을 방지하기 위한 유령 컴포넌트이다.
```javascript
function App() {
  return (
    <>
    </>
  );
}
```

### Home part One
> 참고   
> react-router-dom v5 버전 사용시 URL 은 변하지만 렌더링이 안되는 이슈가 있다.
> 1. index.tsx 에서 렌더의 React.StrictMode를 div 로 바꾸거나
> 2. react-router-dom v6를 사용하자.

### Route States
> 참고   
> 코인 Image API   
> https://coinicons-api.vercel.app/
> 
> react-router-dom v6 부터 Link 의 to 에 모든 정보를 담지 않고   
> 아래와 같은 방법으로 사용하도록 바뀌었다.
> ```javascript
> <Link to={} state={} />
> ```
> react-router-dom v6 부터 제네릭을 지원하지 않는다.   
> `<>` 형태가 아닌 `as` 를 사용해야 한다.   
> 아래와 같은 방법으로 사용해보자.   
> ```typescript
> interface RouteState {
>  state : {
>    name: string;
>  }
> }
> ...
> const { state } = useLocation() as RouteState;
> ```

### Coin Data
코인 Detail 화면에 뿌려줄 데이터를 셋팅해보자.   
> 참고 : 코인 Detail API   
> https://api.coinpaprika.com/v1/coins/${coinId}     
> https://api.coinpaprika.com/v1/tickers/${coinId}   

### Data Types
> 참고 : VSCode 단축키     
> Ctrl(Command)+D: 같은 문자열 선택   
> Shift+Alt(Option)+i: 선택한 모든 문자열에 가장 우측 끝으로 포커싱   
> Ctrl(Command)+Shift+오른쪽 화살표: 현재 선택한 문자열을 기준으로 우측 끝까지 문자열 선택

### Nested Routes part One
Nested router 혹은 Nested route 는 route 안에 있는 또 다른 route 이다. Nested router 를 사용하면 웹사이트에서 탭을 사용할 때 유용하다. 스크린 안에 많은 섹션이 나뉘어진 곳에서도 마찬가지이다. 예를 들어, 차트탭과 그래픽탭이 만들어야 한다. 해당 탭들을 State 로 컨트롤 하는 것 대신에 URL로 컨트롤하고 싶을 때 Nested router 를 사용할 수 있다. URL 로 하는 것이 사용성이 높다. 사용자가 바로 접속할 수 있기 때문이다.

> 참고   
> react-router-dom v6 에서 `Switch` 를 지원하지 않는다. 아래와 같은 방법으로 사용해보자.   
> 
> Outlet (중첩 라우트 사용하기)   
> 자식 라우트의 엘리먼트가 있는 경우 렌더링한다.   
> `Outlet`은 부모 경로 요소에서 자식 경로 요소를 렌더링하는 데 사용해야 한다.   
> 이를 통해 하위 경로가 렌더링될 때 중첩된 UI를 표시할 수 있습니다. 부모 라우트가 정확히 일치하면 자식 인덱스 라우트를 렌더링하거나 인덱스 라우트가 없으면 아무것도 렌더링하지 않는다.
