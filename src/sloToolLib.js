'use strict';
/**
* @description limit number
* @author Slogki
* @param { string } num
* @param { number } n
* @param { number } maxLength
* @return { string } num
*/
export function toFixedN(num, n = 2, maxLength = 9) {
  var _num = (num + '').slice(0, maxLength).replace(/[^\d.]/ig, ''); // 保证为字符串，以便调用相应方法
  _num.includes('.') && (
    _num = _num.split('.')[0] + '.' + _num.split('.')[1].slice(0, n));
  return _num;
}
/**
* @description handle if/switch with strategy design model
* @author Slogki
*/
export class CreateStrategy {
  constructor(strategyObj = {}) {
    this.strategyObj = strategyObj;
  }
  /**
  * @description estimate key is in obj
  * @param { string } key
  * @return { boolean } true/false
  */
  hasStrategy(key) {
    return !!this.strategyObj[key];
  }
  /**
  * @description get key from obj
  * @param { string } key
  * @return { any } default full obj
  */
  getStrategy(key) {
    return !!key ? this.strategyObj[key] : this.strategyObj;
  }
  /**
  * @description add key to obj
  * @param { string } key
  * @param { any } fn default function
  * @return { Object } 
  */
  addStrategy(key, fn = () => {}) {
    !!key && !this.strategyObj[key] && (this.strategyObj[key] = fn);
    return this;
  }
  /**
  * @description modify value in obj[key]
  * @param { string } key
  * @param { any } fn default function
  * @return { Object } 
  */
  modifyStrategy(key, fn = () => {}) {
    !!key && !!this.strategyObj[key] && (this.strategyObj[key] = fn);
    return this;
  }
  /**
  * @description remove value form obj
  * @param { string } key
  * @return { Object } 
  */
  removeStrategy(key) {
    !key && (this.strategyObj = {}); 
    !!key && !!this.strategyObj[key] && delete this.strategyObj[key];
    return this;
  }
  /**
  * @description execute strategy
  * @param { string } key
  * @return { any } 
  */
  toDo(key, ...param) {
    return !!key && !!this.strategyObj[key] && this.getStrategy(key)(...param); 
  }
}
/**
* @description get search to obj
* @author Slogki
* @param { string } search
* @return { object } { key: value }
*/
export class GetQueryStr {
  constructor(search = '') {
    typeof Object.fromEntries !== 'function' && (
      Object.fromEntries = (array = []) => array
        .map(item => ({ [item[0]]: item[1] }))
        .reduce((prev, el) =>({ ...prev, ...el }))
    );
    this.queryOjb = !!search
    ? Object.fromEntries(
      search
      .slice(1)
      .split('&')
      .map(el => el.split('='))
    )
    : {};
  }
  /**
  * @description 
  * @param { string } estimate key is in search
  * @return { boolean } 
  */
  has(key) {
    return this.queryOjb.hasOwnProperty(key);
  }
  /**
  * @description 
  * @param { string } get value from search
  * @return { any } string|object
  */
  get(key) {
    return !!key ? this.queryOjb[key] : this.queryOjb;
  }
}