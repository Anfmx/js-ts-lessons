
const delay = function(ms){
	console.log('fetching...');
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms)
	});
}

/*
delay(4000).then((result) =>{
	console.log(result);
})
*/

const url = 'https://jsonplaceholder.typicode.com/todos';

/*
function fetchTodos(){
	return delay(2000).then(() => fetch(url))
	.then(response => response.json());
}
fetchTodos()
	.then(data => console.log('data:', data))
	.catch(e => console.error(e));
*/
/*
async function fetchAsyncTodos(){
	try {
		await delay(2000);
		const response = await fetch(url);
		const data = await response.json();
		console.log('data:', data);
	} catch(e){
		console.error(e);
	} finally {
		console.log("Executed");
	}
	
}

fetchAsyncTodos().then()
*/

const url1 = 'https://jsonplaceholder.typicode.com/todos';
const url2 = 'https://jsonplaceholder.typicode.com/todos';

async function fetchTodos() {
	try{
		await delay(1500);
		const [responseUrl1, responseUrl2] = await Promise.all([
			fetch(url1), fetch(url2)
		]);
		if(!responseUrl1.ok && !responseUrl2.ok){
			throw new Error('Error!!!');
		}
		const [data1, data2] = await Promise.all([
			responseUrl1.json(),
			responseUrl2.json(),
		  ]);
		  
		  console.log('Res:', data1, data2);
	} catch(e){
		console.error(e);
	}
}

fetchTodos();