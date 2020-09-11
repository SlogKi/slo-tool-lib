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