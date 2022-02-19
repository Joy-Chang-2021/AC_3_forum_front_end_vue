<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          :disabled="isProcessing"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          type="button"
          class="btn btn-danger float-right"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user', params: { id: comment.UserId }}">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { mapState } from 'vuex'
import commentsAPI from '../apis/comments'
import { Toast } from '../utils/helpers'

export default {
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  mixins: [fromNowFilter],
  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        this.isProcessing = true
        const { data } = await commentsAPI.delete({ commentId })
        if (data.status !== 'success') throw new Error(data.message)
        this.$emit('after-delete-comment', commentId)
        this.isProcessing = false
      } catch (error) {
        Toast({
          icon: 'error',
          title: '無法刪除評論，請稍後再試'
        })
        this.isProcessing = false
      }
    }
  }
};
</script>