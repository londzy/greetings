var firstname = document.querySelector('.firstname')
var language = document.querySelector('.language')
var LanguageBtn = document.querySelector('.LanguageBtn')
var resetBtn = document.querySelector('.resetBtn')
var display = document.querySelector('.display')
var count = document.querySelector('.count')


var greetingLang = factory() ;


var greetFunc =function(){

    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
  if (checkedRadioBtn){
      var us = checkedRadioBtn.value

      count.innerHTML= greetingLang.funcCounter()
}
  }

  LanguageBtn.addEventListener('click', greetFunc)
