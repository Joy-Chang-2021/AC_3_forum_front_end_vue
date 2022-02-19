<template>
  <div class="container py-5">
    <div class="mb-3">
      <!-- UserProfileCard.vue -->
      <UserProfileCard  
        :user="user"
        :is-current-user="user.id === currentUser.id"
        :initial-following="isFollowed"
        @following-handler="followingHandler"
      />
    </div>
    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard.vue -->
        <UserFollowingsCard
          :followings="followings"
        />
        <br>
        <!-- UserFollowersCard.vue -->
        <UserFollowersCard :followers="followers"/>
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard.vue -->
        <UserCommentsCard :comments="comments"/>
        <br>
        <!-- UserFavoritedRestaurantsCard.vue -->
        <UserFavoritedRestaurantsCard
          :favoritedRestaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'
import UserProfileCard from "../components/UserProfileCard.vue"
import UserFollowingsCard from "../components/UserFollowingsCard.vue"
import UserFollowersCard from "../components/UserFollowersCard.vue"
import UserCommentsCard from "../components/UserCommentsCard.vue"
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue"

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data () {
    return {
      // 所有資料
      user: {},
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: []
    }
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await usersAPI.get({userId})
        if (statusText !== "OK") throw new Error(statusText)
        const { profile, isFollowed } = data
        const { id, name, email, image, Comments, FavoritedRestaurants, Followers, Followings } = profile
        this.user = {
          id, name, email, image,
          commentsCount: Comments.length,
          favoritedRestaurantsCount: FavoritedRestaurants.length,
          followersCount: Followers.length,
          followingsCount: Followings.length,
        }
        this.isFollowed = isFollowed
        this.followings = Followings
        this.followers = Followers
        this.comments = Comments.filter(comment => comment.Restaurant)
        this.favoritedRestaurants = FavoritedRestaurants
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }    
    },
    followingHandler (boolean) {
      // 從 UI 元件接收並更新「追蹤狀態」true/false、並改變追蹤人數
      this.isFollowed = boolean
      if (boolean) this.user.followersCount ++
      else this.user.followersCount --
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  }
}
</script>