<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  components: {
    AdminRestaurantForm
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      isProcessing: false
    }
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        const { data, statusText } = await adminAPI.restaurants.getDetail({ restaurantId })
        if (statusText !== "OK") throw new Error(statusText)
        
        const { id, name, CategoryId, tel, address, description, image, opening_hours } = data.restaurant

        this.restaurant = {
          ...this.restaurant,
          id, name, tel, address, description, image,
          categoryId: CategoryId,
          openingHours: opening_hours
        }

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async handleAfterSubmit (formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData
        })
        if (data.status !== "success") throw new Error(data.message)
        this.$router.push({ name: 'admin-restaurants' })

      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法送出餐廳資料，請稍後再試'
        })
      }
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  }
}
</script>