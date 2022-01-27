<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants" :key="restaurant.id"
      class="card mb-3" style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button 
              v-if="restaurant.isFavorited"
              @click="deletaFavorite(restaurant.id)"
              type="button" class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click="addFavorate(restaurant.id)"
              type="button" class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavTabs from "../components/NavTabs.vue";

const dummyData = [
  {
    id: 50,
    name: "Verdie Bashirian",
    tel: "(637) 247-8734",
    address: "6519 Watsica Mall",
    opening_hours: "08:00",
    description: "Autem ut non quis est aut porro officiis occaecati",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=42.907122132790995",
    viewCounts: 0,
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    CategoryId: 5,
    FavoritedUsers: [],
    isFavorited: false,
    FavoriteCount: 0,
  },
  {
    id: 49,
    name: "Natalia Gorczany",
    tel: "110.828.2840",
    address: "285 Mitchell Ways",
    opening_hours: "08:00",
    description: "Non nobis nobis accusantium commodi adipisci aut q",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=62.64857272504805",
    viewCounts: 0,
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    CategoryId: 3,
    FavoritedUsers: [],
    isFavorited: false,
    FavoriteCount: 0,
  },
  {
    id: 48,
    name: "Rashawn Waelchi",
    tel: "046.782.4734",
    address: "0982 Carter Motorway",
    opening_hours: "08:00",
    description: "Aut nemo sit dolores numquam.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=80.40122467104513",
    viewCounts: 0,
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    CategoryId: 2,
    FavoritedUsers: [],
    isFavorited: false,
    FavoriteCount: 0,
  },
  {
    id: 47,
    name: "Queen Labadie",
    tel: "564.495.0330 x950",
    address: "3561 Mitchell Crescent",
    opening_hours: "08:00",
    description: "vel",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=10.636300458219461",
    viewCounts: 0,
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    CategoryId: 2,
    FavoritedUsers: [],
    isFavorited: false,
    FavoriteCount: 0,
  },
  {
    id: 46,
    name: "Dr. Tyrell Towne",
    tel: "504.507.8358 x833",
    address: "3800 Gleason Rapids",
    opening_hours: "08:00",
    description: "Quis officia odio ut labore repellendus ut magni n",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=17.92478070013526",
    viewCounts: 0,
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    CategoryId: 4,
    FavoritedUsers: [],
    isFavorited: false,
    FavoriteCount: 0,
  },
  {
    id: 45,
    name: "Marianne Ruecker",
    tel: "475-004-7454",
    address: "3039 Craig Drives",
    opening_hours: "08:00",
    description: "voluptas laborum nihil",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=50.69571091929559",
    viewCounts: 0,
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    CategoryId: 2,
    FavoritedUsers: [],
    isFavorited: false,
    FavoriteCount: 0,
  },
  {
    id: 44,
    name: "Rafaela Strosin DDS",
    tel: "890.097.4032",
    address: "3566 Phyllis Mountain",
    opening_hours: "08:00",
    description: "veniam",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=21.3181150554562",
    viewCounts: 0,
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    CategoryId: 4,
    FavoritedUsers: [],
    isFavorited: false,
    FavoriteCount: 0,
  },
  {
    id: 43,
    name: "Sienna Oberbrunner",
    tel: "1-745-002-0578 x3746",
    address: "6730 Felicita Squares",
    opening_hours: "08:00",
    description: "ut qui natus",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=38.600615522076744",
    viewCounts: 0,
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    CategoryId: 2,
    FavoritedUsers: [],
    isFavorited: false,
    FavoriteCount: 0,
  },
  {
    id: 42,
    name: "Martine Cummings",
    tel: "778.364.4333",
    address: "63199 Harber Port",
    opening_hours: "08:00",
    description: "repellendus",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=30.709556038635455",
    viewCounts: 0,
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    CategoryId: 3,
    FavoritedUsers: [],
    isFavorited: false,
    FavoriteCount: 0,
  },
  {
    id: 41,
    name: "Phoebe Donnelly Sr.",
    tel: "684-470-1115 x9566",
    address: "46651 Ruth Fields",
    opening_hours: "08:00",
    description: "illum",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=85.49613668199902",
    viewCounts: 0,
    createdAt: "2022-01-24T13:30:57.000Z",
    updatedAt: "2022-01-24T13:30:57.000Z",
    CategoryId: 5,
    FavoritedUsers: [],
    isFavorited: false,
    FavoriteCount: 0,
  },
];

export default {
  components: {
    NavTabs,
  },
  data () {
    return {
      restaurants: dummyData
    }
  },
  methods: {
    addFavorate(id) {
      const index = this.restaurants.findIndex(restaurant => restaurant.id === id)
      this.restaurants[index].isFavorited = true
    },
    deletaFavorite(id) {
      const index = this.restaurants.findIndex(restaurant => restaurant.id === id)
      this.restaurants[index].isFavorited = false
    }
  }
};
</script>