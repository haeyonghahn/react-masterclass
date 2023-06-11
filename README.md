# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[ANIMATIONS](#animations)**
   * **[Installation](#istallation)**
   * **[Basic Animations](#basic-animations)**
   * **[Variants part One](#variants-part-one)**
   * **[Variants part Two](#variants-part-two)**
   * **[Gestures part One](#gestures-part-one)**
   * **[Gestures part Two](#gestures-part-two)**
   * **[MotionValues part One](#motionvalues-part-one)**
   * **[MotionValues part Two](#motionvalues-part-two)**
   * **[MotionValues part Three](#motionvalues-part-three)**
   * **[SVG Animation](#svg-animation)**
   * **[AnimatePresence](#animatepresence)**
   * **[Slider part One](#slider-part-one)**
   * **[Slider part Two](#slider-part-two)**
   
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

### Gestures part One
__Hover__   
hover 제스처는 포인터가 컴포넌트 위로 이동하거나 컴포넌트를 떠날 때를 감지한다. onMouseEnter 및 onMouseLeave와는 달리 실제 마우스 이벤트의 결과로만 호버가 실행되도록 보장된다.   

whileHover: VariantLabels | TargetAndTransition   
[whileHover](https://www.framer.com/docs/gestures/#hover)     
호버 제스처가 인식되는 동안 애니메이션할 속성 또는 변형 레이블이다.   
```javascript
<motion.div whileHover={{ scale: 0.8 }} />
```

__Tap__    
whileTap: VariantLabels | TargetAndTransition      
[whileTap](https://www.framer.com/docs/gestures/#tap)   
컴포넌트를 누르고 있는 동안 애니메이션할 속성 또는 변형 레이블이다.   
```javascript
<motion.div whileTap={{ scale: 0.8 }} />
```

__Drag__    
drag: boolean | "x" | "y"   
이 요소에 대해 끌기를 활성화한다. 기본적으로 false로 설정된다. 양방향으로 드래그하면 true로 설정하자. 특정 방향으로만 드래그하려면 "x" 또는 "y"를 설정한다.   
```javascript
<motion.div drag="x" />
```

whileDrag: VariantLabels | TargetAndTransition    
[whileDrag](https://www.framer.com/docs/gestures/#drag)    
드래그 제스처가 인식되는 동안 애니메이션할 속성 또는 변형 레이블이다.   
```javascript
<motion.div whileDrag={{ scale: 1.2 }} />
```

### Gestures part Two
[drag](https://www.framer.com/docs/gestures/#drag)   
dragConstraints   
허용된 드래그 가능 영역에 제약 조건을 적용한다.   
dragConstraints 에는 드래그 가능한 컴포넌트의 가장자리 거리를 정의한다. (드래그 가능한 영역에 가장자리에서 얼마만큼까지 허용할 것인지 지정)
```javascript
// 픽셀 이용
<motion.div drag="x" dragConstraints={{ left: 0, right: 300 }} />

// ref이용
const MyComponent = () => {
  const constraintsRef = useRef(null)
  return (
    <motion.div ref={constraintsRef}>
    <motion.div 
      drag 
      dragConstraints={constraintsRef} />
    </motion.div>
  )
}
```
dragSnapToOrigin: boolean   
true인 경우 드래그 가능한 요소는 드래그를 놓을 때, 원점으로 다시 애니메이션된다.   
```javascript
dragSnapToOrigin={true}
```

dragElastic: DragElastic   
외부 제약 조건에서 허용되는 이동 정도.    
0 = 움직임 없음, 1 = 전체 움직임. 기본적으로 0.5로 설정된다.    
움직임을 비활성화하기 위해 false로 설정할 수도 있다.
```javascript
dragElastic={0.2}
```

### MotionValues part One
[shortcut](https://pro-self-studier.tistory.com/33)   
[MotionValue](https://www.framer.com/docs/motionvalue/)   
MotionValues는 애니메이션 값의 상태(state)와 속도(velocity)를 추적한다. 모든 모션 컴포넌트는 내부적으로 MotionValues를 사용하여 애니메이션 값의 상태와 속도를 추적한다. 일반적으로 이들은 자동으로 생성된다. (MotionValue는 React State가 아니기 때문에 Motion Value값이 바뀌어도 리랜더링이 일어나지 않는다.)
```javascript
import { motion, useMotionValue } from "framer-motion"

export function MyComponent() {
  const x = useMotionValue(0);
  return <motion.div style={{ x }} />
}
```
```javascript
const x = useMotionValue(0);
```
useMotionValue hook으로 MotionValues를 생성할 수 있다. useMotionValue에 전달된 값은 MotionValue의 초기 상태로 작동한다.   

```javascript
x.set(100)
```
set 메서드로 업데이트할 수 있다. 이것은 React 리렌더링을 트리거하지 않는다.

```javascript
x.get() //100
```
MotionValue는 문자열이나 숫자가 될 수 있다. get 메소드로 값을 읽을 수 있다.

### MotionValues part Two
[useTransform](https://www.framer.com/docs/motionvalue/##usetransform)    
useTransform hook을 통해 MotionValues를 연결한다.   
useTransform()는 한 값 범위에서 다른 값 범위로 매핑하여 다른 MotionValue의 output을 변환하는 MotionValue를 만든다.   
x(Motion Value)값을 다른 output값으로 변환해준다.   
```javascript
const x = useMotionValue(0);
const input = [-200, 0, 200];
const output = [0, 1, 0];
const opacity = useTransform(x, input, output);

return <motion.div drag="x" style={{ x, input, output }} />
```

### MotionValues part Three
[useScroll](https://www.framer.com/docs/motionvalue/##useviewportscroll)    
useScroll(): ScrollMotionValues   
뷰포트가 스크롤될 때 업데이트되는 MotionValues를 리턴한다.   
아래 값들은 모두 MotionValue<number>를 넘겨준다.   
scrollX: 실제 수평 스크롤 픽셀   
scrollY: 실제 수직 스크롤 픽셀   
scrollXProgress: 0 ~ 1 사이의 수평 스크롤   
scrollYProgress: 0 ~ 1 사이의 수직 스크롤(가장 상단 0, 가장 하단 1)   

```javascript
export const MyComponent = () => {
  const { scrollYProgress } = useScroll();
  return <motion.div style={{ scaleX: scrollYProgress }} />
}
```

### SVG Animation
[Fontawesome Airbnb Logo](https://fontawesome.com/v5.15/icons/airbnb?style=brands)    

[Line drawing](https://www.framer.com/docs/examples/#line-drawing)        
svg 엘리먼트에 'pathLength', 'pathSpacing', 'pathOffset' 속성을 사용하여 Line drawing 애니메이셔을 만들 수 있다.   
  
__path (SVG)__          
[path](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path)    
path SVG 엘리먼트는 모양을 정의하는 일반 엘리먼트입니다. 모든 기본 모양은 path 엘리먼트로 만들 수 있다.   
path의 속성 d는 경로의 모양을 정의한다.    

Path    
motion.path 컴포넌트는 세 가지 강력한 SVG path 속성인 pathLength, pathSpacing 및 pathOffset을 가지고 있다. 수동 경로 측정이 필요 없이 모두 0과 1 사이의 값으로 설정된다.    
  
__Line drawing__     
[Line drawing](https://www.framer.com/docs/examples/#line-drawing)     
선 그리기 애니메이션은 pathLength, pathSpacing, pathOffset의 세 가지 특수 속성을 사용하여 많은 SVG 요소로 만들 수 있다.    
ex) motion.circle initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}     

### AnimatePresence
[AnimatePresence](https://www.framer.com/docs/animate-presence/)     
AnimatePresence를 사용하면 React 트리에서 컴포넌트가 제거될 때 제거되는 컴포넌트에 애니메이션 효과를 줄 수 있다. React에는 다음과 같은 수명 주기 메서드가 없기 때문에 종료 애니메이션을 활성화해야 한다.
  
__exit__    
이 컴포넌트가 트리에서 제거될 때 애니메이션할 대상이다.
```javascript
import { motion, AnimatePresence } from "framer-motion"
  
export const MyComponent = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    )}
  </AnimatePresence>
)
```

### Slider part One
[AnimatePresence](https://www.framer.com/docs/animate-presence/##unmount-animations)      
AnimatePresence의 단일 자식 key를 변경하여 슬라이드쇼(슬라이더)와 같은 컴포넌트를 쉽게 만들 수 있습니다.
```javascript
export const Slideshow = ({ image }) => (
  <AnimatePresence>
    <motion.img
      key={image.src}
      src={image.src}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    />
  </AnimatePresence>
)
```
[Slider 예시 코드](https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed)    

### Slider part Two
react.js는 key를 보고 각 Box가 고유하다고 생각한다. react.js는 element마다 고유한 key를 가져야 한다. 그리고 key를 바꾸면 react.js는 component를 re-render 해준다. 
  
[custom](https://www.framer.com/docs/component/###custom)      
각 애니메이션 컴포넌트에 대해 동적 variants를 다르게 적용할 때 사용할 수 있는 사용자 지정 데이터이다.   
```javascript
const variants = {
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

<motion.div custom={0} animate="visible" variants={variants} />
<motion.div custom={1} animate="visible" variants={variants} />
<motion.div custom={2} animate="visible" variants={variants} />
```
[exitBeforeEnter](https://www.framer.com/docs/animate-presence/###exitbeforeenter)   
현재 `mode="wait"` 로 변경되었다. true로 설정하면 AnimatePresence는 한 번에 하나의 컴포넌트만 랜더링한다. exiting중인 컴포넌트는 entering 하는 컴포넌트가 렌더링되기 전에 exit 애니메이션을 완료한다.
```javascript
<Wrapper>
  <AnimatePresence mode="wait" custom={back}>
    <Box
      custom={back}
      variants={box}
      initial="entry"
      animate="center"
      exit="exit"
      key={visible}
    >
      {visible}
    </Box>
  </AnimatePresence>
  <button onClick={nextPlease}>next</button>
  <button onClick={prevPlease}>prev</button>
</Wrapper>
```
