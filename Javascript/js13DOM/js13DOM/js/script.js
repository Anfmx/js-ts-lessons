//BOM
/*
if(navigator.userAgent.includes("Chrome")){
	console.log("Браузер Хром");
}*/

//alert("Hello"); //Диалоговое окно


//const confirmRes = confirm("Bruh..");
//console.log(confirmRes); Диалоговое окно с двумя кнопками

//const promptRes = prompt("What is the answer?");
//console.log(promptRes); //Диалоговое окно с двумя кнопками и строкой ввода

//DOM
///Получение объектов для работы в js
const bodyElement = document.body;
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

//console.log(bodyElement);
/*console.log(firstChildNode);
console.log(lastChildNode);*/ // Получение первого и последнего объекта html

const childNodes = bodyElement.childNodes; //коллекция childNodes
console.log(childNodes); //выводит коллекцию всех детей, включая текстовые узлы
//console.log(bodyElement.hasChildNodes()); //Проверка дочерних узлов

//Перебор коллекции
/*
for(let node of childNodes){
	console.log(node);
}*/

//Соседние и родительские УЗЛЫ!
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode; //Объект html

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);

//Получение дочерних ЭЛЕМЕНТОВ!
/*
const bodyChildren = bodyElement.children;
console.log(bodyChildren);*/

//Соседние и родительские ЭЛЕМЕНТЫ!
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement; 

//Поиск по селектору класса
const elemsOne = document.querySelectorAll('.lesson__list');
console.log(elemsOne);

//Поиск по селектору тега
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);

//Поиск по смешанному селектору тега и класса
const elemsThree = document.querySelectorAll('li.lesson__item-list');
console.log(elemsThree);

//Поиск по тегу первого уровня вложенности
const elemsFour = document.querySelectorAll('.lesson__list>li');
console.log(elemsFour);

//Поиск по классам
const elemsFive = document.querySelectorAll('.lesson__list, .lesson__text');
console.log(elemsFive);

//Поиск по вложенным классам
const elemsSix = document.querySelectorAll('.lesson__list .lesson__text');
console.log(elemsSix);

//Поиск по ID
const elemsSeven = document.querySelectorAll('#listItem');
console.log(elemsSeven);

//Поиск по атрибуту
const elemsEight = document.querySelectorAll('[data-item]');
console.log(elemsEight);

//Поиск по атрибуту со значением
const elemsNine = document.querySelectorAll('[data-item="85"]');
console.log(elemsNine);

//Получение конкретного элемента коллекции
const elems = document.querySelectorAll('li')
console.log(elems[2]);

/*
for(const item of elems){
	console.log(item);
} Также можно использовать for...each */

//Искать можно не только в document
const subList = document.querySelectorAll('.lesson__sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);

//Возвращает первый попавшийся элемент
const lessonList = document.querySelector('.lesson__list');
console.log(lessonList);

//Поиск по ID
const elem = document.getElementById('listItem'); //не нужна решетка вначале
console.log(elem);

//Поиск по имени тега и возвращает живую коллекцию
const elemsZero = document.getElementsByTagName('li');
console.log(elemsZero);

//Поиск по имени класса и возвращает живую коллекцию
const elemsTen = document.getElementsByClassName('lesson__item-list'); //точку писать не надо
console.log(elemsTen);

//Возвращает элементы с заданным атрибутом name (вопрос зачем?)
const elemsEleven = document.getElementsByName('list'); 
console.log(elemsEleven);

//Статическая коллеция
const listStatic = document.querySelectorAll('.lesson__item-list');
const listLive = document.getElementsByClassName('lesson__item-list')

console.log(listStatic); //Содержит информацию на момент вызова
console.log(listLive); //Содержит всегда актульную информацию

//Создаем новый объект
const lessonListTwo = document.querySelector('.lesson__list');
lessonListTwo.insertAdjacentHTML(
	"beforeend",
	'<li class="lesson__item-list">Новый пункт</li>'
	);

//closest
const elemTwelve = document.querySelector('.lesson__item-sub-list');
const parentList = elemTwelve.closest('.lesson__list');
console.log(parentList); //ищет предка поднимаясь вверх по иерархии

//matches(проверка)
const element = document.querySelectorAll(".lesson__item-list");
for (let elem of element) {
	if (elem.matches('[class$="lesson__item-list_red"]')){
		console.log("Красный");
	} else if (elem.matches('[class$=lesson__item-list_blue]')){
		console.log("Синий");
	}
}

//Получаем элемент, дописываем и изменяем содержимое
const textElems = document.querySelector(".lesson__text");
/*
const textElemContent = textElems.innerHTML;
console.log(textElemContent); //получение элемента как есть
//textElems.innerHTML = "Hello"; //заменяем слово(на самом деле дописываем)
textElems.innerHTML = `<p>${textElemContent}</p> <p>There <span class="yellow">you</span> are</p>`;
console.log(textElems.innerHTML);

const textElemContentTwo = textElems.outerHTML;
console.log(textElemContentTwo); //изменяем вид страницы 
textElems.outerHTML = `<p>LMAOO BRUH</p>`;
console.log(textElems.outerHTML); //вид страницы изменен но в консоли будет старая запись

const textElemContentThree = textElems.textContent;
console.log(textElemContentThree); //текст элемента без html тегов
textElems.textContent = `<p>Work <span class"yellow">smart</span> not hard<p>`
console.log(textElems.textContent); //вставка строки как обычного текста(даже с тегами html)
*/

/*
//Содержимое текстового узла/комментария
const getH1 = document.querySelector(".yellow");
const getComm = getH1.nextSibling;
console.log(getComm); //вывод комм (вид из html)
console.log(getComm.data); //получаем сам текст
getComm.data = "Hello there"; //изменяем комментарий
console.log(getComm.data);

//Создание элемента (createElement)
const newElement = document.createElement('div');
//Наполняем новый элемент
newElement.innerHTML = `Work smart and hard!`
console.log(newElement);

//Создание текстового узла
const newText = document.createTextNode("Hello");
console.log(newText);
*/
//Создаем и наполняем элемент
const textElement = document.querySelector(".lesson__text");
const newElement = document.createElement('div');
newElement.innerHTML = `Work smart and hard`; //передает саму строку в т.ч и теги html
//вставляем элемент...

//textElement.before(newElement); // перед объектом
//textElement.after(newElement); //после
//textElement.prepend(newElement); //внуть и в начало объекта
//textElement.append(newElement); //внутрь и в конец объекта

//Методы вставки

textElement.insertAdjacentHTML(
	'afterend', //куда вставлять
	`<p>Work <span class="yellow">hard</span> and smart!`
	);
//beforebegin - перед textElement
//afterbegin - в начало textElement
//beforeend - в конец textElement
//afterend - после textElement

//insertAdjacentText вставляет текст даже с html тегами
//insertAdjacentElement вставляет элемент html

//Перенос объекта (на самом деле удаление старого и создание нового на другом заданном месте)
const lessonBlock = document.querySelector('.lesson');
/*const title = document.querySelector('h2');
lessonBlock.append(title);*/

//Клонирование узлов
const textElementTwo = document.querySelector('.lesson__text');
const cloneTextElement = textElementTwo.cloneNode(true); //true Глубокое клонирование с содержимым
lessonBlock.append(cloneTextElement);

//Удаление узлов
cloneTextElement.remove();

//Управление классами
const elementFour = document.querySelector('.lesson__item-list_red');
//Получение имен классов
const elementClassName = elementFour.className;
console.log(elementClassName);
//Перезаписываем имя класса
//elementFour.className = "red";

elementFour.classList.add('active'); //Добавляем новый класс не перезаписывая старые
//elementFour.classList.remove('active'); //Удаление класса
//elementFour.classList.toggle('active'); //Добавит класс если нет, а если есть удалит
//elementFour.classList.contains('active'); //Проверка существует ли класс у данного элемента

for (let className of elementFour.classList){
	console.log(className);
}

//Задаем стиль
elementFour.style.color = "red";
elementFour.style.marginBottom = "30px";
elementFour.style.marginBottom = ""; //Сброс свойства
//Получение значения свойства
console.log(elementFour.style.color);

//Полная перезапись стилей css

elementFour.style.cssText = `
	margin-bottom: 30px;
	color:green;
`;

//Получение вычесленного стиля (которого нет в теге style в html, но есть в файле css)
const elementStyle = getComputedStyle(elementFour);
console.log(elementStyle.fontSize);
//Получение свойств псевдоэлемента
const elementBeforeStyle = getComputedStyle(elementFour, "::before");
console.log(elementBeforeStyle.color);


//Каждый DOM узел принадлежит соотвествующему встроенному классу
const link = document.querySelector("h2 > a")
console.log(link.href); //адресс ссылки
console.dir(link);

//Произвольные атрибуты
const lessonText = document.querySelector('.lesson__text');

lessonText.hasAttribute('name'); //Проверка
lessonText.getAttribute('name'); //Получение
lessonText.setAttribute('name', 'value'); //Установление значения
lessonText.removeAttribute('name'); //Удаление

//data атрибуты
const atrb = document.querySelector(".maintag");
console.log(atrb);
console.log(atrb.tagName); //Ввыводит тег объекта
atrb.hidden = true;
console.log(atrb.hidden);

