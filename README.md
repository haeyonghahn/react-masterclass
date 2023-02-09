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
