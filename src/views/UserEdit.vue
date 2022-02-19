<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          :src="image | emptyImage"
          alt=""
          class="d-block img-thumbnail mb-3"
          width="200" height="200"
        >
        <input
          id="image"
          @change="handleFileChange"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        >
      </div>

      <button
        :disabled="isProcessing"
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { emptyImageFilter } from './../utils/mixins'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'

export default {
  mixins: [emptyImageFilter],
  data() {
    return {
      name: '',
      image: '',
      isProcessing: false
    }
  },
  methods: {
    setUser() {
      this.name = this.currentUser.name
      this.image = this.currentUser.image
    },
    handleFileChange(e) {
      const { files } = e.target
      if (files.length === 0) {
        this.image = ''
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.image = imageURL
      }
    },
    async handleSubmit(e) {
      try {
        if (!this.name) {
          Toast.fire({
            icon: 'warning',
            title: '請填入使用者名稱'
          })
          return
        }
        this.isProcessing = true
        const form = e.target
        const formData = new FormData(form)
        const { data }= await usersAPI.update({ 
          userId: this.currentUser.id,
          formData
        })
        if (data.status !== 'success') throw new Error(data.message)
        this.$router.push({ path: `/users/${this.currentUser.id}` })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法編輯使用者資料，請稍後再試'
        })
        this.isProcessing = false
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser (newValue) {
      this.setUser(newValue)
    }
  },
  created () {
    const { id } = this.$route.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'Not-found' })
      return
    }
    this.setUser()
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'Not-found' })
      return
    }
    this.setUser()
    next()
  }
}
</script>
