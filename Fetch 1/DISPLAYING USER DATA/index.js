
let container = document.getElementById('container')

let userContainer = document.createElement('div')
userContainer.className = "user-container"

let flag=false

function Click() {

     if(flag==false){
          fetch('https://reqres.in/api/users').then((res) => {
     
               res.json().then((final) => {
     
                    final.data.forEach(current => {
     
                         let userData = document.createElement('div')
                         userData.className = "user-data"
     
                         let userImg = document.createElement('img')
                         userImg.src = current.avatar
     
     
                         let userName = document.createElement('p')
                         userName.innerText = current.first_name
     
     
                         let userLastName = document.createElement('p')
                         userLastName.innerText = current.last_name
     
                         let userEmail = document.createElement('p')
                         userEmail.innerText = current.email
     
     
                         userData.append(userImg, userName, userLastName, userEmail)
                         userContainer.append(userData)
                         container.append(userContainer)
     
                    })
               })
          })
          flag=true
     }


}
