<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">
        最新動態
      </h1>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <!-- 最新餐廳 -->
          <NewestRestaurants :restaurants="restaurants"/>
        </div>
        <div class="col-md-6">
          <h3>最新評論</h3>
          <!-- 最新評論 -->
          <NewestComments :comments="comments"/>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'
import Spinner from '../components/Spinner.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner
  },
  data () {
    return {
      restaurants: [],
      comments: [],
      isLoading: true
    }
  },
  methods: {
    async fetchFeeds () {
      try {
        this.isLoading = true
        const response = await restaurantsAPI.getFeeds()

        if (response.statusText !== 'OK') throw new Error(response.statusText)
        const { comments, restaurants } = response.data

        this.comments = comments.filter(comment => comment.Restaurant && comment.text)
        this.restaurants = restaurants
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        console.log(error)
        Toast.fire({
            icon: 'error',
            title: '無法取得最新動態資料，請稍後再試'
        })
      }
    }
  },
  created () {
    this.fetchFeeds()
  }
}
</script>