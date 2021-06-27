---
slug: nullish-coalescing-operator
title: O que significa os dois pontos de interrogação (??) em Javascript?
author: Rogério Pereira
author_title: Desenvolvedor Front End
author_url: http://github.com/rogix
author_image_url: https://avatars.githubusercontent.com/u/12768403?s=460&u=a08f030aafafc606eb6bfcdfd7355c897867bfd5&v=4
tags: [docusaurus]
draft: true
hide_table_of_contents: true
---

Nullish coalescing operator

<!--truncate-->

## Nullish... o que?

Em códigos modernos de javascript é comum encontrarmos o operador `??` em expressões do tipo:

```javascript
exprEsquerda ?? exprDireita
```

Esse operador é chamado _Nullish Coalescing Operator_ que é um operador lógico que usamos quando queremos retornar `exprDireita` apenas quando `exprEsquerda` é do tipo `null` ou `undefined`, caso contrário javacript retorna `exprEsquerda`.

Em contraste com `??` javascript também disponibilza o `||` ( ou `OR` ) que é também um operador lógico, porém diferente do `??`, o `||` retorna `exprDireita` se `exprEsquerda` for qualquer valor do tipo _falsy_.

E o que são valores do tipo _falsy_?

Valores `falsy` são valores que são considerados `false` em um contexto _booleano_.

Em javascript os seguintes valores serão convertidos para `false`:

```javascript
// Esses valores serão convertidos para false
false
undefined
null
"" ou '' ou ``  // string vazia
NaN             // Not a Number
0
-0              // Zero negativo. O mesmo vale para - 0.0 etc
```

Exemplos de alguns valores que irão retornar `true`

```javascript
// Podemos testar com o objeto Boolean()
Boolean([]) // array vazio
Boolean({}) // objeto vazio
Boolean("0") // string contendo zero
Boolean("false") // string contendo false
Boolean(function () {}) // função vazia
Boolean(-Infinity) // Infinity ou Infinity negativo
Boolean(new Date()) // objeto Date

// Tenha em mente que se convertermos " ", string com espaço,
// o retorno será true
Boolean(" ") // retorna true
```

Dessa forma quando o `??` é usado `exprDireita` só será avaliada em dois casos: quando `exprEsquerda` for `null` ou `undefined`.

```javascript
// Exemplos:
const valor = undefined ?? "Olá!"
console.log(valor) // Olá!

const teste2 = null ?? "Olá!"
console.log(teste2) // Olá!

const teste3 = 0 ?? "Olá!"
console.log(teste3) // 0 -> nesse caso a exprEsquerda é 0 então ele vai retornar a exprEsquerda e exprDireita não será avaliada

const teste4 = "" ?? "Olá!"
console.log(teste4) // ""
```

Já quando o `||` é usado `exprDireita` é avaliada em qualquer valor _falsy_, não apenas `null` ou `undefined`.

```javascript
// Exemplos:
const teste1 = undefined || "Olá!"
console.log(teste1) // Olá!

const teste2 = null || "Olá!"
console.log(teste2) // Olá!

const teste3 = 0 || "Olá!"
console.log(teste3) // Olá!

const teste4 = "" || "Olá!"
console.log(teste4) // Olá!
```

Qualquer outro valor diferente dos citados acima vão retornar `true`:

```javascript
Boolean([]) // true
Boolean({}) // true
Boolean("0") // true
```
