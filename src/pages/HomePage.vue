<template>
  <div class="home container text-center">
    <div class="row mt-5">
      <div class="col">
        <h1>Welcome to Gregslist</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
      <button class="btn btn-dark">Cars</button>
      <button class="btn btn-success">Houses</button>
      <button class="btn btn-primary">Jobs</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Home',
  setup() {
    // eslint-disable-next-line no-unused-vars
    const state = reactive({})
    return {
      methodName() {

      }
    }
  },
  components: {
  }
}
</script>
