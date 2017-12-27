import Vue from 'vue'
import url from './Domain';

const PriceCollector = {
  getAll: function () {
    return Vue.http.get(url + '/prices');
  },
  getByName: function (name) {
    return Vue.http.get(url + `/prices/${name}/`);
  },
  getByNameMinPrice: function (name) {
    return Vue.http.get(url + `/prices/${name}/min`);
  },
  getByNameMaxPrice: function (name) {
    return Vue.http.get(url + `/prices/${name}/max`);
  },
};

export default PriceCollector;
