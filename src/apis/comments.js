import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  create({ commentData }) {
    return apiHelper.post(`/comments`, commentData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // delete() {}
}