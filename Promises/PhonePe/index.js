
let form = document.querySelector('#form')

let userName = document.getElementById('name')
let userPass = document.getElementById('pass')

let displayImg = document.querySelector('.showImg')

let imgCreate = document.createElement('img')
let x = Math.random() * 10
let timer = Math.trunc(x)


form.addEventListener('submit', (elm) => {

     form.innerHTML = null
     elm.preventDefault()



     console.log(typeof (userName.value, userPass.value));
     console.log(userName.value == "rushikesh");

     let promisFirst = new Promise((resolve, reject) => {
          imgCreate.src = "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
          form.append(imgCreate)

          setTimeout(() => {

               if (userName.value == "rushikesh" && userPass.value == "1234") {

                    resolve("Done");
                    form.innerHTML = null
                    imgCreate.src = "https://www.dealnloot.com/wp-content/uploads/2016/09/phonepe-transaction-successful-Rs-25-credited-to-bank-account.png"

                    form.append(imgCreate)
               }

               else {
                    reject("falis")
                    form.innerHTML = null
                    imgCreate.src = "https://www.bhimappdownload.in/wp-content/uploads/2017/04/pnb-upi-error.jpg"

                    form.append(imgCreate)

               }

          }, timer * 1000)







     }).then((result) => {

          console.log(result);
     }).catch((error) => {
          console.log(error);
     })

})