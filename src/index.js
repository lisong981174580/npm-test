// 此处调试测试文件
import {
  get,
  isEmpty,
  parseQuery,
  getQueryString,
  queryToObject,
  getTypeof,
  isString,
  isBoolean,
  isObject,
  isArray,
  isFunction,
  isDate,
  isJSON,
  isHTMLElement,
  hasClass,
  addClass,
  getDataByAttribute,
  bindEvent,
  deepClone,
  createCache,
  debounce,
  throttle,
  safeJSONParse,
  includes,
  fetchEnv,
  isIos,
  isChrome,
  isEqual,
  flat,
  unique,
} from 'any-utils';

const data = [{
  id: 101,
  email: 'jack@dev.com',
  personalInfo: {
    name: 'Jack',
    address: {
      line1: 'westwish st',
      line2: 'washmasher',
      city: [],
      state: 'WX'
    }
  }
}];

console.log('get', get(data, [0, 'personalInfo', 'address', 'line2']));
console.log('get', get(data, [0, 'personalInfo', 'address', 'line2', 'wx']));
console.log('get', get(data, [0, 'personalInfo', 'address', 'line2', 'wx'], '我是默认值'));

console.log('isEmpty', isEmpty([]));
console.log('isEmpty', isEmpty({}));
console.log('isEmpty', isEmpty({ a:1 }));
console.log('isEmpty', isEmpty([1]));
console.log('isEmpty', isEmpty(1));

console.log('parseQuery', parseQuery('key1=18127873881&key2=2'));
console.log('parseQuery', parseQuery(''));
console.log('getQueryString', getQueryString('ie'));
console.log('queryToObject', queryToObject());

console.log('getTypeof', getTypeof([1, 2]));
console.log('isArray', isArray([1, 2]));
console.log('isArray', isArray({}));

console.log('getTypeof', getTypeof('我是字符串'));
console.log('getTypeof', isString('我是字符串'));
console.log('getTypeof', isString(false));

console.log('getTypeof', getTypeof({a: 2}));
console.log('isObject', isObject({a: 2}));
console.log('isObject', isObject(false));

console.log('getTypeof', getTypeof(null));
console.log('getTypeof', getTypeof(false));
console.log('isBoolean', isBoolean(false));
console.log('isBoolean', isBoolean({a: 2}));

console.log('getTypeof', getTypeof(1));
console.log('getTypeof', getTypeof(() => {}));
console.log('isFunction', isFunction(() => {}));
console.log('isFunction', isFunction(false));

const date = new Date();
console.log('getTypeof', getTypeof(date));
console.log('isDate', isDate(date));
console.log('isDate', isDate('123'));

console.log('isJSON', isJSON(date));
console.log('isJSON', isJSON('123'));
console.log('isJSON', isJSON('{}'));
console.log('isJSON', isJSON('[1, 2, 3]'));
console.log('isJSON', isJSON('{"a":1,"b":2}'));
console.log('isJSON', isJSON(1));

const dom = document.getElementById('demo');
console.log('isHTMLElement', isHTMLElement(dom));
console.log('hasClass', hasClass(dom, 'demo'));
console.log('addClass', addClass(dom, 'newClass'));
console.log('hasClass', hasClass(dom, 'newClass'));
console.log('getDataByAttribute', getDataByAttribute(dom, 'index'));

let custom_bg = document.getElementById('custom-bg');
bindEvent(custom_bg, 'click', function(event) {
  console.log('我是普通绑定')
})

// 代理绑定
bindEvent(dom, 'click', '.selector', function(event) {
  console.log('我只是绑定了 dom 下面 class 名称为 selector 的元素')
})

const source = {
  age: 20,
  name: 'allen',
  address: {
    city: 'shanxi',
  },
  arr: [1, 'a', ['c', 2, {a: 2}]],
};

const deepCloneObj = deepClone(source);
deepCloneObj.address.city = '南京';

const input = source.address.city;
const expectation = 'shanxi';

console.log(input === expectation);

// 创建一个缓存容器
const c = createCache();

// 设置缓存数据
c.set('name', 'allen');

// 获取缓存数据
console.log("c.get('name')", c.get('name'));

const inputdom = document.getElementsByClassName('input')[0];

function handle(...values) {
  console.log('-- do something --', this.value);
}

// bindEvent(inputdom, 'input', debounce(handle, 1000))
bindEvent(inputdom, 'input', throttle(handle, 1000))

// 解析 JSON 格式字符串
const objStr = '{"a":1,"b":2}';
console.log('safeJSONParse', safeJSONParse(objStr));

// 解析数组字符串
const arrStr = '[1, 2, "Jack"]';
console.log('safeJSONParse', safeJSONParse(arrStr));

// 解析非 JSON 数据格式字符串
const str = 'abc';

// 解析失败默认返回 {}
console.log('safeJSONParse', safeJSONParse(str));

// 也可以自定义返回值
console.log('safeJSONParse', safeJSONParse(str, '我是默认值'));

console.log('includes', includes([1, 2, 3], 1));
console.log('includes', includes(['2', '1', '3'], '1'));
console.log('includes', includes('我是字符串', '字符串'));
console.log('includes', includes('我是字符串', '其他'));

console.log('fetchEnv', fetchEnv('https://www.imooc.dev.com/'));
console.log('fetchEnv', fetchEnv('https://www.imooc.test.com/'));
console.log('fetchEnv', fetchEnv('https://www.imooc.prod.com/'));
console.log('fetchEnv', fetchEnv());

console.log('isIos', isIos());
console.log('isChrome', isChrome());

console.log('isEqual', isEqual({ a: 1, b: {a: 1}}, {a: 1, b: {a: 1}}));
console.log('isEqual', isEqual({ a: 1}, {a: 1, b: {a: 1}}));

console.log('unique', unique([1, 2, 3, 3, 3, 3]));
console.log('flat', flat([1, 2, 3, [1, 2, [1, 2]]]));

import loadimg from 'promise-loadimg';

loadimg('https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg').then(img => {
  console.log(img) // <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg">
}).catch(error => {
  // 图片加载失败
})
