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
return greeting;
}

 function greetingZ(){

  return greeting;
}

 function getCount() {
   return Object.keys(people).length;

 }

    return{
           greetingZ,
           greetZ,
           getCount
       }

}
