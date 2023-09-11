const form = document.getElementById('form');
const inputName = form.querySelector('#name');
const inputPhone = form.querySelector('#phone');
const inputPartner = form.querySelector('#partner');
const formBtn = form.querySelector('#btn');

inputName.addEventListener('change', (e) => e.target.value)
inputPhone.addEventListener('change', (e) => e.target.value)

console.log(localStorage.getItem('user'));
if (localStorage.getItem("user") === "true") {
  formBtn.setAttribute("disabled", "disabled"); 
  console.log(true);
  formBtn.innerText = "уже в списке"
  formBtn.classList.add("disabled-btn");
} else {
  console.log("none");
}
form.addEventListener('submit', (e) => {
  e.preventDefault()
  let obj = {
    name: `${inputName.value}`,
    phone: `${inputPhone.value}`,
  }
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


  localStorage.setItem("user", true)

})

