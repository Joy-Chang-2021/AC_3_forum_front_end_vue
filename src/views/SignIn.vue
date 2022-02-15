<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        >
      </div>

      <button
        :disabled="isProcessing"
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <!-- <a href="/signup">Sign Up</a> -->
          <router-link to="/signup">
            Sign Up
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import { Toast } from '../utils/helpers.js'
import authorizationAPI from './../apis/authorization.js'

export default ({
  data () {
    return {
      email: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit () {
      try {
        // 若 email、password 空白，跳出提示 & 結束此函式
        // (預防 <input required> 屬性被修改的狀況)
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 email 和 password'
          })
          return
        }
        // 使按鈕暫停使用 (避免伺服器回應前、按鈕被重複點擊)
        this.isProcessing = true
        // 向後端伺服器送出請求
        const response = await authorizationAPI.signIn({
          // 注意：實際上，在 password 送出前須先進行加密 (後端會解密後驗證)
          email: this.email,
          password: this.password
        })
        // 取得 API 請求後的資料
        const { data } = response
        // 驗證資料狀態
        if (data.status !== 'success') throw new Error(data.message)
        // 將 token 存放在 localStorage 內
        localStorage.setItem('token', data.token)
        // 成功登入後轉址到餐廳首頁
        this.$router.push('/restaurants')
      }
      catch(error) {
        // 將密碼欄位清空
        this.password = ""
        // 顯示錯誤訊息
        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })
        // 使按鈕回復使用
        this.isProcessing = false
      }
    }
  }
})
</script>