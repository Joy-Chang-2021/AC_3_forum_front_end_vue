import { apiHelper } from './../utils/helpers'

export default {
  create({ commentData }) {
    return apiHelper.post(`/comments`, commentData)
  },
  delete({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}