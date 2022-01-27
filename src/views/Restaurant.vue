<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant"/>
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments"/>
    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'

const dummyData = {
  restaurant: {
    id: 1,
    name: "Ed Zieme",
    tel: "(535) 363-9171 x859",
    address: "163 Schultz Courts",
    opening_hours: "08:00",
    description: "quo",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=15.46344947596352",
    viewCounts: 1,
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-26T17:42:50.001Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 1,
        text: "Sed harum fuga.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$uSn.ry5E9Ay6jPnkIwT3uuS85zWHB3QCgRiFlojzk.nP0AfAZhwjm",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-24T13:30:57.000Z",
          updatedAt: "2022-01-24T13:30:57.000Z",
        },
      },
      {
        id: 51,
        text: "Reprehenderit et illo nobis sint odio voluptas expedita ut odit.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$8FO.bxFhdCUCud8/dLgyw.FUAYcJrjrgL0fq5EClUpOzxcB5zzZWG",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-24T13:30:57.000Z",
          updatedAt: "2022-01-24T13:30:57.000Z",
        },
      },
      {
        id: 101,
        text: "Repudiandae ut odit fugit est.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$8FO.bxFhdCUCud8/dLgyw.FUAYcJrjrgL0fq5EClUpOzxcB5zzZWG",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-24T13:30:57.000Z",
          updatedAt: "2022-01-24T13:30:57.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: []
    }
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log(restaurantId)

      const { restaurant, isFavorited, isLiked } = dummyData
      const { id, name, Category, image, opening_hours, tel, address, description, Comments } = restaurant

      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : '未分類',
        image,
        openingHours: opening_hours,
        tel,
        address,
        description,
        isFavorited,
        isLiked
      }
      this.restaurantComments = Comments
    },
  },
  created() {
    const id = this.$route.params
    this.fetchRestaurant (id)
  }
};
</script>