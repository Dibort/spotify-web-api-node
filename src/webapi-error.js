'use strict';

function WebapiError(message, error, statusCode) {
  this.name = 'WebapiError';
  this.message = message || '';
  this.error = error || {};
  this.statusCode = statusCode;
}

WebapiError.prototype = Error.prototype;

module.exports = WebapiError;
