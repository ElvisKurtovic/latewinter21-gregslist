<template>
  <div class="job-details">
    <h1 class="text-center">Details Page</h1>
    <!-- {{ state.job }} -->
    <img class="card-img-top" src="https://media.tenor.com/images/84312b3be47d6372647ff7b113f86f1d/tenor.png" alt="job">

    <form class="form-inline" onsubmit="app.jobsController.createJob(event)">
      <div class="form-group">
        <input
          type="text"
          name="jobTitle"
          id="jobTitle"
          class="form-control"
          placeholder="Job Title"
          aria-describedby="helpId"
          v-model="state.job.jobTitle"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="company"
          id="company"
          class="form-control"
          placeholder="Company"
          aria-describedby="helpId"
          v-model="state.job.company"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="hours"
          id="hours"
          class="form-control"
          placeholder="Hours"
          aria-describedby="helpId"
          v-model="state.job.hours"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="rate"
          id="rate"
          class="form-control"
          placeholder="Rate"
          aria-describedby="helpId"
          v-model="state.job.rate"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="description"
          id="description"
          class="form-control"
          placeholder="Description"
          aria-describedby="helpId"
          v-model="state.job.description"
        />
      </div>
      <!-- <div class="form-group">
        <input
          type="text"
          name="imgUrl"
          id="imgUrl"
          class="form-control"
          placeholder="ImgUrl"
          aria-describedby="helpId"
          v-model="state.job.imgUrl"
        />
      </div> -->
      <button class="btn btn-info" type="submit">Create</button>
    </form>
    <button type="button" class="btn btn-outline-danger" @click="deleteJob">
      Delete Job
    </button>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { jobsService } from '../services/JobsService'
import { AppState } from '../Appstate'

export default {
  name: 'JobDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      job: computed(() => AppState.activeJob)
    })

    onMounted(() => {
      jobsService.getJob(route.params.id)
    })

    onBeforeRouteLeave((to, from, next) => {
      if (window.confirm('You sure bro?')) {
        AppState.activeJob = {}
        next()
      }
    })

    return {
      route,
      state,
      async deleteJob() {
        await jobsService.deleteJob(state.job._id)
        router.push({ name: 'Jobs' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
