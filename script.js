let username = prompt('kullanıcı adınızı giriniz:')
let myName = document.querySelector('#myName')
myName.innerHTML = username

function date() {
  let d = new Date()
  let hour = d.getHours()
  let minute = d.getMinutes()
  let second = d.getSeconds()
  const days = [
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar',
  ]
  let day = days[d.getDay() - 1]
  
  let myClock = document.querySelector('#myClock')
  myClock.innerHTML = `
  ${!(hour<10) ? hour : "0"+hour}:
  ${!(minute<10) ? minute : "0"+minute}:
  ${!(second<10) ? second: "0"+second} 
  ${day}`
}

setInterval(date, 1000)
