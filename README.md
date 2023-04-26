# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[ANIMATIONS](#animations)**
   * **[Installation](#istallation)**
   * **[Basic Animations](#basic-animations)**
   * **[Variants part One](#variants-part-one)**
   * **[Variants part Two](#variants-part-two)**
   
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

### Variants part One
[Variant](https://www.framer.com/docs/introduction/##variants) 는 컴포넌트가 가질 수 있는 미리 정의된 state 이다.   
코드를 깔끔하게 해주고 애니매이션을 연결해줄 수 있다.

### Variants part Two
[Orchestration](https://www.framer.com/motion/transition/#orchestration)     

- `delayChildren` : 딜레이 시간(초) 후에 하위 애니메이션이 시작된다.   
- `staggerChildren` : 하위 컴포넌트의 애니메이션에 지속 시간(초)만큼 시차를 둘 수 있다. 예를 들어, 
staggerChildren이 0.01이면 첫 번째 자식은 0초, 두 번째 자식은 0.01초, 세 번째 자식은 0.02초 지연되는 식다. 계산된 stagger 딜레이가 delayChildren에 추가됩니다.
- `inherit: boolean` : 부모로부터 variant 변경 사항을 상속하지 않도록 하려면 false로 설정한다. [inherit](https://www.framer.com/docs/component/###inherit)
- `custom: any` : 각 애니메이션 컴포넌트에 대해 dynamic variants을 다르게 사용할 사용자 지정 데이터이다.
```javascript
const variants = {
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

<motion.div inherit={false} custom={0} animate="visible" variants={variants} />
<motion.div custom={1} animate="visible" variants={variants} />
<motion.div custom={2} animate="visible" variants={variants} />
```
