import * as Number from './number.js'

const input = document.querySelector('input')
const btn = document.querySelector('.genetrate_btn')

btn.onclick = () => {
  const number = +input.value
  const data = Number.getData(number)

  console.log(data)
}
