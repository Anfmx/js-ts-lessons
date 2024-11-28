/*
function loadData(){
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			const success = Math.random() < 0.7;
			if(success){
				resolve("Upload error!");
			} 
			else{
				reject("Data has been uploaded");
			}
		}, 2000);
	});
}

loadData()
	.then((resultSuc) => (console.log(resultSuc)))
	.catch((resultDec) => (console.log(resultDec)));
*/




function fetchData(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataUploadSuc = Math.random() < 0.1;
			if(dataUploadSuc){
				resolve("Uploading data");
			} else {
				reject(new Error("Uploading error!"));
			}
		}, 3000);
	})
}

function processData(data){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`Data processed successfully`);
		}, 2000);
	});
}


fetchData()
	.then((data) => {
		console.log(data);
		return processData(data);
	})
	.then((processedData) => {
		console.log(processedData);
	})
	.catch((error) => {
		console.error(error);
	});

