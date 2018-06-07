var NameElement = document.querySelector('.Name');
var greetBtnElement = document.querySelector('.greetBtn');
var greetingElement = document.querySelector('.greeting');
var greetingCounterElement = document.querySelector('.greetCounter');
var resetElement = document.querySelector('.reset');

var greeting = "";
var people = {};

var clickTheGreetButton = function() {

  var checkedRadioBtn = document.querySelector("input[name='Language']:checked");
  if (checkedRadioBtn) {
    var language = checkedRadioBtn.value;

  }
  var Name = (NameElement.value).toUpperCase();
  if (Name != '') {


    if (people[Name] === undefined) {

      people[Name] = 0;
    }

  }
  if (language === 'English') {
    greeting = "Hello " + Name;
  }
  if (language === 'Chinese') {
    greeting = "你好(Nǐ hǎo) " + Name;
  }
  if (language === 'Venda') {
    greeting = "Ndaa " + Name
  }
  console.log(people);

  greetingCounterElement.innerHTML = Object.entries(people).length;

  greetingElement.innerHTML = greeting;
  NameElement.value = '';
}

greetBtnElement.addEventListener('click', clickTheGreetButton);

var reset = function() {
  localStorage.removeItem('people');
  localStorage.clear();
  location.reload()
}

resetElement.addEventListener('click', reset);

//console.log(firstNameElement);
//alert("yo!");
