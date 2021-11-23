---
title: "Arrays em JavaScript"
date: 2019-09-07T08:28:44.559Z
thumbnail: /static/img/puppy-and-adult-dog.jpg
---

![codigo](/assets/img/code01.jpg)

### _Algo extremamente importante quando se inicia o aprendizado com a linguagem javascript é conhecer bem todos os métodos e propriedades de um array, Isso fez uma grande diferença para mim e por esse motivo estou compartilhando. Dedique um tempo e faça exemplos de todos os métodos citados. Vai valer apena!_

## Conceito:

Array é um objeto destinado a armazenar uma coleção ordenada de dados indexados sequencialmente apartir do zero.

exemplo:

```javascript
//metodo construtor de um array
const arr = [1, 2, "a", "b", { x: 14, y: 16 }];
//atualizando valores
```

## Propriedades de um array:

### length

A propriedade length retorna a quantidade de elementos de um array.

> _Lembre-se que **prototype** tambémm e uma propriedade e se destina em criar novas propriedades e/ou metodos._
> exemplo:

```javascript
const arr = [1, 2, 3];
arr.length; // retorna: 3
```

## Métodos de um Array

Os métodos mais utilizados, senão todos, são:

- **concat**( _arg1, ...,arg[n]_ ) // Array
- **every**( _função( elem , ind , obj ) [,this]_ ) // Boolean
- **filter**( _função( elem , ind , obj ) [,this]_ ) // Array
- **forEach**( _função( elem , ind , obj ) [,this]_ ) // Array
- **indexOf**( elem [ ,start ]) // Number
- **lastIndexOf**( elem [ ,start ]) // Number
- **join**("separador") // String
- **map**(função( elem , ind , obj ) [,this] ) // retorno: Array
- **pop**() // any
- **push**( _arg1, ...,arg[n]_ ) // Number
- **reduce**(function(v1,v2,ind, arr [,vI])) // Retorno Array
- **reduceRigth**(function(v1,v2,ind, arr [,vI])) // Retorno Array
- **reverse**() // Retorno Array
- **shift**() // Retorno Any
- **unshift**(args) // Retorno Number
- **slice**(arg1 [,arg2]) // Retorno Array
- **splice**( arg1 [, arg2 , arg3 , ... , arg[n] ]) // Retorno Array
- **some**( função( elem , ind , obj ) [,this] ) // Retorno Bolean
- **sort**([function]) // Retorno Array
- **toString**() // Retorno String

### concat()

> _`concat(arg1, ...,arg[n]) //retorno: []`_

#### Argumentos do método:

- args = elemento a ser adicionado, pelo menos um argumento não obrigatório

Adiciona um novos elementos a um array.

exemplo:

```javascript
const arr = [1, 2, 3];
arr.concat(4, 5, 6); // retorna: [1,2,3,4,5,6]
```

### every()

> _`every( funcion(elem,ind, obj)[,this] ) // retorno: boolean`_

#### Argumentos do método:

- elem = elemento do array
- ind = indice do array
- obj = objeto do array
- [this] = um objeto a ser utilizado como this, mas quando omitido não utilizado o objeto global

Percorre todos os elementos de um array e executa uma função callback. Retorna TRUE quando encontra o elemento que satisfaz a condição.

exemplo:

```javascript
var arr = [1, 2, 3, "a"];
arr.every((elem) => typeof elem == "number"); // returna: false
/** Obs:
 * Retorna false porquê existe um string e nen todos são números.
 * Nessa função ele percorre todos os elementos verificando se é number.
 * Utilizei de arrow function da nova sintaxe do EcmaScript para exemplificar.
 * */
```

### filter()

> _`filter(função( elem , ind , obj ) [,this] ) // retorno: Array`_

#### Argumentos do método:

- elem = elemento do array
- ind = indice do array
- obj = objeto do array
- [this] = um objeto a ser utilizado como this, mas quando omitido não utilizado o objeto global

Filtra elemetos de um array, não altera o array original e retorna um novo array com elementos filtrados

Exemplo:

```js
var arr = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e"];
arr.filter((elem, ind, obj) => {
  return elem > 3 && ind < 9;
});
// retorno: [4,5]
```

### ForEach()

> _`forEach(função( elem , ind , obj ) [,this] ) // retorno: Array`_

#### Argumentos do método:

- elem = elemento do array (obrigatório)
- ind = indice do array (opcional)
- obj = objeto do array (opcional)
- [this] = um objeto a ser utilizado como this, mas quando omitido não utilizado o objeto global

Percorre cada elemento e executa uma função callback, não altera o array original e retorna um novo array

Exemplo:

```js
var arr = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e"];
var msg = "";
arr.forEach((elem, ind, obj) => {
  msg += `arr [${ind}] = ${elem} \n`;
});
console.log(msg);
/** retorna
     * 
        arr [0] = 1 
        arr [1] = a 
        arr [2] = 2 
        arr [3] = b 
        arr [4] = 3 
        arr [5] = c 
        arr [6] = 4 
        arr [7] = d 
        arr [8] = 5 
        arr [9] = e 
    */
```

## indexOf()

> _` indexOf(elemento ,[start] // retorn: number`_

#### Argumentos do método:

- elem = elemento do array que deseja buscar (obrigatório)
- start = a busca deve partir de qual indice (opcional)

Busca e retorna o indice do primeiro elemento encontrado que seja igual ao primeiro argumento (que nesse caso é o elem) do mesmo tipo de dado, a partir da indice declarado no segundo argumento (caso o segundo argumento start, nesse caso, seja decladado). Se o elemento não existir, o retorno será -1.

Exemplo:

```js
var arr = [1, "a", 2, "b", 3, "c", 4, "d", 1];
console.log(arr.indexOf(1, 2));
// retorna 8
// iguinorou a o primeito elemento porque a busca começou a partir de 2 (terceiro elemento)
```

## lastIndexOf()

> _` lastIndexOf(elemento ,[start] // retorn: number`_

#### Argumentos do método:

- elem = elemento do array que deseja buscar (obrigatório)
- start = a busca deve partir de qual indice (opcional)

Busca e retorna o indice do ultimo elemento encontrado que seja igual ao primeiro argumento (que nesse caso é o elem) do mesmo tipo de dado, a partir da indice declarado no segundo argumento (caso o segundo argumento start, nesse caso, seja decladado). Se o elemento não existir, o retorno será -1.

Exemplo:

```js
var arr = [1, "a", 2, "b", 3, "c", 4, "d", 1];
console.log(arr.lastIndexOf(1));
// retorna 8
```

## join()

> _` join("separador")// retorn: number`_

#### Argumentos do método:

- separador = elemento separador

Esse método transforma elementos de um array em uma string colocando um separador entre os elementos. o argumento é opcional, e quando não utilizado ele utiliza a virgula como separador.

Exemplo 1 :

```js
var arr = [1, 2, 3, 4, 5];
console.log(arr.join());
// retorna "1,2,3,4,5"
```

Exemplo 2 :

```js
var arr = [1, 2, 3, 4, 5];
console.log(arr.join("-"));
// retorna "1-2-3-4-5"
```

## map()

> _`map(função( elem , ind , obj ) [,this] ) // retorno: Array`_

#### Argumentos do método:

- elem = elemento do array (obrigatório)
- ind = indice do array (opcional)
- obj = objeto do array (opcional)
- [this] = um objeto a ser utilizado como this, mas quando omitido não utilizado o objeto global

Percorre todos os elemento e executa uma função callback, não altera o array original e retorna um novo array. Este é um método muito utilizado.

Exemplo:

```javascript
var arr = [ 1,2,3];
arr.map( (elem)=>{
    return elem *2
}
console.log()
// returna: [2,4,6]
```

## pop()

Remove o último elemento de um array
Exemplo:

```js
var arr = [1, 2, 3];
arr.pop();
// retorna 3
// retorna o elemento removido
```

## push()

> _`push(arg1, ...,arg[n]) // number`_
> Acrecento elementos no final do array, retorna a quantidade nova
> exemplo:

```js
var arr = [1, 2, 3];
arr.push();
// retorna 3
// retorna o elemento removido
```

## reduce()

> _`reduce(function(v1,v2,ind, arr [,vI]))`_

#### Argumentos do método:

- v1 = valor acumulador (obrigatório)
- v2 = valor corrente (obrigatório)
- ind = indice de cada elemento (obrigatório)
- arr = objeto array sendo percorrido (obrigatório)
- [vI] = um objeto a ser utilizado como this, mas quando omitido não utilizado o objeto global
  Esse método executa uma função redutora e atribui ele a um acumulador que é lembrado em cada interação com a matriz, resultando numa valor único
  Exemplo 1:

```js
var arr = [2, 4, 8];
var somaElements = arr.reduce((v1, v2, ind, arr) => {
  return v1 + v2;
});
console.log(somaElements);
// retorna 14
```

Nesse exemplo foi possivel ver que houve duas interações e o valor retornado foi 14.
Exemplo 2 :

```js
var arr = [2, 4, 8];
var somaElements = arr.reduce((v1, v2, ind, arr) => {
  return v1 + v2;
});
console.log(somaElements, 1000);
// retorna 1014, pois foi definido um valor inicial de 1000
```

## reduceRigth()

> _`reduceRigth(function(v1,v2,ind [,vI]))`_

#### Argumentos do método:

- v1 = valor anterior (obrigatório)
- v2 = valor corrente (obrigatório)
- ind = indice de cada elemento (obrigatório)
- arr = objeto array sendo percorrido (obrigatório)
- [vI] = um objeto a ser utilizado como this, mas quando omitido não utilizado o objeto global
  Tem o mesmo conceito de reduce(), no entanto percorre do último para o primeiro
  Exemplo:

```js
console.log([2, 3, 4].reduceRight((v1, v2, ind, arr) => v1 - v2));
// retorna  -5
```

## reverse()

> _`reverse() // retorna: Array`_
> Altera o array original revertendo sua ordem
> Exemplo:

```js
var arr = [1, 2, 3];
arr.reverse();
// retorna [3,2,1]
```

## shift()

> _`shift() // retorna: any`_
> Remove o primeiro elemento de um array e retorna o elemento removido
> Exemplo:

```js
var arr = [1, 2, 3];
arr.shift();
// retorna 1
```

## unshift()

> _`unshift(args) // retorna: number`_

#### Argumentos do método:

- args = novos elemento para adicionar no array (obrigatório)
  Adiciona um elemento no começo do array e retorna a nova quantidade
  Exemplo:

```js
var arr = [1, 2, 3];
arr.unshift("a", "b", 0);
// retorna 6
```

## slice()

> _`slice(arg1 [,arg2]) // retorna: Array`_

#### Argumentos do método:

- arg1 = indice inicial (obrigatório)
- arg2 = indice final (opcional)
  Esse método extrai elementos de um array entre o primeiro e o último argumento. Argumentos negativos revertem a ordem da contagem.
  Exemplo:

```js
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.slice(2));
// retorna [3,4,5,6,7]
console.log(arr.slice(2, 4));
// retorna [3,4]
console.log(arr.slice(-4, 5));
// retorna [4,5]
console.log(arr.slice(-5, -2));
// retorna [3,4,5]
```

## splice()

> _`splice( arg1 [, arg2 , arg3 , ... , arg[n] ]) // retorna: Array`_

#### Argumentos do método:

- arg1 = posição até aonde os elementos serão protegidos (obrigatório)
- arg2 = quantidade removida (opcional)
- arg3 ..arg[n] = elementos inseridos (opcional)
  Esse método insere e remove elementos de um array
  Exemplo 1:

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.splice(4));
// retorna [1,2,3,4] os quatro primeiros foram protegidos
```

Exemplo 2:

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.splice(4, 2));
// retorna [1,2,3,4,7,8,9] os elementos 5 e 6 foram removidos
```

Exemplo 3:

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.splice(4, 2, "a", "b"));
// retorna [1,2,3,4,"a","b",7,8,9] os elementos 5 e 6 foram removidos e "a" e "b" foram adidionados
```

## some()

> _` some(função( elem , ind , obj ) [,this] )// retorna: boleano`_

#### Argumentos do método:

- elem = elemento do array (obrigatório)
- ind = indice do array (opcional)
- obj = objeto do array (opcional)
- [this] = um objeto a ser utilizado como this, mas quando omitido não utilizado o objeto global
  Esse metódo verifica se a condição imposta na função callback satisfaz
  Exemplo:

```js
var arr = [1, 2, 3, "a"];
console.log((elem, ind, obj) => typeof elem == "string");
// retorna true pois existe um elemento string no array
```

## sort()

> _` sort([function])// retorna: Array`_

#### Argumentos do método:

- function = função que q compara elementos conforme o operador utilizado. (opcional)

Ordena os elementos de um array conforme a regra de seu argumento.
Exemplo:

```js
var arr = [5, 6, 4, 3];
arr.sort();
// retorna [3,4,5,6]
```

## toString()

> _` toString() // retorna: String`_
> Converte o array em uma lista de elementos string separados por vírgula
> Exemplo:

```js
var arr = [1, 2, 3];
console.log(arr.toString());
// retorna "1,2,3"
```

## Bibliografia

- Livro Guia do Programador - Maurício Samy Silva - Novatec
- Site: [https://devdocs.io/javascript/]
- Site: [https://www.w3schools.com/jsref/jsref_obj_array.asp]
