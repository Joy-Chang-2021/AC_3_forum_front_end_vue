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
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button v-if="user.isFollowed" @click.prevent.stop="deleteFollowed(user)" type="button" class="btn btn-danger">取消追蹤</button>
          <button v-else @click.prevent.stop="addFollowed(user)" type="button" class="btn btn-primary">追蹤</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavTabs from "../components/NavTabs.vue";

const dummyData = [
  {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$PuyDBzahkLS4TDlwemz4MO9F7A9DhcFZByWzwHc7OhX1CHYQlTNuu",
    isAdmin: true,
    image: "https://i.pinimg.com/564x/65/57/df/6557dfed2e819d166d21632f542678e3.jpg",
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    Followers: [],
    FollowerCount: 0,
    isFollowed: false,
  },
  {
    id: 2,
    name: "user1",
    email: "user1@example.com",
    password: "$2a$10$uSn.ry5E9Ay6jPnkIwT3uuS85zWHB3QCgRiFlojzk.nP0AfAZhwjm",
    isAdmin: false,
    image: "https://i.pinimg.com/564x/34/58/1d/34581d157f65a4f4b97cbca406ec79cb.jpg",
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    Followers: [],
    FollowerCount: 0,
    isFollowed: false,
  },
  {
    id: 3,
    name: "user2",
    email: "user2@example.com",
    password: "$2a$10$8FO.bxFhdCUCud8/dLgyw.FUAYcJrjrgL0fq5EClUpOzxcB5zzZWG",
    isAdmin: false,
    image: "https://i.pinimg.com/564x/ba/1c/79/ba1c796fc180a9a2ea9a3105530f35ee.jpg",
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    Followers: [],
    FollowerCount: 0,
    isFollowed: false,
  },
];

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
    fetchUsers() {
      this.users = dummyData
    },
    addFollowed(user) {
      user.isFollowed = true
      user.FollowerCount++
    },
    deleteFollowed(user) {
      user.isFollowed = false
      user.FollowerCount--
    }
  },
  created() {
    this.fetchUsers()
  }
};
</script>