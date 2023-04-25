# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[TRELLO CLONE](#trello-clone)**
   * **[Get Selectors](#get-selectors)**
   * **[Set Selectors](#set-selectors)**
   * **[Drag and Drop part One](#drag-and-drop-part-one)**
   * **[Drag and Drop part Two](#drag-and-drop-part-two)**
   * **[Styles and Placeholders](#Styles-and-placeholders)**
   * **[Reordering](#reordering)**
   * **[Reordering part Two](#reordering-part-two)**
   * **[Performance](#performance)**
   * **[Multi Boards](#multi-boards)**
   * **[Same Board Movement](#same-board-movement)**
   * **[Cross Board Movement](#cross-board-movement)**
   * **[Droppable Snapshot](#droppable-snapshot)**
   * **[final-styles](#final-styles)**
   
## TRELLO CLONE
### Get Selectors
[selector](https://recoiljs.org/ko/docs/api-reference/core/selector)

### Set Selectors
`set?` - 속성이 설정되면 selector는 쓰기 가능한 상태를 반환한다. 첫 번째 매개변수는 Recoil state, 두번째 매개변수는 새로운 값(newValue)이다. 새로운 값은 업데이트 함수나 재설정 액션을 전파하는 DefaultValue 객체일 수 있다.
```javascript
const proxySelector = selector({
  key: 'ProxySelector',
  get: ({ get }) => (
    {...get(myAtom), extraField: 'hi' }
  ),
  set: ({ set }, newValue) => set(myAtom, newValue);
});
```

### Drag and Drop part One
__react_beautiful-dnd__   
[react beautiful dnd](https://www.npmjs.com/package/react-beautiful-dnd)   
React로 드래그 앤 드롭 기능을 만들 수 있는 라이브러리이다.   
```
npm i react-beautiful-dnd
npm i --save-dev @types/react-beautiful-dnd
```
버전 문제 발생 시 
```
npm i react-beautiful-dnd --legacy-peer-deps
npm i @types/react-beautiful-dnd --legacy-peer-deps
```

### Drag and Drop part Two
```javascript
...
<Draggable draggableId="first" index={0}>
  {(provided) => (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      One
    </li>
  )}
</Draggable>
...
```
요소가 기본적으로 드래그 되기를 원한다면 `draggableProps`를 설정한다.    
어디에서든지 집어서 드래그하고 싶다면 `dragHandleProps`를 설정한다.

### Styles and Placeholders
`provided.placeholder (?ReactElement)`    
Draggable 엘리먼트를 드래그하는 동안 position: fixed(영역을 고정시킴)를 적용한다.    
Draggable을 드래그할 때 Droppable 리스트가 작아지는 것을 방지하기 위해 필요하다.    
Draggable 노드의 형제로 렌더링하는 것이 좋다.   

### Reordering
`onDragEnd`   
result: DropResult   
result.draggabledId : 드래그되었던 Draggable의 id.    
result.type : 드래그 되었던 Draggable의 type.   
result.source : Draggable 이 시작된 위치(location).    
result.destination : Draggable 이 끝난 위치(location). 만약에 Draggable이 시작한 위치와 같은 위치로 돌아오면 이 destination 값은 null이 될 것이다.   

`Array.prototype.splice()`   
`splice` 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.

```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // expected output: Array ["Jan", "Feb", "March", "April", "June"]
```

### Reordering part Two
`<Draggable /> list의 키`   
< Draggable /> list를 렌더링하는 경우 각 < Draggable />에 key prop을 추가하는 것이 중요하다.    

규칙
key는 list 내에서 고유해야 한다.   
key에 item의 index가 포함되어서는 안된다. (map의 index사용 X)
일반적으로 draggableId를 key로 사용하면 된다.   
> 참고 : list에 key가 없으면 React가 경고하지만 index를 key로 사용하는 경우 경고하지 않는다.   

```javascript
...
return items.map((item, index) => (
< Draggable
// adding a key is important!
key={item.id}
draggableId={item.id}
index={index}
>
...
```

### Performance
드래그를 자주 하다보면 흔들리는 현상을 발견할 수 있다. 해당 부분의 성능을 올려보자.   

`React.memo`     
React.memo는 고차 컴포넌트(Higher Order Component)이다.    
컴포넌트가 동일한 props로 동일한 결과를 렌더링해낸다면,  
React.memo를 호출하고 결과를 메모이징(Memoizing)하도록 래핑하여 경우에 따라 성능 향상을 누릴 수 있다.   
즉, React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용한다.   

React.memo는 props 변화에만 영향을 준다. React.memo로 감싸진 함수 컴포넌트 구현에 useState, useReducer 또는 useContext hook을 사용한다면,  여전히 state나 context가 변할 때 다시 렌더링된다. React.memo는 오직 성능 최적화를 위해 사용된다. 렌더링을 `방지`하기 위해서 사용하면 안된다. DraggableCard에게 동일한 index와 동일한 todo prop을 받으면 리렌더링을 하지 않도록 하기 위함이다.   
```javascript
...
function MyComponent(props) {
/* props를 사용하여 렌더링 */
}
...
export default React.memo(MyComponent, areEqual);
```
> 참고 : React.memo를 사용할 때는 function에서 export하면 안되고 파일 자체에서 export 해야한다.

### Multi Boards
`Object.keys(obj)`   

Object.keys() 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환한다.   

```javascript
const object = {
a: 'something',
b: 42,
c: false
}

console.log(Object.keys(object)); // Array ["a", "b", "c"]
```

### Same Board Movement
`To Do에만 큰따음표가 붙는 이유`   
```javascript
"To Do": ["a", "b"], //To 와 Do 사이에 띄어쓰기가 있기 때문
Doing: ["c", "d", "e"],
Done: ["f"],
```

`ES6: Computed property name`   
객체의 key값을 표현식(변수, 함수 등을 이용)을 통해 지정하는 것이다.   
```javascript
return {
  ...allBoards,
  [source.droppableId]: boardCopy,
};
```
```javascript
var name1 = "장동건";
var name2 = "원빈";
var num = 1;
 
var obj = {
    [num+") "+name1]:"반장",
    [num+1+") "+name2]:"부반장"
};
 
console.log(obj); // { 1) 장동건: "반장", 2) 원빈: "부반장" }
```

### Cross Board Movement

### Droppable Snapshot
[Droppablestate snapshot](https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/droppable.md#2-snapshot-droppablestatesnapshot)

`isDraggingOver: boolean`   
현재 선택한 Draggable이 특정 Droppable위에 드래깅 되고 있는지 여부 확인   

`draggingOverWith: ?DraggableId`      
Droppable 위로 드래그하는 Draggable ID    

`draggingFromThisWith: ?DraggableId`   
현재 Droppable에서 벗어난 드래깅되고 있는 Draggable ID   

`isUsingPlaceholder: boolean`   
placeholder가 사용되고 있는지 여부   

`Boolean(snapshot.draggingFromThisWith)으로 감싼 이유`   
snapshot.draggingFromThisWith 값이 `undefined`일 경우 true/false로 치환하기 위해 Boolean으로 감싼 것이다.   
Boolean()은 true/false 로 값을 변환한다.

### Final Styles
[Draggablestate snapshot](https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/draggable.md#2-snapshot-draggablestatesnapshot)

`isDragging: boolean`   
Draggable이 활발하게 드래그 중이거나 드롭 애니메이션인 경우 true로 설정한다.
