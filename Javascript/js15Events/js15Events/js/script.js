
//const button = document.querySelectorAll('.button');



button.onclick = function(){
	console.log('Click!');		//При присвоении других значений они перезаписываются
}


//addEventList

button.addEventListener("click", function (e) {
	console.log("Click!");
});
button.addEventListener("click", function (e){
	console.log("Clack!");
});	//Добавляется два события



function showConsole(){
	console.log("Click");
	//button.removeEventListener("click", showConsole); //Удаление события
}
//button.addEventListener("click", showConsole);
//button.removeEventListener("click", showConsole)

const options = {
	"capture": false, //Фаза на которой должен сработать обработчик
	"once": true, //если true, тогда обработчик будет автоматически удален после выполнения
	"passive": false, //если true, то указывает, что обработчик никогда не вызовет preventDefault()
}
//button.addEventListener("click", showConsole, options);


function showConsole2(event){
	//Тип события
	console.log(event.type); 
	//Объект на котором сработал обработчик
	console.log(event.target); 
	//Объект на котором сработал обработчик
	console.log(event.currentTarget);
	//Положение курсора по оси X
	console.log(event.clientX);
	//Положение курсора по оси Y
	console.log(event.clientY);
	//Все детали события
	console.log(event);
}

//button.addEventListener("click", showConsole2);
//button.addEventListener("mouseenter", showConsole2); //Срабатывает при наведении


const block = document.querySelector('.block1');
const blockInner = document.querySelector('.block2');
const blockInnerInner = document.querySelector('.block3');

//Изначально произойдет всплытие

// Всыплытие это когда на элементе происходит событие
// обработчики сначала срабатывают на нем, потом на его родителе
// затем выше и так далее, вверх по цепочке предков

block.addEventListener("click", function(event){
	console.log('Click on block');
});

blockInner.addEventListener("click", function(event){
	console.log('Click on block of second level');
});

blockInnerInner.addEventListener("click", function(event){
	console.log('Click on block of third level');
	//Остановка всплытия
	//event.stopPropagation();
});

// В совремнной разработке стадия погружения используется редко
// обычно события обрабатываются во время всплытия


//Делегирование

// За то, что первое снизу, вас будут палками на проекте бить (тк обработчик на каждый кнопке
// то он сильно нагружает браузер и саму систему)


function showConsole3(){
	console.log("Hurray!");
}
button.forEach((buttonItem) => {
	buttonItem.addEventListener("click", showConsole3);
});


const wrapper = document.querySelector(".wrapper");

function showConsole3(){
	console.log("Hurray!");
}

wrapper.addEventListener("click", function(event){
	if(event.target.closest(".button")) {
		showConsole();
	}
});

const menuBody = document.querySelector(".menu");

document.addEventListener("click", menu);

function menu(event){
	if(event.target.closest(".menu__button")){
		menuBody.classList.toggle('_active');
	}
	if(!event.target.closest(".menu")) {
		menuBody.classList.remove("_active");
	}
}

//Отмена действий браузера и preventDefault()
const link = document.querySelector(".link");

link.addEventListener("click", function(event){
	console.log("Our actions");
	//Отмена действия браузера(д.с. переход по ссылке)
	event.preventDefault();
	
}, {"passive": true});

// параметр passive со значение true сигнализирует что
// обработчик не собирается выполнять preventDefault(отменять действие браузера)



//Либо

link.onclick = function () {
	console.log("Our action");
	//Отмена действия
	return false;
}


//Типы событий


// mousedown/ mouseup - Кнопка мыши нажата / отпущена над элементом

// mouseover / mouseout - Курсор мыши появляется над элементом и уходит с него

// mousemove - Каждое движение мыши над элементом герирует это событие.

// contextmenu - Вызов при открытии контекстного меню, как правило 
// нажатием правой кнопки мыши. Но не совсем событие мыши тк может 
// вызвываться и с помощью клавиатуры



//Комплексные события


// click - вызывается при mousedown, а затем mouseup над одним
// и тем же элементом, если использовалась основная кнопка мыши

// dbclick - вызывается двойным кликом на элемент

// Комплексные события состоят из простых

const button = document.querySelector('.button');
button.addEventListener("mousedown", function(event){
	console.log(`Нажата кнопка ${event.which}`);
});

button.addEventListener("click", function(event){
	console.log("Нажата основная кнопка мыши");
});

button.addEventListener("contextmenu", function(event){
	console.log("Вызвано конекстное меню");
});

//Основы событий мыши

const blockForMouse = document.querySelector(".block-for-mouse");

blockForMouse.addEventListener("mousemove", function(event){
	blockForMouse.innerHTML = `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});

blockForMouse.addEventListener("mouseout", function(event){
	blockForMouse.innerHTML = `<p class="mouseAction">Курсор ушел</p>`;
});



//События mouse(over/out), relatedTarget
blockForMouse.addEventListener("mouseover", function(event){
	//Для mouseover
	//event.target - элемент на который перешел курсор
	//event.relatedTarget - элемент с которого курсор ушел (target -> relatedTarget)
	console.log(event.target);
	console.log(event.relatedTarget);
});
blockForMouse.addEventListener("mouseout", function(event){
	//Для mouseout наоборот
	console.log(event.target);
	console.log(event.relatedTarget);
});



//События mouseenter и mouseleave
//При переходе на дочерние объекты они не считаются и не сплывают
blockForMouse.addEventListener("mouseenter", function(event){
	console.log(`Курсор над элементом`);
});
blockForMouse.addEventListener("mouseleave", function(event){
	console.log(`Курсор уходит с элемента`);
});


//События клавиатуры

//keydown и keyup. event.code и event.key

document.addEventListener("keydown", function(event){
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
});
document.addEventListener("keyup", function(event){
	console.log(`Отжата клавиша ${event.code} (${event.key})`);
});

//event.code удобен где нужны сочетания клавиш

document.addEventListener("keydown", function(event){
	if(event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)){
		console.log("Отмена действия");
	}
});


//event.repeat
document.addEventListener("keydown", function(event){
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
	console.log(event.repeat);
	//Вовзращает true если зажать клавишу(срабатывает автоповтор и это норм)
	});



//Счетчик символов в поле ввода!
const txtItem = document.querySelector(".textarea__item");
const txtItemLimit = txtItem.getAttribute("maxlength");
const txtCounter = document.querySelector(".textarea__counter span");
txtCounter.innerHTML = txtItemLimit;

function txtSetCounter(){
	const txtCounterRes = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterRes;
}
txtItem.addEventListener("keydown", function(event){
	if (event.repeat) txtSetCounter();
});
txtItem.addEventListener("keyup", txtSetCounter); 


//Скролл

window.addEventListener("scroll", function(event){
	
	// кол-во прокрученных пикселей по вертикали
	// scrollY или pageYOffset(Устарел)

	// Кол-во прокрученных пикселей по горизонтали
	// scrollX или pageXOffset(Устарел)
	
	console.log(`${Math.round(parseInt(scrollY))}px`); //Кол-во прокрученных пикселей
});
//Прокрутку нельзя отменить используя preventDefault (сработает после того как скролл произойдет)
//Лучше использовать css и параметр overflow
//IntersectionObserver более оптимизирован и реагирует при приодолении определенной линии

//События загрузки страницы


// DOMContentLoaded - браузер полностью загрузил HTML, было построено DOM дерево,
// но внешние ресурсы, такие как картинки <img> и стили, могут быть еще не загружены
// load - браузер загрузил HTML и внешние ресурсы (картинки, стили и тд)
// beforeunload/ unload - пользователь покидает страницу


// document.readyState - состояние загрузки

// Есть три возможных значения:
// "loading" - документ загружается

// "interactive" - документ был полностью прочитан

// "complete" - документ был полностью прочитан и
// все ресурсы(такие как изображения) были тоже загружены


//DOMContentLoaded срабатывает на объекте document (документ сайта)
//Событие load срабатывает на объекте window (окно браузера)

window.addEventListener("beforeunload", function beforeUnload(event){
	//Отмена события
	event.preventDefault();
	//Вернуть как мининум пустое значени иначе ничего не сработает
	event.returnValue = '';
});

//unload
window.addEventListener("unload", function (e){
	
	// Отправка статистики в фоновом режиме и тд
	// Браузер в фоновом режиме выполняет еще что-то
	
});


const menuHomework = document.querySelector(".menu-home");

function showForm(event){
	if(event.target.closest(".menu-home__button")){
		menuHomework.classList.toggle("_active");
	}
	if (!event.target.closest(".menu-home")){
		menuHomework.classList.remove("_active");
	}
}

document.addEventListener("click", showForm);

document.addEventListener("keydown", event => {
	const keyName = event.key;
})

document.addEventListener("keydown", event => {
	const keyName = event.key;
	if(keyName == "Escape"){
		menuHomework.classList.remove("_active");
	}
	console.log(keyName);
});