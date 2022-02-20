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
        :disabled="isProcessing"
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import commentsAPI from '../apis/comments'
import { Toast } from '../utils/helpers'

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      text: '',
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async handleSubmit() {
      try {
        // 預防空白
        if (!this.text) {
          Toast.fire({
            icon: 'warning',
            title: '請填入餐廳評論'
          })
          return
        }
        // 使 Submit 不可點擊、開始 API 串接
        this.isProcessing = true
        const commentData = {
          restaurantId: this.restaurantId,
          text: this.text,
          User: this.currentUser,
          UserId: this.currentUser.id,
          createdAt: new Date()
        }
        const { data } = await commentsAPI.create({ commentData })
        if (data.status !== 'success') throw new Error(data.message)
        // 將資料包傳至父元件、加入 data 中用於渲染畫面
        this.$emit('after-create-comment', {
          ...commentData,
          id: data.commentId
        })
        // 清空表格、恢復 Submit 點擊功能
        this.text = ''
        this.isProcessing = false
      } catch {
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍後再試'
        })
        this.isProcessing = false
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>