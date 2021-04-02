// Классы
class Typescript {
  version: string // поля в классе

  constructor(version: string) {
    this.version = version
  }

  info(name: string): string {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

class Car {
  version: string // поля в классе
  model: string
  readonly numberOfWheels: number = 4 // тип - number, и по умолчанию равен 4

  constructor(theModel: string) {
    this.model = theModel // он доступен только для чтения, но его все равно можно переписать, но только в constructor
  }
}

class Car2 {
  // более локанично и более коротко
  version: string
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {} // typescript все
  // сделает за нас, из-за readonly он создаст в классе поле,
  // то есть становится в js this.model = model
  // но без readonly работать не будет
}

//=================
class Animal {
  // 3 фида модификаторов: protected, public, private
  protected voice: string = '' // доступен для данного класса, и для всех дочерних классов (наследуемые от него)
  public color: string = '' // если не указывать модификатор, то по умолчанию он = public

  constructor() {
    this.go()
  }

  private go() {
    console.log('go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
// cat.voice // так нельзя, ведь это свойство protected и оно доступно только для классов и их методов

// Своими словами:
// protected - доступно для всех классов, где он есть, но запрещен снаружи
// private - доступен только в том классе, где написан
// public - доступен везде

//==============
// Абстрактные классы
abstract class Component {
  // это классы, от которых можно наследоваться, но они ни во что не компилируются
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }
  info(): string {
    return 'This is info'
  }
}

// // второй вариант: на interface, но не доступен метод instanceof
// interface Component1 {
//   render(): void
//   info(): string
// }

// class AppComponent1 implements Component1 {
//   render(): void {
//     console.log('Component on render')
//   }
//   info(): string {
//     return 'This is info'
//   }
// }
