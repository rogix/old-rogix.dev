---
slug: nullish-coalescing-operator
title: O que significa dois pontos de interrogação (??) em Javascript?
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

_Nullish coalescing operator_ é um operador lógico que usamos quando queremos retornar apenas valores que não são do tipo `null` ou `undefined`.

Mas retornar de onde? O que você quer por _retornar_? E por que eu preciso retornar alguma coisa?

Em javascript temos o operador lógico `||` ou `OR` que pode ser utilizado quando precisamos escolher qual valor retornar. Então por exemplo:

```javascript
var vaiChoverHoje = true; // sim
```

```javascript
expressãoEsquerda ?? expressãoDireita;
```

:::tip Se liga!
Traduzindo para o bom português coalescing significa coalescendo(juntar, unir, aglutinar).
:::

Não ficou claro? Tranquilo, vamos nos aprofundar um pouco mais na ideia.

Talvez você já utilizado o operador lógico `OR` ou `||`.
