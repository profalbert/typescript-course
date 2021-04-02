// Типы
const isFetching: boolean = true
const isLoading: boolean = false

let int: number = 42
// int = '' // выведет ошибку, так как другой тип

const message: string = 'Hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13] // тип число, но это массив из чисел
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // глобальный класс Array и из чего состоит: <>

const words: string[] = ['Hello', 'Typescript']

//Tuple
const contact1: [string, number] = ['VGHv', 456] // массив из строк и чисел, но нужно задавать тип каждому элементу
const contact2: Array<string | number> = ['VGHv', 456, 'fg', 345, 3455] // смешанный массив, сколько угодно элементов (дженерик)
//Any
let variable: any = 42 // any - тип, который можно переопределять
//...
variable = 'new string'
variable = []

//=============
let sayMyName = (name: string): void => {
  // : void - означает, что функция нам ничего не вернет
  console.log(name)
}
sayMyName('rgr')

//Never //выдает ошибку и нигода не прекращает свое действие, либо постоянно что-то делает
let throwError = (message: string): never => {
  // будет выброшена ошибка
  throw new Error(message)
}
let infinite = (message: string): never => {
  // будет бесконечно выполнятся
  while (true) {
    console.log(message)
  }
}

// type // создаем свои типы
type Login = string
const login: Login = 'admin'

type ID = string | number // может быть либо строкой, либо числом
const id1: ID = 13324
const id2: ID = '1244'

type SomeType = string | null | undefined
