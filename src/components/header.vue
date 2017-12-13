<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1">Price Indexer</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" exact class="nav-link">Add Website</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/show-data" exact class="nav-link">Show Data</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>

</style>
