<template>
  <form @submit.prevent.stop="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    handleSubmit() {
      // todo: 向 API 發送 POST 請求
      // 向上通知事件 $emit + 傳送資料
      this.$emit('after-create-comment', {
        CommentId: uuidv4(),
        restaurantId: this.restaurantId,
        text: this.text
      })
      this.text = '' //清空輸入框
    }
  }
}
</script>
