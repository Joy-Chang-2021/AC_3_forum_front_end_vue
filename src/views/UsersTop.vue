<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center" >
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'user', params: { id: user.id }}">
          <img
            :src="user.image"
            width="140px"
            height="140px"
          />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.followerCount }}</span>
        <p class="mt-3">
          <button v-if="user.isFollowed" @click.prevent.stop="deleteFollowed(user.id)" type="button" class="btn btn-danger">取消追蹤</button>
          <button v-else @click.prevent.stop="addFollowed(user.id)" type="button" class="btn btn-primary">追蹤</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavTabs from "../components/NavTabs.vue";
import usersAPI from "../apis/users"
import { Toast } from "../utils/helpers"

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTopUsers()
        this.users = data.users.map(user => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }))
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試'
        })
        console.log('error', error)
      }
    },
    async addFollowed(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })
        if (data.status !== 'success') throw new Error(data.message)
        this.users = this.users.map(user => {
          if (user.id !== userId) return user
          else {
            return {
              ...user,
              isFollowed: true,
              followerCount: user.followerCount +1
            }
          }
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
        console.log('error', error)
      } 
    },
    async deleteFollowed(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId })
        if (data.status !== 'success') throw new Error(data.message)
        this.users = this.users.map(user => {
          if (user.id !== userId) return user
          else {
            return {
              ...user,
              isFollowed: false,
              followerCount: user.followerCount -1
            }
          }
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
        console.log('error', error)
      }
    }
  },
  created() {
    this.fetchUsers()
  }
};
</script>