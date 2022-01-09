

//Todos os objetos em JavaScript (com algumas exceções) possuem um prototype. Além de que, um prototype de um objeto ser um próprio objeto.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;

//Devido ao fato de um prototype ser um objeto, um prototype pode ter seu próprio prototype! Neste caso, o prototype de Bird.prototype é um Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);

//Como isso é útil? Você pode ser lembrar que o método hasOwnProperty do desafio anterior:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

//O método hasOwnProperty é definido em Object.prototype, o qual pode ser acessado por Bird.prototype, o qual pode ser acessado por duck. Este é um exemplo de cadeia de prototype. Nesta cadeia de prototype, Bird é um supertipo para duck, enquanto duck é o subtipo. Object é um supertipo para ambos Bird e duck. Object é um supertipo para todos os objetos em JavaScript. Desta forma, qualquer objeto pode utilizar o método hasOwnProperty.



//Tem um princípio da programação chamado Don't Repeat Yourself (DRY) - Não se Repita. O motivo pelo qual código repetido é um problema se deve ao fato de qualquer alteração exige correção de código em vários locais. Geralmente isso significa mais trabalho para os programadores e mais espaço para erros.

//Note que, no exemplo abaixo, o método describe é compartilhado por Bird e Dog:

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//O método describe é repetido em dois locais. O código pode ser editado para seguir o princípio DRY (Não se Repita) ao criar um supertype (ou parente) chamado Animal:

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//Desde que Animal inclui o método describe, você pode remover ele de Bird e Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};



//No desafio anterior, você criou um supertype chamado Animal que define os comportamentos compartilhados por todos os animais:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

//Este e o próximo desafio vai abordar como reutilizar métodos de Animal dentro de Bird e Dog sem ter de definir os métodos novamente. Ele utiliza uma técnica chamada herança. Este desafio cobrirá o primeiro passo: fazer uma instância do supertype (ou parente). Você já sabe uma forma de criar instâncias de Animal utilizando o operador new:

let animal = new Animal();

//Há algumas desvantagens quando utilizamos essa sintaxe para herança, que são muito complexas para o escopo deste desafio. Em vez disso, aqui está uma abordagem alternativa sem essas desvantagens:

let animal = Object.create(Animal.prototype);

//Object.create(obj) cria um novo objeto, e define obj como o novo prototype do objeto. Lembre-se que o prototype é como uma "receita" para criar um objeto. Ao definir o prototype de animal para ser um prototype de Animal, você está efetivamente dando a instância animal a mesma "receita" de qualquer outra instância de Animal.

animal.eat();
animal instanceof Animal;

//O método instanceof aqui vai retornar true.



//No desafio anterior, você viu o primeiro passo para herdar comportamento do supertipo (ou parente) Animal: fazendo uma instância de Animal.

//Este desafio cobre o próximo passo: definir o prototype do subtipo (ou filho) - neste caso, Bird - para ser uma instância de Animal.

Bird.prototype = Object.create(Animal.prototype);

//Lembre-se de que o prototype é como uma receita para criar um objeto. De certa forma, a receita para Bird agora inclui todos os "ingredientes" chave para Animal.

let duck = new Bird("Donald");
duck.eat();

//duck herda todas as propriedades de Animal, incluindo o método eat.



//Quando um objeto herda seu protótipo de outro objeto, ele também herda a propriedade construtora do supertipo.

//Exemplo:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor

//Mas duck e todas as instâncias de Bird devem mostrar que eles foram construídos por Bird e não Animal. Para fazer isso, você pode manualmente definir a propriedade construtora de Bird para o objeto Bird:

Bird.prototype.constructor = Bird;
duck.constructor



//Uma função construtora, ou simplesmente construtor, que herda seu objeto de prototype de uma função construtora de supertipo, além dos métodos herdados, ainda poderá ter seus próprios métodos.

//Por exemplo, Bird é um construtor que herda seu prototype de Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

//Como adicional do que é herdado da classe Animal, você deseja adicionar o comportamento que é único de objetos Bird. Aqui, Bird definirá a função fly(). As funções são adicionadas ao Bird's prototype (protótipo do pássaro) da mesma forma que qualquer função construtora:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

//Agora as instâncias de Bird terão ambos os métodos, eat() e fly():

let duck = new Bird();
duck.eat();
duck.fly();

//duck.eat() exibe no console a string nom nom nom, e duck.fly() mostra a string I'm flying!.



//Uma função construtora, ou simplesmente construtor, que herda seu objeto de prototype de uma função construtora de supertipo, além dos métodos herdados, ainda poderá ter seus próprios métodos.

//Por exemplo, Bird é um construtor que herda seu prototype de Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

//Como adicional do que é herdado da classe Animal, você deseja adicionar o comportamento que é único de objetos Bird. Aqui, Bird definirá a função fly(). As funções são adicionadas ao Bird's prototype (protótipo do pássaro) da mesma forma que qualquer função construtora:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

//Agora as instâncias de Bird terão ambos os métodos, eat() e fly():

let duck = new Bird();
duck.eat();
duck.fly();

//duck.eat() exibe no console a string nom nom nom, e duck.fly() mostra a string I'm flying!.

//Sobrescrever métodos herdados

//Nas lições passadas, você aprendeu que um objeto pode herdar seus comportamentos (métodos) de outro objeto ao referenciar o prototype do objeto:

ChildObject.prototype = Object.create(ParentObject.prototype);

//Em seguida, o ChildObject recebeu seu próprio método ao encadear eles neste prototype:

ChildObject.prototype.methodName = function() { };

//É possível sobrescrever um método herdado. É feito da mesma maneira - ao adicionar o método a ChildObject.prototype utilizando o mesmo nome do método que aquele a ser sobrescrito. Aqui está um exemplo de Bird sobrescrevendo o método eat() herdado de Animal:

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};

/*Se você tem uma instância let duck = new Bird(); e você chamar duck.eat(), é assim que o JavaScript procura pelo método na cadeia de prototype de duck:

    duck => o método eat() está definido aqui? Não.
    Bird => o método eat() está definido aqui? => Sim. Execute isso e pare de procurar.
    Animal => eat() também é definido, mas o JavaScript parou de procurar antes de chegar a este level.
    Objeto => JavaScript parou de procurar antes de chegar a este nível. */

