# React-MasterClass
해당 문서 출처는 [React JS 마스터클래스](https://nomadcoders.co/react-masterclass/lobby) 로 작성되었습니다.

## 목차
* **[STATE MANAGEMENT](#state-management)**
    * **[To Do Setup](#to-do-setup)**
    * **[Forms](#forms)**
    * **[Form Validation](#form-validation)**

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
