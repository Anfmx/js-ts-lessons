//Свойство и методы форм

//Коллекция форм на странице
console.log(document.forms);

//Получить концертную форму на странице
const mainForm = document.forms[0]; //ключ тк это коллекция
console.log(mainForm);

//Аттрибут name (прописать в html)
const mainForm1 = document.forms.main;
console.log(mainForm1);

//Коллекция
console.log(document.querySelectorAll('form'));

console.log(document.forms);//Живая коллекция

document.body.insertAdjacentHTML(
	"beforeend",
	`<form name='some' class="some-form" action="#"></form>`,
); //querySelector не видит элементы добавленные через js


//Элементы форм
const mainForm3 = document.forms.main; //Выбираем форму
console.log(mainForm3.elements); //Список всех элементов внутри формы

//Получаем элемент с именем nameInput (конкретный элемент)
const mainFormInput = mainForm3.nameInput;
console.log(mainFormInput);

//Получение коллекции с именем nameRadio
const mainFormRadioButtons = mainForm.nameRadio;
console.log(mainFormRadioButtons); //или console.log(mainForm.elements.nameRadio)

console.log(mainFormInput.form) //Получаем родителя (форму элемента)


//Работа с input и textarea

const mainForms = document.forms.main;
const mainFormInput2 = mainForm3.nameInput;
const mainFormTextarea = mainForm.nameTextarea;

console.log(mainFormInput2.value); //Получение значения (содержимое) поля
console.log(mainFormTextarea.value); //Получение значения (содержимое) текстового поля
/*
//Присвоение значения поля/текстового поля
//mainFormInput2.value = "Пока";
mainFormTextarea.value = "До встречи!";
console.log(mainFormInput2.value);
console.log(mainFormTextarea.value);
*/

const mainFormCheckBox = mainForm.nameCheck; //Чекбокс
const mainFormFile = mainForm.nameFile; //Отправка файла

//Получить значение поля type radio
//Если value не заполнен то вернет "on"
console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked); //Кнопка выбрана (true)
console.log(mainFormRadioButtons[1].checked); //Кнопка не выбрана (false)
//Какая кнопка будет выбрана изначально определяется аттрибутом checked в html

//Получить значение поля type checkbox
console.log(mainFormCheckBox.value); //on тк value пустой
console.log(mainFormCheckBox.checked); //false тк checkbox не выбран

//Получить значение поля type file
console.log(mainFormFile.value); //пусто тк ничего не выбрано

//Присваивание значения из js
mainFormRadioButtons[0].value = "left";
mainFormRadioButtons[1].value = "left";
mainFormRadioButtons[1].checked = true; //теперь выбирается вторая кнопка


mainFormCheckBox.value = "save"; //Присваиваем свое значение value
mainFormCheckBox.checked = true; //Теперь на checkbox изначально стоит галочка

//Назначение поля type file
mainFormFile.value = ""; //Не можем задать значение поля только очистить(передать пустую строку)


//Работа с select и option
/*
select.options - коллекция из подэлементов <option>
select.value - значение выбранного в данный момент <option>
select.selectedIndex - номер выбранного <option>
*/

const mainFormSelect = mainForm3.nameSelect;

//Получить все options
console.log(mainFormSelect.options);

//Получение индекса выбранного option
const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex); //нулевой индекс т.е первый элемент

//Получение значение выбранного option
const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue); //указано в html

//Получение текста выбранного option
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText); //текст option (20)

//Способы влияния на значение select из js
//mainFormSelect.options[1].selected = true; //30 (2 пункт)
//mainFormSelect.selectedIndex = 1; //опять 2-ой пункт
//mainFormSelect.value = 2; //значение какого option нужен

//Добавление новой опции
//new Option (text, value, defaultSelected, selected)
/*let newOption = new Option("100", "4", true, true);
mainFormSelect.append(newOption);*/

/*
При наличии аттрибута multiple мы можем выбрать несколько опций
и в html изначально выбрать несколько опций которые будут выбраны
*/

//Мультивыбор
//Получение всех выбранных значений из select с multiple
let selectedOptions = Array.from(mainFormSelect.options)
.filter(option => option.selected)
.map(option => option.value);
console.log(selectedOptions); //Получение массива всех выбранных option

//Фокусировка focus и blur

const mainFormInputPlaceholder = mainFormInput.placeholder;
/*
mainFormInput.addEventListener("focus", function(e){
	mainFormInput.placeholder = "";
}); //Форма получает фокус и надпись пропадает
mainFormInput.addEventListener("blur", function(e){
	mainFormInput.placeholder = mainFormInputPlaceholder;
}); //Форма теряет фокус(клик по другим элементам и тд) и надпись снова появляется
*/


//Методы elem.focus() и elem.blur()
//Устанавливают или снимают фокус

mainFormInput.focus(); //изначально фокусируется

setTimeout(() => {
	mainFormInput.blur();
}, 3000); //Теряет фокус спустя 3000мс(3сек)


//Фокусировка на любом элементе с помощью tabindex
const lesson = document.querySelector('.lesson');

/*
tabindex="-1" фокусируется на элементе только програмно
Клавиша Tab проигнорирует такой элемент
но методы будут работать напр elem.focus()
*/
//Реагируем на событие в фокусе
lesson.addEventListener("focus", function(e){
	lesson.classList.add("_focus");
	console.log('Див lesson в фокусе!');
});
//Реагируем на событие потери фокуса
lesson.addEventListener("blur", function(e){
	lesson.classList.remove("_focus");
});

/*
Текущий элемент с фокусом можно получить 
из document.activeElement
*/

//focusin и focusout

const mainFormAdd = document.forms.main;

//Хотим установить фокус на форме при работе с элементами
mainFormAdd.addEventListener("focusin", function(e){
	mainFormAdd.classList.add("_active");
});

//{"capture":true}


//Событие change
//Срабатывает при окончании изменении элемента
mainFormInput.addEventListener("change", function(e){
	console.log("Сработаело change");
});
mainFormSelect.addEventListener("change", function(e){
	console.log("Сработаело change");
});
mainFormFile.addEventListener("change", function(e){
	console.log("Сработаело change");
});


//Событие input
//Срабатывает каждый раз при изменении значения
/*
В отличии от событий клавиатуры оно работает
при любых изменениях значений, даже если они
не связаны с клавиатурными действиями:
Вставка с помощью мыши или распознование речи при диктовке текста
*/
mainFormInput.addEventListener("input", function(e){
	console.log(`value: ${mainFormInput.value}`);
})

//Пример 

const txtItem = document.querySelector(".main-form__textarea");
const txtItemLimit = txtItem.getAttribute("maxlength");
const txtCounter = document.querySelector(".main-form__textarea__counter > span");
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("input", txtSetCounter);

function txtSetCounter(){
	const txtCounterRes = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterRes;
}

//События cut, copy, paste
//Эти события происходят при вырезании/копировании/вставке данных

mainFormInput.addEventListener("copy", function(e){
	console.log(`Копируем`);
});
mainFormInput.addEventListener("paste", function(e){
	console.log(`Вставляем`);
});
mainFormInput.addEventListener("cut", function(e){
	console.log(`Вырезаем`);
});

mainFormInput.addEventListener("paste", function(e){
	console.log("Нельзя вставить");
	e.preventDefault();
});

//Отправка формы - событие и метод submit
//Используется для проверки заполнения всех полей при попытке отправки
/*
mainForm.addEventListener("submit", function(e){
	console.log("Форма отправляется")
	if(!mainFormInput.value){
		console.log("Поля не заполнены");
		e.preventDefault();
	}
});
*/
/*Чтобы отправить формун на сервер вручную
можно использовать метод form.submit()
*/
/*
mainFormInput.addEventListener("blur", function(e){
	mainForm.submit();
})
*/

//Практический пример
function emailTest(input){
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

mainForm.addEventListener("submit", function(e){
	if(emailTest(mainFormInput)){
		mainFormInput.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="main-form__error">
				Введите email
			</div>`);
		e.preventDefault();
	}
});

mainFormInput.addEventListener("focus", function(e){
	if (mainFormInput.nextElementSibling){
		mainFormInput.nextElementSibling.remove();
	}
})


//Практический пример 2
//Выведение картинки после выбора
mainFormFile.addEventListener("change", function(e){
	let selectedFile = mainFormFile.files[0];
	//Получаем URL изображения
	let fileUrl = URL.createObjectURL(selectedFile);
	mainFormFile.parentElement.insertAdjacentHTML(
		"beforeend",
		`<div class="main-form__image">
			<img alt="#" title="${selectedFile.name}" src="${fileUrl}">
		</div>`,
		);
})