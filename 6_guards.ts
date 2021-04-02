// guards - это некоторые вспомогательные конструкции, которые нам позволяют работать также с типами
function strip(x: string | number) {
  // возвращаем число или строку взависимости от условия
  if (typeof x === 'number') return x.toFixed(2)
  return x.trim()
}

class MyResponse {
  header = 'response header'
  result = 'response result'
}
class MyError {
  header = 'error header'
  message = 'error message'
}

const handle = (res: MyResponse | MyError) => {
  if (res instanceof MyResponse) {
    // сравнивает принадлежность объекта к классу
    return { info: res.header + res.result }
  } else {
    return { info: res.header + res.message }
  }
}

//============
type AlertType = 'success' | 'danger' | 'warning'
const serAlertType = (type: AlertType) => {}

serAlertType('danger')
serAlertType('success')
serAlertType('warning') // использовать можно только те типы, которые есть в функции
