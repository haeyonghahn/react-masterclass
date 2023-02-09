# React-MasterClass
## Using
- Styled Components
- Recoil
- React Query
- React Router Dom
- Apex Charts
- React Spring
- Typescript
- Firebase

## 목차
* **[STYLED COMPONENTS](#styled-components)**
  * **[Our first Styled Component](#our-first-styled-component)**
  * **[Adapting and Extending](#adapting-and-extending)**
  * **['As' and Attrs](#as-and-attrs)**

## STYLED COMPONENTS
### Our first Styled Component
`styled-component`를 만드는 방법을 알아보자.   
__library__   
```linux
npm i styled-components
```
__vscode extention__   
[styled-components](https://marketplace.visualstudio.com/items?itemName=diegolincoln.vscode-styled-components)

__not use styled-components__   
```javascript
function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
      <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
    </div>
  );
}
```
__styled-components__   
```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}

export default App;
```

### Adapting and Extending
컴포넌트를 설정 변경이 가능한 형태로 만들어 보자.   
```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
    </Father>
  );
}

export default App;
```
컴포넌트를 확장 가능하게 만들 수 있는지 알아보자.    
여기서 확장이란 기존 컴포넌트의 모든 속성을 들고 와서 복붙하고 새로운 기능까지 추가할 수 있는 것을 말한다.    
```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
```

### 'As' and Attrs
컴포넌트를 다룰 때 도움이 될 만한 몇 가지 트릭을 배워보자.   
예를 들어, 컴포넌트의 태그를 바꾸고 싶은데 스타일은 바꾸고 싶지 않을 때와 같은 경우이다.    
__as__   
```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

function App() {
  return (
    <Father as="header">
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
    </Father>
  );
}

export default App;
```
__Attrs__   
동일한 컴포넌트에 동일한 속성을 한 번에 주고 싶은 경우이다.   
```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
```
