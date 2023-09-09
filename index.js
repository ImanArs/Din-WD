const form = document.getElementById('form');
const inputName = form.querySelector('#name');
const inputPhone = form.querySelector('#phone');
const inputPartner = form.querySelector('#partner');

inputName.addEventListener('change', (e) => e.target.value)
inputPhone.addEventListener('change', (e) => e.target.value)


form.addEventListener('submit', (e) => {
  e.preventDefault()
  let obj = {
    name: `${inputName.value}`,
    phone: `${inputPhone.value}`,
  }
  console.log(obj);
  fetch('https://64662253228bd07b355c9c1c.mockapi.io/din', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(obj)
  })
  confirm('ваш ответ записан')
  setTimeout(() => {
    location.reload()
  }, 2000)
  inputName.value = ''
  inputPhone.value = ''
})
