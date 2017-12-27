<template>
  <main role="main" class="container">
    <div class="mt-3 mb-4">
      <h1 class="text-center">Show Data</h1>
    </div>
    <div class="container">
      <form>
        <div class="form-row">
          <div class="form-group col-md-3">
            <input class="form-control mr-sm-2" type="text" size="40" placeholder="Product name" aria-label="Product name" v-model="priceCollector.productName" required>
          </div>
          <div class="form-group col-md-3">
            <select class="custom-select" v-model="searchType">
              <option value="getByName">Search products by name</option>
              <option value="getByNameMinPrice">Search product by name with min price</option>
              <option value="getByNameMaxPrice">Search product by name with max price</option>
            </select>
          </div>
          <div class="form-group col-md-1">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click.prevent="search">Search</button>
          </div>
          <div class="form-group col-md-1">
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" v-on:click.prevent="reset">Reset</button>
          </div>
        </div>
      </form>
    </div>

    <div class="container mt-4">
      <h2>Price Collector product list</h2>
      <table class="table table-striped">
        <thead class="thead-dark">
        <tr>
          <th scope="col" class="align-middle">Website name</th>
          <th scope="col" class="align-middle">Product url</th>
          <th scope="col" class="align-middle">Product name</th>
          <th scope="col" class="align-middle">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="singlePrice in pricesCollector">
          <th scope="row" class="align-middle">{{ singlePrice.websiteName }}</th>
          <td class="align-middle">{{ singlePrice.productUrl }}</td>
          <td class="align-middle">{{ singlePrice.productName }}</td>
          <td class="align-middle">{{ singlePrice.price }}</td>
        </tr>
        <tr v-if="singlePrice != ''">
          <th scope="row" class="align-middle">{{ singlePrice.websiteName }}</th>
          <td class="align-middle">{{ singlePrice.productUrl }}</td>
          <td class="align-middle">{{ singlePrice.productName }}</td>
          <td class="align-middle">{{ singlePrice.price }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import PriceCollector from '../api/PriceCollector';
import notificationMixin from '../mixins/notificationMixin';

export default {
  data() {
    return {
      priceCollector: {
        websiteName: "",
        productUrl: "",
        productName: "",
        price: ""
      },
      pricesCollector: [],
      singlePrice: "",
      searchType: "getByName"
    }
  },
  methods: {
    search: function () {
      if (this.priceCollector.productName != "") {
        this[this.searchType]();
      } else {
        this.getAll();
      }
    },
    reset: function () {
      this.priceCollector.productName = "";
      this.searchType = "getByName";
      this.getAll();
    },
    getAll: function () {
      PriceCollector.getAll().then(res => {
        this.singlePrice = "";
        this.pricesCollector = res.body.content;
      }, res => {
        this.addErrorMessage();
      })
    },
    getByName: function () {
      PriceCollector.getByName(this.priceCollector.productName).then(res => {
        this.singlePrice = "";
        this.pricesCollector = res.body;
        }, res => {
        this.addErrorMessage();
        })
    },
    getByNameMinPrice: function () {
      PriceCollector.getByNameMinPrice(this.priceCollector.productName).then(res => {
        this.pricesCollector = "";
        this.singlePrice = res.body;
        }, res => {
          this.addErrorMessage();
        })
    },
    getByNameMaxPrice: function () {
      PriceCollector.getByNameMaxPrice(this.priceCollector.productName).then(res => {
        this.pricesCollector = "";
        this.singlePrice = res.body;
        }, res => {
        this.addErrorMessage();
        })
    }
  },
  created() {
    this.getAll();
  },
  mixins: [notificationMixin]
}
</script>

<style>

</style>
