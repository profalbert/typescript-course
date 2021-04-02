interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age' // создаем отдельный тип, который будет состоять из ключей interface (Person)
let key: PersonKeys = 'name'
key = 'age'
// key = 'job' // будет ошибка, ибо о может принимать только те ключи, которые есть в interface

type User = {
  _id: number
  name: string
  email: string
  createAt: Date
}

// создаем новые типы, но не включающие какие-то парметры из начального типа
type UserKeysNoMetaExclude = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email' // убираем какие ключи
type UserKeysNoMetaPick = Pick<User, 'name' | 'email'> // 'name' | 'email' // а тут оставляем какие ключи

let u1: UserKeysNoMetaExclude = 'name'
u1 = 'email'
// u1 = 'Date' // ошибка
