/**
 * Class for executing http requests using axios library
 */
class Http {
  /**
   * Class constructor method
   */
  constructor() {
    this.baseUrl = 'https://reqres.in/api';
    this.instance = axios.create({
      baseURL: this.baseUrl,
      timout: 3000
    });
  }

  /**
   * Execute get request
   * @param endpoint
   * @param params
   */
  get(endpoint = '', params = {}) {
    return this.instance.get(endpoint, { params });
  }

  /**
   * Execute post request
   * @param endpoint
   * @param params
   * @returns {*}
   */
  post(endpoint = '', params = {}) {
    return this.instance.post(endpoint, params);
  }
}

export const http = new Http();