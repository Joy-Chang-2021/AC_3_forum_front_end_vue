<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 -->
        <NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <!-- 最新評論 -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'

const dummyData = {
  "restaurants": [
    {
        "id": 27,
        "name": "Elisa Grady",
        "tel": "460-547-2299 x001",
        "address": "1766 Pagac Neck",
        "opening_hours": "08:00",
        "description": "Veritatis sit fuga.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.519063383709843",
        "viewCounts": 0,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        }
    },
    {
        "id": 40,
        "name": "Baby Gaylord",
        "tel": "(163) 131-2162",
        "address": "3606 Damien Fork",
        "opening_hours": "08:00",
        "description": "sint corporis molestias",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.01676148128185",
        "viewCounts": 0,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        }
    },
    {
        "id": 19,
        "name": "Mauricio Quitzon",
        "tel": "406-662-3521",
        "address": "851 Barrows Path",
        "opening_hours": "08:00",
        "description": "ut molestias rem",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.567881878910995",
        "viewCounts": 0,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        }
    },
    {
        "id": 15,
        "name": "Daphney Nicolas",
        "tel": "(197) 364-0949 x32128",
        "address": "5719 Ceasar Flats",
        "opening_hours": "08:00",
        "description": "Vitae natus aut autem quos. Numquam error quia in ipsa similique distinctio vel. Optio pariatur velit placeat beatae autem officiis est in totam. Et itaque amet sapiente reprehenderit laboriosam ut est. Repellat cupiditate expedita voluptatem saepe aliquam. Omnis ex consequuntur molestias voluptas aperiam.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.13912290074569",
        "viewCounts": 0,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "CategoryId": 4,
        "Category": {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        }
    },
    {
        "id": 46,
        "name": "Dr. Tyrell Towne",
        "tel": "504.507.8358 x833",
        "address": "3800 Gleason Rapids",
        "opening_hours": "08:00",
        "description": "Quis officia odio ut labore repellendus ut magni nemo.\nNon aliquam excepturi reprehenderit harum.\nQui architecto ratione harum.\nDignissimos quae dicta molestias est hic.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.92478070013526",
        "viewCounts": 0,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "CategoryId": 4,
        "Category": {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        }
    },
    {
        "id": 39,
        "name": "Madge Kub",
        "tel": "782-853-1397",
        "address": "0691 Michaela Shoals",
        "opening_hours": "08:00",
        "description": "Commodi quaerat occaecati ducimus quas maiores. Aut fugit veritatis dolor voluptatem hic autem. Deleniti iste rerum in. Ut corrupti ab iste impedit aliquid iste at voluptatem sint. Dolor dolores laudantium culpa rerum doloribus quo eum et repellendus. Ratione voluptatem molestias repudiandae qui doloremque excepturi ut.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.94604521174042",
        "viewCounts": 0,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        }
    },
    {
        "id": 5,
        "name": "Gisselle Roberts",
        "tel": "(939) 401-8804 x0902",
        "address": "81674 Wehner Corner",
        "opening_hours": "08:00",
        "description": "perferendis vitae fuga",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.91627234708494",
        "viewCounts": 0,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        }
    },
    {
        "id": 31,
        "name": "Camylle Kutch",
        "tel": "1-029-272-8168",
        "address": "9835 Kautzer Plain",
        "opening_hours": "08:00",
        "description": "Corrupti quam placeat esse perspiciatis. Iste laudantium cupiditate cum corrupti. Quidem quidem aliquam odit magnam omnis. Eum amet nemo distinctio quo nemo eum. Aliquam sed reprehenderit aut. Suscipit dolorem eveniet ducimus accusamus adipisci facilis veniam qui.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.073821502789112",
        "viewCounts": 0,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        }
    },
    {
        "id": 43,
        "name": "Sienna Oberbrunner",
        "tel": "1-745-002-0578 x3746",
        "address": "6730 Felicita Squares",
        "opening_hours": "08:00",
        "description": "ut qui natus",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.600615522076744",
        "viewCounts": 0,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        }
    },
    {
        "id": 28,
        "name": "Eudora Anderson III",
        "tel": "974-587-5530",
        "address": "23281 Runolfsdottir Cape",
        "opening_hours": "08:00",
        "description": "quaerat",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.55431014389381",
        "viewCounts": 0,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        }
    }
  ],
  "comments": [
    {
        "id": 19,
        "text": "Magni neque dolores sed nemo voluptatem ut hic quisquam quasi.",
        "UserId": 1,
        "RestaurantId": 19,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "User": {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$PuyDBzahkLS4TDlwemz4MO9F7A9DhcFZByWzwHc7OhX1CHYQlTNuu",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        },
        "Restaurant": {
            "id": 19,
            "name": "Mauricio Quitzon",
            "tel": "406-662-3521",
            "address": "851 Barrows Path",
            "opening_hours": "08:00",
            "description": "ut molestias rem",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.567881878910995",
            "viewCounts": 0,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z",
            "CategoryId": 3
        }
    },
    {
        "id": 54,
        "text": "At ab error voluptate temporibus repudiandae eius nulla ipsa architecto.",
        "UserId": 1,
        "RestaurantId": 4,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "User": {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$PuyDBzahkLS4TDlwemz4MO9F7A9DhcFZByWzwHc7OhX1CHYQlTNuu",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        },
        "Restaurant": {
            "id": 4,
            "name": "Hilda Marvin",
            "tel": "(523) 867-4537 x09324",
            "address": "05212 Daisha Inlet",
            "opening_hours": "08:00",
            "description": "culpa magni vel",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.180287262137014",
            "viewCounts": 0,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z",
            "CategoryId": 3
        }
    },
    {
        "id": 76,
        "text": "Enim iste sed.",
        "UserId": 1,
        "RestaurantId": 26,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "User": {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$PuyDBzahkLS4TDlwemz4MO9F7A9DhcFZByWzwHc7OhX1CHYQlTNuu",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        },
        "Restaurant": {
            "id": 26,
            "name": "Montana Ledner III",
            "tel": "471-691-2608 x7838",
            "address": "40817 Britney Estate",
            "opening_hours": "08:00",
            "description": "ut libero in",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.021992103797565",
            "viewCounts": 0,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z",
            "CategoryId": 4
        }
    },
    {
        "id": 100,
        "text": "Facilis totam rerum eum autem consectetur.",
        "UserId": 1,
        "RestaurantId": 50,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "User": {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$PuyDBzahkLS4TDlwemz4MO9F7A9DhcFZByWzwHc7OhX1CHYQlTNuu",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        },
        "Restaurant": {
            "id": 50,
            "name": "Verdie Bashirian",
            "tel": "(637) 247-8734",
            "address": "6519 Watsica Mall",
            "opening_hours": "08:00",
            "description": "Autem ut non quis est aut porro officiis occaecati dolores.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.907122132790995",
            "viewCounts": 0,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z",
            "CategoryId": 5
        }
    },
    {
        "id": 120,
        "text": "Et laboriosam eos expedita ea perspiciatis.",
        "UserId": 1,
        "RestaurantId": 20,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "User": {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$PuyDBzahkLS4TDlwemz4MO9F7A9DhcFZByWzwHc7OhX1CHYQlTNuu",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        },
        "Restaurant": {
            "id": 20,
            "name": "Hilbert Lynch PhD",
            "tel": "1-397-765-6583",
            "address": "153 Nat Park",
            "opening_hours": "08:00",
            "description": "Hic sit libero nulla.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.30412401521718",
            "viewCounts": 0,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z",
            "CategoryId": 5
        }
    },
    {
        "id": 144,
        "text": "Expedita consectetur ratione quis eos totam quisquam dolor architecto eius.",
        "UserId": 1,
        "RestaurantId": 44,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "User": {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$PuyDBzahkLS4TDlwemz4MO9F7A9DhcFZByWzwHc7OhX1CHYQlTNuu",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        },
        "Restaurant": {
            "id": 44,
            "name": "Rafaela Strosin DDS",
            "tel": "890.097.4032",
            "address": "3566 Phyllis Mountain",
            "opening_hours": "08:00",
            "description": "veniam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.3181150554562",
            "viewCounts": 0,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z",
            "CategoryId": 4
        }
    },
    {
        "id": 6,
        "text": "Doloremque error facere voluptatem consectetur voluptas voluptatem et occaecati aliquam.",
        "UserId": 2,
        "RestaurantId": 6,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "User": {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$uSn.ry5E9Ay6jPnkIwT3uuS85zWHB3QCgRiFlojzk.nP0AfAZhwjm",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        },
        "Restaurant": {
            "id": 6,
            "name": "Sabrina Rohan",
            "tel": "(811) 728-3992",
            "address": "260 Kling Terrace",
            "opening_hours": "08:00",
            "description": "Enim sit qui accusamus et aut quaerat illum praesentium accusamus. Et quidem dignissimos quibusdam saepe culpa laborum nobis. Illo dolores accusamus officiis eos pariatur expedita debitis explicabo aut. Et illum impedit. Quia deserunt adipisci voluptatem non eius explicabo atque voluptate consequatur. Libero voluptatibus ullam et molestiae non velit.\n \rUt fuga impedit ut praesentium in tempore voluptas reprehenderit. Et ullam voluptatibus suscipit. Ut accusantium reiciendis molestiae sit consequuntur distinctio perspiciatis alias. Vero ut facere dolore aliquid est tempora repellendus deserunt.\n \rDolores unde voluptatem. Qui ut voluptas eos consequatur deserunt officia aut. Aut ab vitae iusto omnis. Qui dolores qui. Omnis asperiores aut et sint.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.2835556921231",
            "viewCounts": 0,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z",
            "CategoryId": 3
        }
    },
    {
        "id": 26,
        "text": "Temporibus et voluptatum.",
        "UserId": 2,
        "RestaurantId": 26,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "User": {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$uSn.ry5E9Ay6jPnkIwT3uuS85zWHB3QCgRiFlojzk.nP0AfAZhwjm",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        },
        "Restaurant": {
            "id": 26,
            "name": "Montana Ledner III",
            "tel": "471-691-2608 x7838",
            "address": "40817 Britney Estate",
            "opening_hours": "08:00",
            "description": "ut libero in",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.021992103797565",
            "viewCounts": 0,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z",
            "CategoryId": 4
        }
    },
    {
        "id": 48,
        "text": "Eos pariatur earum aut non animi nam.",
        "UserId": 2,
        "RestaurantId": 48,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "User": {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$uSn.ry5E9Ay6jPnkIwT3uuS85zWHB3QCgRiFlojzk.nP0AfAZhwjm",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        },
        "Restaurant": {
            "id": 48,
            "name": "Rashawn Waelchi",
            "tel": "046.782.4734",
            "address": "0982 Carter Motorway",
            "opening_hours": "08:00",
            "description": "Aut nemo sit dolores numquam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.40122467104513",
            "viewCounts": 0,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z",
            "CategoryId": 2
        }
    },
    {
        "id": 91,
        "text": "Ut id omnis qui.",
        "UserId": 2,
        "RestaurantId": 41,
        "createdAt": "2022-01-24T13:30:57.000Z",
        "updatedAt": "2022-01-24T13:30:57.000Z",
        "User": {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$uSn.ry5E9Ay6jPnkIwT3uuS85zWHB3QCgRiFlojzk.nP0AfAZhwjm",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z"
        },
        "Restaurant": {
            "id": 41,
            "name": "Phoebe Donnelly Sr.",
            "tel": "684-470-1115 x9566",
            "address": "46651 Ruth Fields",
            "opening_hours": "08:00",
            "description": "illum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.49613668199902",
            "viewCounts": 0,
            "createdAt": "2022-01-24T13:30:57.000Z",
            "updatedAt": "2022-01-24T13:30:57.000Z",
            "CategoryId": 5
        }
    }
  ]
}

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  methods: {
    fetchFeeds () {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  },
  created () {
    this.fetchFeeds()
  }
}
</script>