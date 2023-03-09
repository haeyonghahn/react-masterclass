# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[TRELLO CLONE](#trello-clone)**
   * **[Get Selectors](#get-selectors)**
   * **[Set Selectors](#set-selectors)**
   * **[Drag and Drop part One](#drag-and-drop-part-one)**
   
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
