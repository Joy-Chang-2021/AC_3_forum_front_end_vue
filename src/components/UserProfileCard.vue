<template>
  <div class="card">
    <div class="row no-gutters">
      <!-- 圖片區 -->
      <div class="col-md-4">
        <img :src="user.image | emptyImage" width="300px" height="300px">
      </div>
      <!-- 文字區 -->
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.email }}</p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{ user.commentsCount }}</strong> 已評論餐廳</li>
            <li><strong>{{ user.favoritedRestaurantsCount }}</strong> 收藏的餐廳</li>
            <li><strong>{{ user.followingsCount }}</strong> followings (追蹤者)</li>
            <li><strong>{{ user. followersCount }}</strong> followers (追隨者)</li>
          </ul>
          <!-- 按鈕區 -->
          <form @submit.prevent.stop action="/following/3" method="POST" style="display: contents;">
            <!--「編輯」，僅本人可使用 -->
            <router-link 
              v-if="isCurrentUser"
              :to="{ name: 'user-edit', params: { id: user.id }}"
            >
              <button type="submit" class="btn btn-primary">
                Edit
              </button>
            </router-link>
            
            <!-- 追蹤、取消追蹤 -->
            <button
              v-else-if="initialFollowing"  
              @click="deleteFollowing(user.id)"
              type="submit" class="btn btn-danger mr-2"
            >
              取消追蹤
            </button>
            <button
              v-else 
              @click="addFollowing (user.id)"
              type="submit" class="btn btn-primary mr-2"
            >
              追蹤
            </button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    user: {
      // 資料(唯獨)直接帶入 profile card
      type: Object,
      required: true
    },
    isCurrentUser: {
      // 連動頁面的資料、來控制「Edit」按鈕的顯示結果
      type: Boolean,
      required: true,
    },
    initialFollowing: {
      // 連動頁面的資料、來控制「追蹤/取消追蹤」按鈕的顯示結果
      type: Boolean,
      required: true,
    }
  },
  watch: {
    initialFollowing(newValue) {
      this.initialFollowing = newValue
    }
  },
  methods: {
    async addFollowing (userId) {
      try {
        const { data } = await usersAPI.addFollowing({userId})
        if (data.status !== 'success') throw new Error(data.status)
        this.$emit('following-handler', true)        
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法追蹤使用者，請稍後再試'
        })
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({userId})
        if (data.status !== 'success') throw new Error(data.status)
        this.$emit('following-handler', false)        
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤使用者，請稍後再試'
        })
      }
    }
  }
}
</script>