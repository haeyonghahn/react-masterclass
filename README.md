# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

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
  * **[Animations and Pseudo Selectors](#animations-and-pseudo-selectors)**
  * **[Pseudo Selectors part Two](#pseudo-selectors-part-two)**
  * **[Theme](#theme)**
* **[TYPESCRIPT](#typescript)**
  * **[Definitely Typed](#definitely-typed)**
  * **[Typing the Props](#typing-the-props)**
  * **[Optional Props](#optional-props)**
  * **[State](#state)**
  * **[Forms](#forms)**
  * **[Theme](#theme-1)**

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

### Animations and Pseudo Selectors
__vscode extention__   
[Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji)   

__단축키__     
- Window : 'Win' + '.'
- Mac : 'control' + 'command' + 'Space'

styled-component에서 사용하는 animation을 배워보자.   
```javascript
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😁</span>
      </Box>
    </Wrapper>
  );
}

export default App;
```

### Pseudo Selectors part Two
styled component 안의 element를 선택하는 다른 방법에 대해 알아보자.    
```javascript
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">😁</Emoji>
      </Box>
      <Emoji>😒</Emoji>
    </Wrapper>
  );
}

export default App;
```

### Theme
`Theme`는 기본적으로 모든 색상들을 가지고 있는 object이다. 모든 색깔을 하나의 object 안에 넣어놨기 때문에 유용하다.    
그 이유는 component의 색을 일일이 바꾸는 게 아니라 색깔을 바꿀 때 그 object만 바꿔주면 되기 때문이다.
```javascript
// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);
```
```javascript
// App.js

import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
```

## TYPESCRIPT
[TypeScript](https://www.typescriptlang.org/)
### Definitely Typed
`create-react-app`에 TypeScript를 설치해보자.   
[create-react-app add typescript](https://create-react-app.dev/docs/adding-typescript)   
1. create-react-app을 처음부터 시작할 때 typescript와 함께 설치
```console
npx create-react-app my-app --template typescript
or
yarn create react-app my-app --template typescript
```
2. create-react-app을 중간부터 시작하고 있을 때 typescript를 설치
```console
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
or
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```
- TypeScript로 변경한 이후엔 파일의 확장자를 바꿔줘야 한다. (`.js` -> `.ts`)   
- TypeScript와 React에선 `.tsx`를 사용한다.
  - `index.tsx` 수정
  ```typescript
  const root = ReactDOM.createRoot(document.getElementById("root")); (O)
  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement); (X)
  ```
- 라이브러리나 패키지는 TypeScript로 만들어진 것이 아니기 때문에 TypeScript가 알아볼 수 있는 의존성 파일을 설치해야 한다.
  - [TypeScript 의존성 파일](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types)
  - `tsconfig.json` 파일 생성
  ```console
  npx tsc --init
  ```
  - `tsconfig.json` 파일에 `react-jsx` 추가
  ```console
  {
   ...
   "jsx" : "react-jsx"
  }
  ```
  - TypeScript `styled-component` 설치   
  이전 실습에서 `styled-component`를 사용했다. TypeScript `styled-component` 파일을 설치해주자.  
  ```console
  npm i --save-dev @types/styled-components
  ```
- project structure
```
📦 react-masterclass
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📜 App.tsx
 ┃ ┗ 📜 index.tsx
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┗ 📜 tsconfig.json
```

### Typing the Props
component가 필요로 하는 prop을 TypeScript에게 설명할 수 있는지 배워보자.   

__interface__    
object shape을 잡아준다.   
아래의 예제에서 bgColor의 타입은 CircleProps의 object라고 말해주고 있다.
```javascript
// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
```
```javascript
// App.tsx
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;
```
```javascript
// Circle.tsx
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
```
> 참고 : Prop Types 와 차이점    
> TypeScript으로 정의 시 코드 실행 전에 오류를 알 수 있다.

### Optional Props
```javascript
// App.tsx
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle bgColor="tomato" text="i'm here" />
    </div>
  );
}

export default App;
```
```javascript
// Circle.tsx
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string; //required
  borderColor?: string; //optional
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
```
- `borderColor ?? bgColor` : `borderColor`가 `undefined`라면 `bgColor`의 값으로 셋팅한다. `borderColor` 값이 존재하면 `borderColor`값을 사용한다.

### State
`state` 안에 type을 지정하려면 Generics안에 type을 지정한다.   
일반적으로 초기값을 지정하면 TypeSrciprt가 자동으로 type을 유추하기 때문에 굳이 지정하지 않아도 되지만 상태가 `undefined` 또는 `null`이 될 수도 있거나 
객체 또는 배열일 때는 지정해주는 것이 좋다.
```javascript
const [counter, setCounter] = useState<number | string>(0);
```

### Forms
React, TypeScript의 도움을 이용해 form을 구현해보자.   

__event에 타입을 씌우는 방법__     
[event HTMLElement](https://reactjs.org/docs/events.html)   
```javascript
// App.tsx
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
```
__ES6 문법__   
```javascript
const {
  currentTarget: { value },
} = event;
```
해당 문법은 ES6 문법이다. event 안의 currentTarget 안의 value 값을 기존 이름 그대로 value라는 변수를 만드는 것이다. `const value = event.currentTarget.value` 와 같다. 만약 currentTarget 안에서 value, tagName, width 등을 가져오고 싶다고 한다면 아래와 같이 작성할 것이다.
```javascript
const value = event.currentTarget.value
const tagName = event.currentTarget.tagName
const width = event.currentTarget.width
```
이것을 아래와 같이 작성할 수 있다.
```javascript
const {
  currentTarget: { value, tagName, width },
} = event;
```

### Theme
TypeScript와 styled-components 로 테마를 설정해보자.   
[typescript styled-components](https://styled-components.com/docs/api#typescript)   

__styled.d.ts 파일 생성__   
`styled.d.ts` 파일은 `npm i --save-dev @types/styled-components` 시 생성된 파일이다. 우리는 테마를 활용하기 위해 해당 파일을 확장해야할 필요가 있다. 즉, 커스터마이징하게 사용하기 위해서 해당 파일을 생성하여 `overriding` 하여 파일을 활용한다.    
- project structure
```
📦 react-masterclass
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📜 App.tsx
 ┃ ┣ 📜 index.tsx
 ┃ ┣ 📜 styled.d.ts
 ┃ ┗ 📜 theme.ts
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┗ 📜 tsconfig.json
```
```javascript
// App.tsx
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>protected</H1>
    </Container>
  );
}

export default App;
```
```javascript
// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```
```javascript
// styled.d.ts

// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
```
```javascript
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  btnColor: "tomato",
};

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  btnColor: "teal",
};
```
