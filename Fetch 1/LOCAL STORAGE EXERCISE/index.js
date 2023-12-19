let form = document.getElementById('form');
let name = document.getElementById('name');
let age = document.getElementById('age');

let display = document.querySelector(".display")
let table = document.querySelector('.table')
let tbody = document.querySelector('.tbody')
let tr = document.querySelector('.tr')




let inp_name = document.querySelector('.inp-name')
let inp_age = document.querySelector('.inp-age')




form.addEventListener('submit', (elm) => {
     inp_name.innerText = ""
     inp_age.innerText = ""

     localStorage.clear();
     localStorage.clear();

     elm.preventDefault();


     let nameStore = localStorage.setItem('name', name.value);
     let ageStore = localStorage.setItem('age', age.value);

     // console.log(nameStore, ageStore);

     let displayName = document.createElement('tr')
     displayName.innerText = localStorage.getItem('name')


     let displayAge = document.createElement('tr')
     displayAge.innerText = localStorage.getItem('age')


     let myName = document.createElement('tr')
     myName.innerText = displayName.innerText

     let myAge = document.createElement('tr')
     myAge.innerText = displayAge.innerText


     let showName = myName.innerText
     let showAge = myAge.innerText

     console.log(showName);

     // Append in webpages


     inp_name.append(showName)
     inp_age.append(showAge)

     tr.append(inp_name, inp_age)
     tbody.append(tr)

     table.append(tbody)

     display.append(table)


});


