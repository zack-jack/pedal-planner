/* eslint-disable func-names */
/* eslint-disable no-undef */
(function () {
  window.flushPromises = () => new Promise((r) => setImmediate(r));
}());
