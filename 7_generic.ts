const arrayOfNumbersAndStrings: (number | string)[] = [1, 1, 2, 3, 5, '345']
const arrayOfStrings: string[] = ['svdfv', '1', '2', '3']

let reverse = <T>(array: T[]): T[] => {
  //generic тип будет динамически подстраиваться под тот тип, который придет
  return array.reverse()
} // 1T - с чем работает функция (перечисление),
// 2T - какие аргументы приходят,
// и 3T - что возвращает функция
reverse(arrayOfNumbersAndStrings)
reverse(arrayOfStrings)
