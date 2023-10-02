export const response = await fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.catch(err => err)
console.log(response)