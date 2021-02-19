import axios from 'axios';

/**
 * Standard HTTP Handler
 * @type {Object}
 */
const XHR = axios.create();

/**
 * Pass data from response to promise
 * @param  {Object} data
 * @return {Object}
 */
const responseHandler = ({ data }) => data;

/**
 * Pass errors to promise
 * @param  {???} error
 * @return {String}
 */
const errorHandler = (error) => {
  let { msg, code } = error;

  if (!msg) {
    msg = 'There was an issue with your request. Please try again.';
  }

  if (!code) {
    code = '???';
  }

  return { error: msg };
};

/**
 * Post to XHR
 * @param  {String} url
 * @param  {Object} params
 * @param  {Object} headers
 * @return {Promise}
 */
export const post = (url, params, headers) => XHR.post(url, { ...params }, { ...headers })
  .then(responseHandler)
  .catch(errorHandler);

/**
 * Put to XHR
 * @param  {String} url
 * @param  {Object} params
 * @param  {Object} headers
 * @return {Promise}
 */
export const put = (url, params, headers) => XHR.put(url, { ...params }, { ...headers })
  .then(responseHandler)
  .catch(errorHandler);

/**
 * Get to XHR
 * @param  {[type]} url
 * @param  {[type]} params
 * @return {[type]}
 */
export const get = (url, params, headers) => XHR.get(url, {
  ...params,
  ...headers,
})
  .then(responseHandler)
  .catch(errorHandler);

export default XHR;
