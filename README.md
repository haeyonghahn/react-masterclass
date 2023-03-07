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
