# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[TRELLO CLONE](#trello-clone)**
   * **[Get Selectors](#get-selectors)**
   * **[Set Selectors](#set-selectors)**
   
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
