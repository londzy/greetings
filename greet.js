var NameElement = document.querySelector('.Name');
  var greetBtnElement = document.querySelector('.greetBtn');
  var greetingElement = document.querySelector('.greeting');
  var greetingCounterElement = document.querySelector('.greetCounter');

  var greeting = "";
  var people = {};


   var clickTheGreetButton = function(){


          var checkedRadioBtn = document.querySelector("input[name='Language']:checked");
    if (checkedRadioBtn){
        var language = checkedRadioBtn.value;

    }
       var Name = NameElement.value;
       if(Name != ''){


      if(people[Name] === undefined){

      people[Name] = 0;
        }

  }
        if (language === 'English') {
          greeting = "Hello, " + Name;
        }
        if(language === 'Chinese'){
          greeting = "你好(Nǐ hǎo) " + Name;
        }
        if (language === 'Venda') {
          greeting = "Ndaa " + Name }
          console.log(people);





          greetingCounterElement.innerHTML = Object.entries(people).length ;

          greetingElement.innerHTML = greeting;
          NameElement.value = '';
          // greetingCounterElement.innerHTML = Object.keys(people).length - 1;






        }

  // function greet(name){
  //   if (name.length > 2){
  //       return "Hello " +  name;
  //   }
  // }

  greetBtnElement.addEventListener('click', clickTheGreetButton);




  //console.log(firstNameElement);
  //alert("yo!");
