<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills
      :categories="categories"
    />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard 
        v-for="restaurant in restaurants" :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination 
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
      :category-id="categoryId"
    />
  </div>
</template>

<script lang="ts">
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantsPagination from '../components/RestaurantsPagination.vue'

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Ed Zieme",
      tel: "(535) 363-9171 x859",
      address: "163 Schultz Courts",
      opening_hours: "08:00",
      description: "quo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.46344947596352",
      viewCounts: 0,
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Keagan Stiedemann",
      tel: "1-747-914-9238 x571",
      address: "511 Daryl Shoals",
      opening_hours: "08:00",
      description: "Et amet quia inventore quia voluptas est. Porro se",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.937464638195458",
      viewCounts: 0,
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Ms. Juwan Kessler",
      tel: "1-864-327-8419",
      address: "795 Block Views",
      opening_hours: "08:00",
      description: "Quos ut sed corporis voluptatem sint velit sed dol",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.18128548376136",
      viewCounts: 0,
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Hilda Marvin",
      tel: "(523) 867-4537 x09324",
      address: "05212 Daisha Inlet",
      opening_hours: "08:00",
      description: "culpa magni vel",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.180287262137014",
      viewCounts: 0,
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Gisselle Roberts",
      tel: "(939) 401-8804 x0902",
      address: "81674 Wehner Corner",
      opening_hours: "08:00",
      description: "perferendis vitae fuga",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.91627234708494",
      viewCounts: 0,
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Sabrina Rohan",
      tel: "(811) 728-3992",
      address: "260 Kling Terrace",
      opening_hours: "08:00",
      description: "Enim sit qui accusamus et aut quaerat illum praese",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.2835556921231",
      viewCounts: 0,
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Lupe Torp",
      tel: "286.508.6480 x31886",
      address: "493 Bailey Inlet",
      opening_hours: "08:00",
      description: "Doloribus voluptatem asperiores excepturi architec",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.35115612462559",
      viewCounts: 0,
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Albertha Bradtke",
      tel: "1-349-569-9745 x2306",
      address: "41666 Desiree Springs",
      opening_hours: "08:00",
      description: "rerum nemo iure",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.03662654705614",
      viewCounts: 0,
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Hortense Gottlieb",
      tel: "234-198-8410",
      address: "15026 Sid Course",
      opening_hours: "08:00",
      description: "sed et nulla",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.6983866633786",
      viewCounts: 0,
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Noemie Armstrong",
      tel: "(688) 512-9093",
      address: "55034 Rosalind Wall",
      opening_hours: "08:00",
      description: "Quibusdam aut eveniet.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.2766125971108275",
      viewCounts: 0,
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-24T13:30:57.000Z",
        updatedAt: "2022-01-24T13:30:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: 0,
      currentPage: 1,
      totalPage: [],
      previousPage: 0,
      nextPage: 0
    }
  },
  methods: {
    fetchRestaurants () {
      const { restaurants, categories, categoryId, page, totalPage, prev, next } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  },
  created() {
    this.fetchRestaurants ()
  }
};
</script>