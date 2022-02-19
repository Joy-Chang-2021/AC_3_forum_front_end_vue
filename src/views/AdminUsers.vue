<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              v-if="user.id !== currentUser.id"
              @click="toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })"
              type="button"
              class="btn btn-link"
            >
              set as {{ user.isAdmin ? "user" : "admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AdminNav from "../components/AdminNav.vue";
import adminAPI from "../apis/admin"
import { Toast } from "../utils/helpers"

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchUsers () {
      try {
        const { data, statusText } = await adminAPI.users.get()
        if (statusText !== "OK") throw new Error(statusText)
        this.users = data.users
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者名單，請稍後再試'
        })
      }
    },
    async toggleUserRole({ userId, isAdmin }) {
      try {
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: `${!isAdmin}`
        })
        if (data.status !== 'success') throw new Error(data.status)

        this.users = this.users.map((user) => {
          if (user.id !== userId) return user
          else return {
            ...user,
            isAdmin: !isAdmin,
          }
        });
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法修改使用者權限，請稍後再試'
        })
      }
    },
  },
  created () {
    this.fetchUsers ()
  }
};
</script>
