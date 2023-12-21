const min = 0
const max = 1000000000000000

function getData(number) {
  if (!inRange(number)) {
    const numDigits = digits(number)
    const maxDigits = digits(max)

    return `Plese remove ${numDigits - maxDigits + 1} digits`
  }

  const divisorsArr = divisors(number)
  const primeFactorsArr = primeFactors(number)

  const data = {
    originalNum: number,
    oddOrEven: oddOrEven(number),
    negativeOrPositive: negativeOrPositive(number),
    divisors: divisorsArr,
    primeFactors: primeFactorsArr,
    prime: prime(divisorsArr),
    canonic: canonic(primeFactorsArr),
    universal: universal(divisorsArr, number),
    digits: digits(number),
  }
  return data
}

function inRange(number) {
  return number >= min && number <= max
}

function oddOrEven(num) {
  return num % 2 === 0 ? 'even' : 'odd'
}

function negativeOrPositive(num) {
  return num > 0 ? 'positive' : 'negative'
}

function divisors(num) {
  const divisors = []

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i)
      if (i !== num / i) divisors.push(num / i)
    }
  }

  return divisors.sort((a, b) => a - b)
}

function primeFactors(num) {
  const primeFactors = []
  let i = 2

  while (num > 1) {
    if (num % i === 0) {
      primeFactors.push(i)
      num /= i
      continue
    }
    i++
  }

  return primeFactors
}

function prime(arr) {
  return !(arr.length > 2)
}

function canonic(primeArr) {
  const res = {}
  const set = [...new Set(primeArr)]

  for (let i = 0; i < set.length; i++) {
    const amount = primeArr.filter((num) => num === set[i])

    res[set[i]] = amount.length
  }
  return res
}

function universal(arr, num) {
  const product = arr.slice(1, -1).reduce((acc, curr) => acc * curr, 1)
  return product === num
}

function digits(num) {
  return num.toString().length
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export {
  getData,
  oddOrEven,
  divisors,
  primeFactors,
  prime,
  canonic,
  universal,
  randomNum,
}
