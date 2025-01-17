import { getType } from './get'

/**
 * 检查是否 url
 * @param {*} value
 * @returns
 */
export const isUrl = (value) => new RegExp('^((https|http|ftp|rtsp|mms)?:\\/\\/)[^\\s]+', 'g').test(value)

/**
 * 检查是否 Object
 * @param {*} value
 * @returns
 */
export const isObject = (value) => getType(value) === 'object'

/**
 * 检查是否 Function
 * @param {*} value
 * @returns
 */
export const isFunction = (value) => ['function', 'asyncfunction'].includes(getType(value))

/**
 * 检查是否 AsyncFunction
 * @param {*} value
 * @returns
 */
export const isAsyncFunction = (value) => getType(value) === 'asyncfunction'

/**
 * 检查是否是空内容
 * @param {*} value
 * @returns
 */
export const isEmpty = (value) => value === '' || value === null || value === undefined

/**
 * 检查是否是空对象
 * @param {*} val
 * @param {*} type
 * @returns {*}
 */
export function is(val, type) {
  return toString.call(val) === `[object ${type}]`
}

/**
 * 检查是否是字符串
 * @param value
 * @returns {boolean}
 */
export const isString = (value) => getType(value) === 'string' || value === undefined

/**
 * 检查是否数字
 * @param value
 * @returns {boolean}
 */
export const isNumber = (value) => getType(value) === 'number'

/**
 * 检查是否数组
 * @param value
 * @returns {boolean}
 */
export const isArray = (value) => getType(value) === 'array'

/**
 * 检查是否是window对象
 * @param {*} val
 * @returns {*}  {val is Window}
 */
export function isWindow(val) {
  return typeof window !== 'undefined' && is(val, 'Window')
}

/**
 * 检查是否定义
 * @param {*} val
 * @returns {*}  {boolean}
 */
export function isDef(val) {
  return typeof val !== 'undefined'
}
