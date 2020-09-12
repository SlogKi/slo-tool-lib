# Slo-tool-lib
Tool function lib
# Installation
Using npm:
```
  $ npm i -D slo-tool-lib
  ...
  $ import { toFixedN, GetQueryStr, CreateStrategy } from 'slo-tool-lib';
```
# Syntax
```
  /**
  * @description limit user input
  * @param { string } input from user input
  * @param { number } n decimal digits [default:2]
  * @param { number } maxLength allow max input length [default:9]
  * @return { string } num
  */
  toFixedN(input, [n, maxLength])
  ...
```
```
  /**
  * @description get window.location.search to obj
  */
  let qs = new GetQueryStr(search)
  qs.has(key)
  qs.get([key])
```
```
  /**
  * @description handle if/switch with strategy design model
  *
  let strategy = new CreateStrategy()
  strategy.add(key, fn)
  strategy.modify(key, fn)
  strategy.remove([key])
  strategy.has(key)
  strategy.get([key])
  strategy.toDo(key[, param])
```
# Example
In index.vue
```
  <input type="text" v-model="val" v-change="handleChange(val)" />
```
In index.js
```
  import { toFixedN, GetQueryStr, CreateStrategy } from 'slo-tool-lib';
  ...
  data() {
    return {
      val: '123'
    }
  },
  beforeCreated() {
    let qs = new GetQueryStr('?a=1&b=2')
    console.log(qs.has('a')) // true
    console.log(qs.get()) // { a: 1, b: 2 }
    console.log(qs.get('b')) // 2

    let pages = new CreateStrategy()
    pages
    .add('home', () => { console.log('go home') })
    .add('user', param => { console.log('param') })
    .add('x')
    pages.toDo('home') // go home
  },
  methods: {
    handleChange(val) {
      this.val = toFixedN(val);
    }
  }
```
Note:  
Involving ES6+
# Keywords
javascript tool lib ES6