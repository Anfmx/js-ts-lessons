//Размер окна браузера

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);
//Размер включая колесо прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);

//Ширина и высота документа (всего где и скролл)

let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
	);
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
	);
console.log(scrollWidth);
console.log(scrollHeight);

//Количество прокрученных пикселей
/*
const widnowsScrollTop = window.pageYOffset;
const widnowsScrollLeft = window.pageXOffset;
console.log(widnowsScrollTop);
console.log(widnowsScrollLeft);
*/

/*Прокрутка на относительную высоту скролла 
(высота равна 0, будет 50, 100, затем 150, 200...)*/
function setScrollBy (){
	window.scrollBy(0, 50); //(X, Y)
	const widnowsScrollTop = window.pageYOffset;
	console.log(widnowsScrollTop);
}



//Прокрутка на абсолютные координаты
function setScrollTo (){
	window.scrollTo(0, 50); 
	const widnowScrollTop = window.pageYOffset;
	console.log(widnowScrollTop);
} //Скролл остается на том же месте/значении

//Скролл с параметрами
function setScrollToOptions (){
	window.scrollTo({
		top:500,
		left:0,
		behavior: "smooth"
	});
}

/*Прокручивает страницу чтобы определенный
элемент оказался сверху если true. Снизу если false*/
function setScrollIntoView(top){
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView(top);
}
//
/*
setTimeout(() => {
	window.scrollTo(0, 100);
}, "1000");
*/
//Запись параметров

function setScrollIntoViewOptions(top){
	const lessonSelected = document.querySelector(".lesson__selected");			//КСТА ПОДДЕРЖКА САФАРИ ЭПЛОВСКОГО ГОВНО ЕБАНОЕ ИБО НИЧЕГО ТАМ НЕ РАБОТАЕТ (эппл говноеды)
	lessonSelected.scrollIntoView({
		block: 'center', //Вертикальная позиция. Указание прокрутки (напр Центр)
		inline: 'nearest', //Горизонтальная позиция
		behavior: 'smooth', //Способ прокрутки
	});
}

//Запрет прокрутки
function setEnableDisableScroll(){
	document.body.classList.toggle("scroll-lock");
}

//Метрики (возвращают размеры включающие параметры css свойств или не включающие)

//Получение объекта
const block = document.querySelector('.lesson__block');

//Получаем родительский элемент
//Относительно которого позиционирован наш объект
const elementOffsetParent = block.offsetParent;

//1.
//Первый родительский элемент относительно 
//которого применено позиционирование в CSS (position)

//2.
//Или теги td, th, table

//3.
//или body

console.log(elementOffsetParent);

//если offsetParent равно null;
/*
1. Для скрытых элементов (display: none)
2. Для body и html
3. Для элементов с position: fixed
*/

//Получение позиции объекта относительно его предка (в д. с. родитель с классом lesson)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;
console.log(elementOffsetLeft);
console.log(elementOffsetTop);

//Получение общего размера объекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;
console.log(elementOffsetWidth);
console.log(elementOffsetHeight);

//Отступы внутренней части элемента от внешней
const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;
console.log(elementClientTop);
console.log(elementClientLeft);

//Размер объекта без рамок и полос прокрутки
const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;
console.log(elementClientWidth);
console.log(elementClientHeight);

//Размер включающую в себя прокручеваемую часть которую не видно
const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;
console.log(elementScrollWidth);
console.log(elementScrollHeight);


block.scrollTop = 150;
//Размер прокрученной области
const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;
console.log(elementScrollLeft);
console.log(elementScrollTop);


//Получение координат относительно окна браузера
const item = document.querySelector('.lesson__item');
const getItemCoords = item.getBoundingClientRect();
console.log(getItemCoords);

//Получение Координат относительно документа
const getItemTopCoord = item.getBoundingClientRect().top;
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset; /*Координаты относительно границы
окна браузера + кол-во прокрученных пикселей*/
console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);

//Получение объекта по координатам относительно окна браузера
const elem = document.elementFromPoint(100, 100);
console.log(elem);

//
scrollSize = elementOffsetWidth - elementClientWidth - 15;
console.log(scrollSize);


blockHome = document.querySelector('.lesson__block');
blockHome.style.cssText =`
	padding: 15px;
`;
//scrollSize = elementOffsetWidth - elementClientWidth - parseInt(blockHome.style.padding);
console.log(elementOffsetWidth - elementClientWidth - parseInt(blockHome.style.padding));