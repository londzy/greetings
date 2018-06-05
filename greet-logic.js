function Greeting(){
  var people = {};
  var greeting = "";

var greetZ = function(language,Name){

  if(Name != ''){


 if(people[Name] === undefined){

 people[Name] = 0;
   }

}
   if (language === 'English') {
     greeting = "Hello " + Name;
   }
   if(language === 'Chinese'){
     greeting = "你好(Nǐ hǎo) " + Name;
   }
   if (language === 'Venda') {
     greeting = "Ndaa " + Name }

}

 function greetingZ(){

  return greeting;

}


    return{
           greetingZ,
           greetZ
       }

}
