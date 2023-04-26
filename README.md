# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[ANIMATIONS](#animations)**
   * **[Installation](#istallation)**
   * **[Basic Animations](#basic-animations)**
   
### Installation
__Framer Motion__   
https://github.com/framer/motion   
https://github.com/framer/motion/tree/main/packages/framer-motion   

```
npm install framer-motion
```

__CRACO__   
https://github.com/gsoft-inc/craco    
https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation    
framer motion 설치 시 create-react-app version 4 버전에서 에러 발생 시 설치한다.   
```
npm install @craco/craco --save
```
```
📦 react-masterclass
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📜 App.tsx
 ┃ ┗ 📜 index.tsx
 ┣ 📜 craco.config.js
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┗ 📜 tsconfig.json
```
```js
//craco.config.js

module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: "javascript/auto",
            test: /\.mjs$/,
            include: /node_modules/,
          },
        ],
      },
    },
  },
};
```

### Basic Animations   
https://www.framer.com/docs/animation   
Framer Motion의 애니메이션은 모션 컴포넌트의 유연한 animate 속성을 통해 제어된다. 간단한 애니메이션의 경우 animate props에서 직접 값을 설정할 수 있다.   
