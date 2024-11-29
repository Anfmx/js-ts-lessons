//Callback hell

function fetchUserInfo(callback){
	setTimeout(() => {
		/// fetch
		const data = {id: 1, name: 'Alex'};
		callback(data);
	},1000);

}


function fetchUserGames(id, callback){
	setTimeout(() => {
		/// fetch(id)
		const data = ['game1', 'game2'];
		callback(data);
	},1000);
}

function run() {
	fetchUserInfo((userInfo) => {
		console.log(userInfo);
		fetchUserGames(userInfo.id, (userGames)=>{
			console.log(userGames);
		});
	});
}

run();



function fetchUserData(){
	return new Promise((resolve, reject) =>{
		setTimeout(() =>{
			///fetch
			const data = {id: 1, name: 'Alex'};

			resolve(data);
		}, 1000);
	});
}

function fetchUserGames(userData){
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			///fetch
			const data = ['game1', 'game2'];
			resolve(data);
		}, 1000);
	});
}

function run(){
	fetchUserData()
		.then((userData) => {
			return fetchUserGames(userData.id);
			})
		.then((userGames) => {
			console.log(userGames);
			});

}
run();



function fetchGames(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataFromServer = 'sdhfsdhsfhdf';
			const gamesFromServer = [
				{id: 1, name: 'Game1',},
				{id: 2,name: 'Game2',}
			];
			if(Array.isArray(dataFromServer)){
				resolve(gamesFromServer);
			}
			else{
				reject('Error!');
			}
		}, 2000)
	})
}

// function renderLoading(){
// 	const body = document.querySelector('.main__items');
// 	const loading = document.createElement('div');
// 	loading.id = 'loading';
// 	loading.textContent = 'Загрузка...';
// 	body.append(loading);
// }


// function renderGames(games){
// 	const body = document.querySelector('.main__items');

// 	const loading = document.querySelector('#loading');
// 	loading.remove();

// 	games.forEach((game) => {
// 		const gameElement = document.createElement('div');

// 		gameElement.innerHTML = `Game: <span>${game.name}</span>`;
// 		gameElement.className = 'game-element';

// 		body.append(gameElement);
// 	})
// }

// renderLoading();

fetchGames()
	.then((games) => {
		renderGames(games);
	})
	.catch((message) => {
		console.log(message);
	})
	.finally(() => {
		console.log('Ended')
	});




function fetchVideo(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = ['Video1','Video2'];
			console.log('Data 1 has been got');
			resolve(data);
		}, 2000);
	})
}

function fetchShorts(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = ['Shorts1','Shorts2'];
			console.log('Data 2 has been got');
			resolve(data);
		}, 2000);
	})
}

function main(){
	console.log('Loading...');
	Promise.all([fetchVideo(), fetchShorts()])
		.then((data) => {
			console.log(data);
		})
		.catch((data) => {

		})
}
main();


// Promiseall - Ждет пока выполнятся все промисы, но если хоть в одном будет
// ошибка, то попадет в секцию catch

// Promise.allSettled - Дожидает все промисы и попадет в секцию then
// независимо будет ли ошибка в любом промисе или нет

// Promise.any - Ждет первый, при этом успешный промис

// Promise.race - Ждет первый выполненный промис, однако
// если тот будет с ошибкой то перейдет в секцию catch, если успешно
// то в then


