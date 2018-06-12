describe("greet in different languges", function(){

it("should greet Londiwe in English",function(){
      var hello = Greeting()
      hello.greetZ("Londiwe", 'English');
      assert.equal('Hello Londiwe',hello.greetZ('English' , 'Londiwe'))

});


it("should greet Ayanda in Chinese",function(){
      var hello = Greeting()
      hello.greetZ("Ayanda", 'Chinese');
      assert.equal('你好(Nǐ hǎo) Ayanda',hello.greetZ('Chinese' , 'Ayanda'))

});


it("should greet Mthobisi in Venda",function(){
      var hello = Greeting()
      hello.greetZ("Mthobisi", 'Venda');
      assert.equal('Ndaa Mthobisi', hello.greetZ('Venda' , 'Mthobisi'))

});

});

describe("should return the number of people greeted", function() {

  it('should greet 3 people in different languges ', function() {
    var hello = Greeting();

    hello.greetZ("Londiwe", 'English');
    hello.greetZ("Ayanda", 'Chinese');
    hello.greetZ("Mthobisi", 'Venda');

    assert.equal(3, hello.getCount());
  });

  it('should greet 11 people in different languges ', function() {
    var hello = Greeting();

    hello.greetZ('English', "Londiwe");
    hello.greetZ('Chinese', "Ayanda");
    hello.greetZ('Venda', "Mthobisi");
    hello.greetZ('Venda', "Sabelo");
    hello.greetZ('English', "Asanda");
    hello.greetZ('Chinese', "Mfundo");
    hello.greetZ( 'Venda', "Sihle");
    hello.greetZ('English', "Nhlakanipho");
    hello.greetZ('Chinese', "Ngelosi");
    hello.greetZ( 'English', "Nozipho");
    hello.greetZ('Venda', "Dumisani");

    assert.equal(11, hello.getCount());
  });

  it('should return 1 when same name is typed twice ', function() {
      var hello = Greeting();

      hello.greetZ('Chinese', "Lehlohonolo");
      hello.greetZ('Venda', "Lehlohonolo");


      assert.equal(1, hello.getCount());
    })
});
