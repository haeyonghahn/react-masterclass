# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[STATE MANAGEMENT](#state-management)**
    * **[To Do Setup](#to-do-setup)**
    * **[Forms](#forms)**
    * **[Form Validation](#form-validation)**
    * **[Form Errors](#form-errors)**
    * **[Custom Validation](#custom-validation)**
    * **[Recap](#recap)**
    * **[Add To Do](#add-to-do)**
    * **[Refactoring](#refactoring)**
    * **[Categories](#categories)**
    * **[Immutability part One](#immutability-part-one)**
    * **[Inmmutability part Two](#inmmutability-part-two)**
    * **[Selectors part One](#selectors-part-one)**
    * **[Selectors part Two](#selectors-part-two)**
    * **[Enums](#enums)**

## STATE MANAGEMENT
### To Do Setup
`react-hook-form`을 사용하지 않고 form 을 개발해보자.   

### Forms
__React Hook Form__   
[React Hook Form](https://react-hook-form.com/)    
사용하기 쉬운 유효성 검사를 통해 성능이 뛰어나고 유연하며 확장 가능한 form 이다.   

__library__
```
npm install react-hook-form
```
__code__   
```javascript
const {
  register,
  handleSubmit,
  formState : {
    errors,
  }
} = useForm();
...

<input {...register("email", {required: true})} placeholder="Email" />
```

```javascript
register: (name:string, RegisterOptions?) => ({ onChange, onBlur, name, ref})
```
해당 메서드를 사용하면 input을 등록하거나 element를 선택하고 유효성 검사 규칙을 React Hook Form에 적용할 수 있다.    
유효성 검사 규칙은 모두 HTML 표준을 기반으로 하며 사용자 지정 유효성 검사 방법도 허용한다.

```javascript
watch: (names?:string | string[] | (data.options) => void) => unknown
```
input의 변화를 구독한다. 이 메서드는 지정된 input을 감시하고 해당 값을 반환한다.   
input 값을 렌더링하고 조건에 따라 무엇을 렌더링할지 결정하는데 유용하다.

### Form Validation
```javascript
handleSubmit: (
               (data: Object, e?: Event) => void, 
               (errors: Object, e?: Event) => void
              ) => Function
```
해당 함수는 form 유효성 검사가 성공하면 form 데이터를 받는다.   

```javascript
const { register, handleSubmit } = useForm();
const onValid = (data: any) => {
  console.log(data);
};

<form onSubmit={handleSubmit(onValid)} />
```

### Form Errors
React Hook Form은 TypeScript로 빌드되었으며, FormData 유형을 정의하여 form 값을 지원할 수 있다.   
```typescript
type FormData = {
  firstName: string;
  lastName: string;
};
...
const { register, setValue, handleSubmit, formState: { errors } } = useForm< FormData >();
```

input에 대한 defaultValues는 사용자가 component와 상호 작용하기 전에 component가 처음 렌더링될 때 초기 값으로 사용된다.   
모든 input에 대한 defaultValues를 빈 문자열이나 null과 같은 정의되지 않은 값으로 설정하는 것이 좋다.   
```typescript
defaultValues: Record<string, any> = {}
```

### Custom Validation
__setError__   
```javascript
setError(
  name: string,
  error: FieldError, 
  { shouldFocus?: boolean }
```
하나 이상의 오류를 수동으로 설정할 수 있다.   
`shouldFocus` : boolean 오류를 설정하는 동안 input에 focust를 맞춰야 한다. input이 비활성화되면 작동하지 않는다.

__validate__   
```javascript
validate: Function | Object
```

__clearErrors__   
```jaavscript
clearErrors: (name?: string | string[]) => void
```
이 함수는 form의 오류 메시지를 수동으로 지울 수 있다.
setErrors()로 설장한 메시지를 삭제할 있다.
```javascript
clearErrors("username");
...
onClick={() => clearErrors(["firstName", "lastName"])}
```

### Recap
__setValue__    
```javascript
setValue: (
  name: string,
  value: unknown, config?: Object
) => void  
```
필드 값을 업데이트한다.   
등록된 필드의 값을 동적으로 설정하고 form state를 확인하고 업데이트하는 옵션을 가질 수 있다.   
동시에 불필요한 rerender를 피할 수 있다.

__reset__   
```javascript
reset: (
  value?: Record,
  options?: Record
) => void
```
form state와 value 재설정   
전체 form state 또는 state의 일부를 재설정할 수 있다.
```javascript
reset(); // form 전체 리셋
reset({ email: "" }); // form에서 특정 필드만 리셋
```

### Add To Do
__useRecoilState(state)__   
첫 요소가 상태의 값이며, 두번째 요소가 호출되었을 때 주어진 값을 업데이트하는 setter 함수인 튜플을 리턴한다.   
해당 hook은 암묵적으로 주어진 상태의 컴포넌트를 구독한다.

> 참고   
> useRecoilValue : state 값을 리턴    
> useSetRecoilState : setter 함수를 리턴    
> useRecoilState : state, setter 함수를 모두 리턴    

### Immutability part One
__Array.prototype.findIndex()__   
findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환한다.   
만족하는 요소가 없으면 -1을 반환한다.
```javascript
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber)); // 3
```

### Inmmutability part Two
__Array.prototype.slice()__   
slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환한다.   
원본 배열은 바뀌지 않는다. end가 생략되면 slice()는 배열의 끝까지(arr.length) 추출한다.
```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // ['camel', 'duck', 'elephant']
console.log(animals.slice(2, 4))); // ['camel' 'duck']
```

> 참고    
> 상태관리툴을 사용할 때는 기본적으로 mutate를 사용하지 않고 상태를 변경해줘야 한다.      
> 그냥 `const newTodos = prevTodos` 처럼 작성하면 prevTodos를 가리키는 newTodos에 할당하기 때문에   
> newTodos를 변경하면 prevTodos도 같이 변경되어 mutate 되게 된다. 그래서 완전히 새로운 object나 array를 만들어주고
> 거기에 요소들을 그대로 입력해주기위해 spread 방식을 사용한다. 다른 방식으로는 assign 등을 사용해 할달할 수 있다.

### Selectors part One
[selectors](https://recoiljs.org/ko/docs/basic-tutorial/selectors/)   
__Selectors__   
Selector는 파생된 state(derived state)의 일부를 나타낸다. 즉, 기존 state를 가져와서 기존 state를 이용해 새로운 state를 만들어서 반환할 수 있다. 기존 state를 이용만할 뿐 변형시키지 않는다. derived state는 다른 데이터에 의존하는 동적인 데이터를 만들 수 있기 때문에 강력한 개념이다.

### Selectors part Two
> 참고 onInput과 onChange 이벤트 차이   
> onchange 이벤트는 값이 변경된 직후가 아니라, 변경되고 포커스를 잃을 때 발생한다.    
> oninput 이벤트는 값이 바뀔 때마다 발생하는 이벤트이다.

### Enums
enum은 TypeScript가 제공하는 기능 중 하나이다. enum은 열거형으로 이름이 있는 상수들의 집합을 정의할 수 있다. 열거형을 사용하면 의도를 문서화하거나 구분되는 사례 집합을 더 쉽게 만들 수 있다. TypeScript는 숫자와 문자열 기반 열거형을 제공한다.
