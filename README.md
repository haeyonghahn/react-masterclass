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
    * **[Nested Routes part Two](#nested-routes-part-two)**
    * **[React Query part One](#react-query-part-one)**
    * **[React Query part Two](#react-query-part-two)**

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
> react-router-dom v6 에서 `Switch` 는 `Routes` 로 변경되었다. 아래와 같은 방법으로 사용해보자.   
> 
> Outlet (중첩 라우트 사용하기)   
> 자식 라우트의 엘리먼트가 있는 경우 렌더링한다.   
> `Outlet`은 부모 경로 요소에서 자식 경로 요소를 렌더링하는 데 사용해야 한다.   
> 이를 통해 하위 경로가 렌더링될 때 중첩된 UI를 표시할 수 있습니다. 부모 라우트가 정확히 일치하면 자식 인덱스 라우트를 렌더링하거나 인덱스 라우트가 없으면 아무것도 렌더링하지 않는다.

### Nested Routes part Two
__useRouteMacth__   
특정한 URL에 있는지 여부를 알려준다.

### React Query part One
https://tanstack.com/query/latest   
https://react-query-v3.tanstack.com/     

__React Query__   
React 애플리케이션 서버 state를 fetching, caching, synchronizing, updating할 수 있도록 도와주는 라이브러리이다.    
`global state`를 건드리지 않고 React 및 React Native 애플리케이션에서 데이터를 가져오고 캐시하고 업데이트한다.

__Queries__   
쿼리는 서버에서 데이터를 가져오기 위해 모든 Promise 기반 메서드(GET 및 POST 메서드 포함)와 함께 사용할 수 있다.   
제공한 고유 키는 애플리케이션 전체에서 쿼리를 다시 가져오고 캐싱하고 공유하는 데 내부적으로 사용된다.   
`useQuery`에서 반환된 쿼리 결과에는 템플릿 및 기타 데이터 사용에 필요한 쿼리에 대한 모든 정보가 포함되어 있다.

__Query Key__    
React Query는 쿼리 키를 기반으로 쿼리 캐싱을 관리한다.   
https://react-query.tanstack.com/guides/query-keys   

__library__     
```bash
$ npm i @tanstack/react-query
# or
$ pnpm add @tanstack/react-query
# or
$ yarn add @tanstack/react-query
```

> 참고   
> react 버전이 18이면 TypeScript에서 react query를 못 불러온다.   
> `npm i @tanstack/react-query` 을 통해 모듈을 설치하여 사용하자.
> 그리고 `@tanstack/react-query` 에서 useQuery를 사용할 때 query key의 값은 대괄호로 묶어줘야한다.
> ```javascript
> const { isLoading, data } = useQuery(["allCoins"], fetchCoins);
> ```

React Query 는 아래와 같은 과정을 숨겨줄 수 있다. 즉, 필요가 없게 된다.   
```javascript
// Coins.tsx

...
function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  ...
```
아래와 같은 방법으로 바꿔보자.
```javascript
// api.ts

export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
```
```javascript
// Coins.tsx

...
function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);
  return (
    <Container>
      <Header>
        <Title></Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                ></Img>
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
...
```

> 참고 
> 기본적으로 API와 관련되 것들은 컴포넌트와 멀리 떨어져 있도록 하자.    
> `Loading...` 표시되지 않는 이유는 react-query는 데이터를 캐시에 저장해두고 있다.

### React Query part Two
__React Query Devtools__     
Devtools는 render할 수 있는 컴포넌트이다.    
React Query에 있는 devtools를 import 해오면 캐시에 있는 Query 를 볼 수 있다.

__library__   
```
npm i -D @tanstack/react-query-devtools
```
```javascript
// App.tsx
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

...
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}
...
```
![image](https://user-images.githubusercontent.com/31242766/220250618-dde4c1d6-ec01-495e-af35-32745ee9811a.png)    

React Query 는 아래와 같은 과정을 숨겨줄 수 있다. 즉, 필요가 없게 된다.   
```javascript
// Coin.tsx

...
function Coin() {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, [coinId]);
  ...
```
아래와 같은 방법으로 바꿔보자.   
```javascript
// api.ts

const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}
```
```javascript
// Coin.tsx

...
function Coin() {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)    //fetcher 함수를 불러와서 URL로부터 오는 coinId를 넣어주자. 
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId) //fetcher 함수를 불러와서 URL로부터 오는 coinId를 넣어주자. 
  );
  const loading = infoLoading || tickersLoading;
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/:coinId/price`}>
              <Price />
            </Route>
            <Route path={`/:coinId/chart`}>
              <Chart />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}
...
```
