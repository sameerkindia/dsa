// function findMissingLetter(arr) {
//   if (arr.length === 0) return 1;

//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const startIndexOf = alphabet.indexOf(arr[0]);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== alphabet[startIndexOf + i]) {
//       console.log(alphabet[startIndexOf + i]);
//     }
//   }
// }

function findMissingLetter(arr){

  let start = arr[0].charCodeAt(0);

  for(let i = 0 ; i < arr.length ; i++){
    const current = arr[i].charCodeAt(0);

    if(current - start > 1){
      console.log(String.fromCharCode(start + 1))
      return;
    }

    start = current
  }

  console.log(1)

}


findMissingLetter(["a", "b", "c", "d", "f"]);
