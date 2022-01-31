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
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

const dummyData = {
  "id": 1,
  "name": "root",
  "email": "root@example.com",
  "password": "$2a$10$PuyDBzahkLS4TDlwemz4MO9F7A9DhcFZByWzwHc7OhX1CHYQlTNuu",
  "isAdmin": true,
  "image": null,
  "createdAt": "2022-01-24T13:30:57.000Z",
  "updatedAt": "2022-01-24T13:30:57.000Z",
}

export default {
  mixins: [emptyImageFilter],
  data() {
    return {
      name: '',
      image: '',
      // todo: renew updatedAt???
    }
  },
  methods: {
    fetchUser() {
      this.name = dummyData.name
      this.image = dummyData.image
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
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      // todo: 傳送資料至後端伺服器
      // todo: also renew updatedAt???
      console.log(formData)
    }
  },
  created () {
    this.fetchUser()
  }
}
</script>
