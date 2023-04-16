# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[TRELLO CLONE](#trello-clone)**
   * **[Get Selectors](#get-selectors)**
   * **[Set Selectors](#set-selectors)**
   * **[Drag and Drop part One](#drag-and-drop-part-one)**
   * **[Drag and Drop part Two](#drag-and-drop-part-two)**
   * **[Styles and Placeholders](#Styles-and-placeholders)**
   
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
