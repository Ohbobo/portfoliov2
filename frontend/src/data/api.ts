// export const response = await fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json())
// .catch(err => err)
// console.log(response)

// export const res = await fetch('http://localhost:3000/about')
// .then(res => res.json())
// .catch(err => err)
// console.log(res)

export  const fetchAboutCards = async () => {
    try {
        const response = await fetch('http://localhost:3000/about');
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}