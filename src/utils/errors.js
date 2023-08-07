const errorList = {
  BadInput: {
    code: 400,
    message: 'Validate Error',
  },
  NotFound: {
    code: 404,
    message: 'Not Found',
  },
};

export class AppError extends Error {
  /**
   * @constructor
   * @param { keyof errorList } errorName
   */
  constructor(errorName) {
    super();
    const { code, message } = errorList[errorName];
    this.code = code || 500;
    this.message = message || 'Server Error';
  }
}
