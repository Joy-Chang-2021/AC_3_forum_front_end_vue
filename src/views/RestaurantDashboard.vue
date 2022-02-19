<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數：{{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  data() {
    return {
      restaurant: {}
    }
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const {data, statusText} = await restaurantsAPI.getRestaurant({restaurantId})
        if (statusText !== "OK") throw new Error(statusText)
        const { restaurant } = data
        this.restaurant = {
          name: restaurant.name,
          categoryName: restaurant.Category ? restaurant.Category.name : '未分類',
          commentsLength: restaurant.Comments.length,
          viewCounts: restaurant.viewCounts,
        }
      } catch {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }  
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  }
};
</script>