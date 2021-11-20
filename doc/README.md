# Hannankakut
### Procedurally generated online baked-goods shop.
****
## Table of contents
1. Why.
2. How it works.
****
## Why?
This project is a part of Business College Helsinki's assignments for the program:

[Vocational Education in Information and Communication Technologies.](https://en.bc.fi/)

Whe could have gone easier, but *" if you're going to do something; do it well. "*
****
## How it works.

*It's quite simple.*

[JS-DOMs](https://www.w3schools.com/js/js_htmldom.asp)
are used for rendering the baked-goods.

Each DOM has **three** children
`img` `h1` `p`


`img` being the picture of the cake. *(more on it later)*

`h1` being the name of the cake.

`p` being the price of the cake.

```html
<div hidden>
    <img/>
    <h1/>
    <p/>
</div>
```
****
#### Name generation.

The name of the pastry is auto-generated based on a set amount of adjectives and one type.


*For a full list of names; please refer to [name.js](https://github.com/SamimiesGames/hannankakut/blob/master/js/cake-gen/name.js).*

A random name **consist of**:

`adjectives(s)` and a `type`

The forename amount is randomized between two variables `CAKE_ADJ_COUNT_MIN` and `CAKE_ADJ_COUNT_MAX`.
These are set by default to be 1 and 2.

Only one type is chosen.

In the end the result should look something this: **Voi Croisantti**, **Toffee Keksi**.
****
### Price generation.

The price is just a random number between `CAKE_PRICE_MIN` and `CAKE_PRICE_MAX`.

*`NOTE!`
The price is formatted with an *€* sign at `Cake.construtor`.*
****
### Image generation.

Easily said: the image is requested from [unsplash](https://unsplash.com/).

But, in fact it's more trivial than that.

Your browser caches requests. That means that repeating a request like this won't work:
`https://source.unsplash.com/1280x720/?cake`

**Identifying the problems.**
1. Caching.

    The request will always be cached.

    Meaning the same image will appear.
2. The image is not contextual.

    An image of a cake will appear, either tho the title is a pretzel.


**Solutions.**

**1. Caching workaround.**

Changing the resolution of the image every iteration will change the URL and will avoid caching.

*For example:*

Start `1280x720`<br>
Next iteration `1281x721`


**2. Adding Context.**

Each `pastry-type` has a `contextual_search_query`(CSQ).<br>
E.g. when a type is chosen, say "`Kakku`" will have "`Cake`" as its CSQ.


**Final result.**

`https://source.unsplash.com/{1280 + iter}x{720 + iter}/?{CSQ}`
****
****
Visit the site at: <a href="https://samimiesgames.github.io/hannankakut/">https://samimiesgames.github.io/hannankakut/

[Copyright &copy; SamimiesGames 2021](https://github.com/SamimiesGames/hannankakut/blob/master/LICENSE.txt)
