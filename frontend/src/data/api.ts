// export const response = await fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json())
// .catch(err => err)
// console.log(response)

export const res = await fetch('http://localhost:3000/about')
.then(res => res.json())
.catch(err => err)
console.log(res)