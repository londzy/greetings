var NameElement = document.querySelector('.Name');
var greetBtnElement = document.querySelector('.greetBtn');
var greetingElement = document.querySelector('.greeting');
var greetingCounterElement = document.querySelector('.greetCounter');
var resetElement = document.querySelector('.reset');

var greeting = "";
var people = {};
if (localStorage.getItem("NamesGreeted")) {
  people = JSON.parse(localStorage.getItem("NamesGreeted"))

}

var myfactory =Greeting();

var clickTheGreetButton = function() {

  var checkedRadioBtn = document.querySelector("input[name='Language']:checked");
  if (checkedRadioBtn) {
    var language = checkedRadioBtn.value;

  }
  var Name = NameElement.value;
  var name =Name.toUpperCase();

  if (name != '') {


    if (people[name] === undefined) {

      people[name] = 0;
      localStorage.setItem('NamesGreeted',JSON.stringify(people));
    }


  }
  console.log(people);

  greetingCounterElement.innerHTML = Object.entries(people).length;


greetingElement.innerHTML = myfactory.greetZ(language, Name);
NameElement.value="";
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
