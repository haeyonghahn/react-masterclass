# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[CRYPTO TRACKER](#crypto-tracker)**
    * **[Setup](#setup)**
    * **[Styles](#styles)**
    * **[Home part One](#home-part-one)**
    * **[Route States](#route-states)**
    * **[Coin Data](#coin-data)**

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
> 참고   
> 코인 Detail API   
> https://api.coinpaprika.com/v1/coins/${coinId}     
> https://api.coinpaprika.com/v1/tickers/${coinId}   
