<template>
  <div class="col-4">
    <!-- NOTE the route contains both the name and an object to provide needed params -->
    <router-link :to="{name: 'JobDetails', params: {id: job._id}}" >
      <div class="card job">
        <!-- <img class="card-img-top" :src="job.imgUrl" alt="job"> -->
        <div class="card-body">
          <h4 class="card-title">Job Title: {{job.jobTitle}} | Company: {{job.company}} | Hours: {{job.hours}}</h4>
          <p class="card-text">Rate: {{job.rate}} | Description: {{job.description}}</p>
          <!-- <p class="card-text">Description: {{job.description}}</p> -->
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'job',
  props: {
    job: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
.job:hover {
  transform: translateY(-5px);
  box-shadow: 1px 3px 5px rgb(94, 94, 94);
  cursor: pointer
}

.job {
  transition: all .2s;
  color: black
}
</style>
