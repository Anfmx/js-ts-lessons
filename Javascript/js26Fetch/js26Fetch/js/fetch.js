// const requestURL = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest(method, url, body = null){
//     const headers = {
//         'Content-Type': 'application/json'
//     }

// 	return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers,
//     }).then(response => {
//         if(response.ok){
//             return response.json()
//         }
//         return response.json().then(err => {
//             const e = new Error(err)
//             e.data = err
//             throw e;
//         })
//     })
// }

// // sendRequest('GET', requestURL)
// // 	.then(data => console.log(data))
// // 	.catch(err => console.error(err));

// const body = {
// 	name: 'Mike',
// 	age: 25
// }

// sendRequest('POST', requestURL, body)
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'DELETE',
    })

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'hi',
        body: 'test1',
        userId: 2,
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }
})

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        user1: {
            title: 'hi',
            body: 'test1',
            userId: 2,
        },
        user2: {
            title: 'hi',
            body: 'test1',
            userId: 1,
        }
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }
}).then((response) => response.json()).then((json) => console.log(json))