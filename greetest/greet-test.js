describe("greet", function(){

it("should greet Londiwe in English",function(){
      var hello = Greeting()
      hello.greetingZ("Londiwe", 'English');
      assert.equal('',hello.greetingZ('English' , 'Londiwe'))

});


it("should greet Ayanda in Chinese",function(){
      var hello = Greeting()
      hello.greetingZ("Ayanda", 'Chinese');
      assert.equal('Ni hao Ayanda',hello.greetingZ('Chinese' , 'Ayanda'))

});


it("should greet Mthobisi in Venda",function(){
      var hello = Greeting()
      hello.greetingZ("Mthobisi", 'Venda');
      assert.equal('Ndaa Mthobisi', hello.greetingZ('Venda' , 'Mthobisi'))

});

});

describe("should return the number of people greeted", function() {

  it('should greet 3 people in different languges ', function() {
    var hello = Greeting();

    hello.greetingZ("Londiwe", 'English');
    hello.greetingZ("Ayanda", 'Chinese');
    hello.greetingZ("Mthobisi", 'Venda');

    assert.equal(3, hello.greetingZ());
  });

  it('should greet 6 people in different languges ', function() {
    var hello = Greeting();

    hello.greetingZ("Londiwe", 'English');
    hello.greetingZ("Ayanda", 'Chinese');
    hello.greetingZ("Mthobisi", 'Venda');
    hello.greetingZ("Sabelo", 'Venda');
    hello.greetingZ("Asanda", 'English');
    hello.greetingZ("Mfundo", 'Chinese');
    hello.greetingZ("Sihle", 'Venda');
    hello.greetingZ("Nhlakanipho", 'English');
    hello.greetingZ("Ngelosi", 'Chinese');
    hello.greetingZ("Nozipho", 'English');
    hello.greetingZ("Dumisani", 'Venda');

    assert.equal(11, hello.greetingZ());
  });

  it('should return 1 when same name is typed twice ', function() {
      var hello = Greeting();

      hello.greetingZ("Lehlohonolo", 'Chinese');
      hello.greetingZ("Lehlohonolo", 'Venda');


      assert.equal(1, hello.greetingZ());
    })
});
