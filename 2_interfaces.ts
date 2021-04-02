// интерфейсы
interface Rect {
  // interface - они ни во что не компилируются, а нужны только на этапе разработки
  readonly id: string // нельзя будет изменить, доступен только для чтения
  color?: string // из-за ? этот параметр становится необязательным
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30,
  },
}

const rect2: Rect = {
  id: '12345',
  size: {
    width: 10,
    height: 5,
  },
}
rect2.color = 'red'
// rect2.id = 'red' // вызовет ошибку, ибо доступен только для чтения

const rect3 = {} as Rect // пустой объект, но уже с заданым типом
const rect4 = <Rect>{} // старая запись

//===============
// Наследование интерфейсов
interface RectWithArea extends Rect {
  getArea: () => number // что должен вернуть - number
  // или: getArea(): number
}
const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 10,
    height: 5,
  },
  getArea(): number {
    // должен вернуть число
    return this.size.width * this.size.height // возвращаем для примера число
  },
}

//==============
interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  // используем implements для того, чтобы перенести методы интерфейса в класс
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

//=============
interface Styles {
  [key: string]: string // тип для ключа и тип для значения
  // используем его для удобства, чтобы не писать каждый ключ и его тип
}

const css: Styles = {
  border: '1px solid red',
  marginTop: '2px',
  borderRadius: '50px',
}
