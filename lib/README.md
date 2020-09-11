# Slo-tool-lib
Tool function lib
# Syntax
```
  toFixedN(num, [n, maxLength])
  ...
```
### Parameters
  num: string input value  
  n: number [default:2] decimal digits  
  maxLength: number [default:9] allow max input liength  
# Installation
Using npm:
```
  $ npm i -D slo-tool-lib
```
# Example
In index.vue
```
  <input type="text" v-model="val" v-change="handleChange(val)" />
```
In index.js
```
  import { toFixedN } from 'slo-tool-lib';
  ...
  methods: {
    handleChange(val) {
      this.val = toFixedN(val);
    }
  }
```
# Keywords
javascript tool lib