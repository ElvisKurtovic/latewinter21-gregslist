<template>
  <div class="home container">
    <div class="row mt-5">
      <div class="col">
        <h1>Welcome to Gregslist</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
      <button>Cars</button>
      <button>Houses</button>
      <button>Jobs</button>
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
