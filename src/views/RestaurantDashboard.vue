<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數：{{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
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
  updatedAt: "2022-01-26T17:42:50.000Z",
  CategoryId: 5,
  Category: {
    id: 5,
    name: "素食料理",
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
  },
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
};

export default {
  data() {
    return {
      restaurant: {}
    }
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = {
        name: dummyData.name,
        categoryName: dummyData.Category ? dummyData.Category.name : '未分類',
        commentsLength: dummyData.Comments.length,
        viewCounts: dummyData.viewCounts,
      }
    }
  },
  created() {
    this.fetchRestaurant()
  }
};
</script>