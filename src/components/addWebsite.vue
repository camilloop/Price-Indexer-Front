<template>
  <main role="main" class="container">
    <div class="mt-3 mb-4">
      <h1 class="text-center">Add Website</h1>
    </div>
    <div class="container">
      <form>
        <div class="form-row">
          <div class="form-group col-md-3">
            <input class="form-control mr-sm-2" type="url" size="40" placeholder="Website URL" aria-label="Website URL" v-model="website.url" required>
          </div>
          <div class="form-group col-md-2">
            <input class="form-control mr-sm-2" type="text" placeholder="Website name" aria-label="Website name" v-model="website.name" required>
          </div>
          <div class="form-group col-md-2">
            <input class="form-control mr-sm-2" type="text" placeholder="Name pattern" aria-label="Name pattern" v-model="website.namePattern" required>
          </div>
          <div class="form-group col-md-2">
            <input class="form-control mr-sm-2" type="text" placeholder="Price pattern" aria-label="Price pattern" v-model="website.pricePattern" required>
          </div>
          <div class="form-group col-md-2">
            <input class="form-control mr-sm-2" type="number" min="0" step="1" placeholder="Max depth" aria-label="Max depth" v-model="website.maxDepth" required>
          </div>
          <div class="form-group col-md-1">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click.prevent="post">Add</button>
          </div>
        </div>
      </form>
    </div>

    <div class="container mt-4">
      <h2>Section title</h2>
      <table class="table table-striped">
        <thead class="thead-dark">
        <tr>
          <th scope="col">Website URL</th>
          <th scope="col">Name</th>
          <th scope="col">Name pattern</th>
          <th scope="col">Price pattern</th>
          <th scope="col">Depth</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="singleWebsite in filteredWebsites">
          <th scope="row" class="align-middle">{{ singleWebsite.url }}</th>
          <td class="align-middle">{{ singleWebsite.name }}</td>
          <td class="align-middle">{{ singleWebsite.namePattern }}</td>
          <td class="align-middle">{{ singleWebsite.pricePattern }}</td>
          <td class="align-middle">{{ singleWebsite.maxDepth }}</td>
          <td class="align-middle">
            <button type="button" class="btn btn-outline-danger" v-on:click="deleteWebsite(singleWebsite.name)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import Website from '../api/Website';
import notificationMixin from '../mixins/notificationMixin';

export default {
  data() {
    return {
      website: {
        url: "",
        name: "",
        namePattern: "",
        pricePattern: "",
        maxDepth: ""
      },
      websites: []
    }
  },
  methods: {
    post: function(){
      Website.add(this.website)
        .then(res => {
          this.addSuccessMessage(this.website.name + ' website added successfully.');
          this.website.url = this.website.name = this.website.namePattern = this.website.pricePattern = this.website.maxDepth = "";
          this.getWebsites();
          }, res => {
          this.addErrorMessage();
        })
    },
    getWebsites: function () {
      Website.getAll().then(res => {
        this.websites = res.body.content;
      }, res => {
        this.addErrorMessage();
      })
    },
    deleteWebsite: function (name) {
      Website.delete(name).then(res => {
        this.addSuccessMessage(name + ' website deleted successfully.');
        this.getWebsites();
      }, res => {
        this.addErrorMessage();
      })
    }
  },
  created() {
    this.getWebsites();
  },
  computed: {
    filteredWebsites: function () {
      return this.websites.filter((singleWebsite) => {
        return singleWebsite.name.match(this.website.name);
      });
    }
  },
  mixins: [notificationMixin]
}
</script>

<style>

</style>
