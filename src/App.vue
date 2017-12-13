<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
//Imports
import addWebsite from './components/addWebsite.vue';
import showData from './components/showData.vue';
import header from './components/header.vue';
import footer from './components/footer.vue'

export default {
  components: {
    'app-header': header,
    'app-footer': footer
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

</style>
