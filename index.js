
let arr = []
class CustomArray {

     constructor(...rest) {
          this.size = rest.length;

          for (let i = 0; i < rest.length; i++) {
               arr.push(rest[i])
          }

     }

     push(elments) {
          arr[this.size++] = elments
          console.log(arr);
     }
     pop() {
          if (arr.length == 0) {
               console.log("Stack is empty");
          }
          let delArray = arr[arr.length - 1]
          arr.length = arr.length - 1
          console.log(arr);
     }

     top() {
          console.log(arr.length - 1);
     }
     print() {
          console.log(arr);
     }

     printReverse() {
          let output = "["
          for (let i = arr.length - 1; i >= 0; i--) {

               if (i < arr.length - 1) {
                    output += ","
               }
               output += arr[i]
          }

          output += "]"
          console.log(output);
     }

     arrSize() {
          console.log(arr.length);
     }
}
let result = new CustomArray(1, 2, 3, 4, 5)
// console.log(arr);

result.push(55)
result.pop()
result.top()
result.print()
result.printReverse()
result.arrSize()