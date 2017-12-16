<template>
  <main role="main" class="container">
    <div class="mt-3 mb-4">
      <h1 class="text-center">Add Website</h1>
    </div>
    <div class="container">
      <form>
        <div class="form-row">
          <div class="form-group col-md-3">
            <input class="form-control mr-sm-2" type="url" size="40" placeholder="Website URL" aria-label="Website URL" required>
          </div>
          <div class="form-group col-md-3">
            <input class="form-control mr-sm-2" type="text" placeholder="Name pattern" aria-label="Name pattern" required>
          </div>
          <div class="form-group col-md-3">
            <input class="form-control mr-sm-2" type="text" placeholder="Price pattern" aria-label="Price pattern" required>
          </div>
          <div class="form-group col-md-2">
            <input class="form-control mr-sm-2" type="number" min="0" step="1" placeholder="Max depth" aria-label="Max depth" required>
          </div>
          <div class="form-group col-md-1">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Add</button>
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
          <th scope="col">Name pattern</th>
          <th scope="col">Price pattern</th>
          <th scope="col">Depth</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row" class="align-middle">http://wp.pl</th>
          <td class="align-middle">h1.product__header__name</td>
          <td class="align-middle">p.product__data__price__regular</td>
          <td class="align-middle">2</td>
          <td class="align-middle">
            <button type="button" class="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">http://distripark.pl</th>
          <td>div.product_info_name</td>
          <td>#projector_price_value</td>
          <td>5</td>
          <td>delete</td>
        </tr>
        <tr>
          <th scope="row">http://spidersweb.pl</th>
          <td>#nazwa</td>
          <td>#cena</td>
          <td>3</td>
          <td>delete</td>
        </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style>

</style>
