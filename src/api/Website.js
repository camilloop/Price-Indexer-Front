import Vue from 'vue'
import url from './Domain';

const Website = {
  getAll: function () {
    return Vue.http.get(url + '/websites');
  },
  add: function (website) {
    return Vue.http.post(url + '/websites', website);
  },
  delete: function (name) {
    return Vue.http.delete(url + '/websites/' + name);
  },
};

export default Website;
