<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id }}"
      >
        Dashboard
      </router-link>

      <button
        v-if="restaurant.isFavorited"
        @click.prevent.stop="deleteFavorite(restaurant.id)"
        type="button"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        v-else
        @click.prevent.stop="addFavorite(restaurant.id)"
        type="button"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        @click.prevent.stop="deleteLike"
        type="button"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        v-else
        @click.prevent.stop="addLike"
        type="button"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  watch: {
    initialRestaurant (newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant,
    }
  },
  methods: {
    async addFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({restaurantId})
        if (data.status !== "success") throw new Error(data.message)
        this.restaurant.isFavorited = true
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({restaurantId})
        if (data.status !== "success") throw new Error(data.message)
        this.restaurant.isFavorited = false
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍後再試'
        })
      }
    },
    addLike () {
      this.restaurant.isLiked = true
    },
    deleteLike () {
      this.restaurant.isLiked = false
    }
  },
}
</script>