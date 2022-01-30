<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
          >
            Show
          </router-link>

          <a href="#" class="btn btn-link">Edit</a>

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button" class="btn btn-link"
          >
          Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = [
  {
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
  },
  {
    id: 2,
    name: "Keagan Stiedemann",
    tel: "1-747-914-9238 x571",
    address: "511 Daryl Shoals",
    opening_hours: "08:00",
    description:
      "Et amet quia inventore quia voluptas est. Porro sequi beatae sunt dignissimos nam possimus voluptatem. Cumque molestias dignissimos. In assumenda inventore consequatur similique magnam beatae sequi dignissimos reprehenderit. Animi totam vero voluptatem nobis hic illum reiciendis.\n \rDistinctio sapiente sed amet ratione incidunt impedit possimus maiores vitae. Dignissimos eligendi voluptatum est. Unde quibusdam impedit et. Harum blanditiis illo suscipit impedit.\n \rDistinctio fugiat doloremque. Aut amet a perspiciatis tenetur repellendus sed. Magni aut in voluptatem dolorum id non et. Vitae a ducimus aut.",
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
  },
  {
    id: 3,
    name: "Ms. Juwan Kessler",
    tel: "1-864-327-8419",
    address: "795 Block Views",
    opening_hours: "08:00",
    description:
      "Quos ut sed corporis voluptatem sint velit sed doloribus quia. Est ea qui. Labore blanditiis quos fuga consectetur et ex qui. Enim tempore nobis repellendus id temporibus. Veniam ea ut cumque id.",
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
  },
  {
    id: 6,
    name: "Sabrina Rohan",
    tel: "(811) 728-3992",
    address: "260 Kling Terrace",
    opening_hours: "08:00",
    description:
      "Enim sit qui accusamus et aut quaerat illum praesentium accusamus. Et quidem dignissimos quibusdam saepe culpa laborum nobis. Illo dolores accusamus officiis eos pariatur expedita debitis explicabo aut. Et illum impedit. Quia deserunt adipisci voluptatem non eius explicabo atque voluptate consequatur. Libero voluptatibus ullam et molestiae non velit.\n \rUt fuga impedit ut praesentium in tempore voluptas reprehenderit. Et ullam voluptatibus suscipit. Ut accusantium reiciendis molestiae sit consequuntur distinctio perspiciatis alias. Vero ut facere dolore aliquid est tempora repellendus deserunt.\n \rDolores unde voluptatem. Qui ut voluptas eos consequatur deserunt officia aut. Aut ab vitae iusto omnis. Qui dolores qui. Omnis asperiores aut et sint.",
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
  },
  {
    id: 7,
    name: "Lupe Torp",
    tel: "286.508.6480 x31886",
    address: "493 Bailey Inlet",
    opening_hours: "08:00",
    description:
      "Doloribus voluptatem asperiores excepturi architecto aspernatur impedit aut saepe accusantium. Nam consequatur velit et est. Dolorum voluptatum qui laboriosam laborum labore consequatur voluptatem sit voluptatem. Ullam sapiente ut nesciunt alias hic quis velit. Non at voluptatum rerum a. Pariatur quasi fugiat asperiores veniam voluptas ut voluptas dolorem.\n \rVoluptatem nisi maiores quo quo quis sit at minima. Modi quia non aperiam cum aliquid. Aut voluptas laborum ut. Ea nostrum labore et ipsam rerum. Quidem ullam temporibus exercitationem ut ad eos. Ipsa consequatur iure reiciendis sunt aut voluptas fugiat necessitatibus voluptates.\n \rUllam ducimus consequatur molestiae aut qui rerum est. Eos eos ea voluptas porro qui consequatur aliquid qui aliquam. Fugiat at a ea itaque voluptates. Atque quasi distinctio voluptatem. Officiis accusantium sed ea voluptas sed placeat nam.",
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
  },
  {
    id: 11,
    name: "Scotty Bernhard",
    tel: "971-330-0451 x0425",
    address: "677 Amparo Knoll",
    opening_hours: "08:00",
    description: "et delectus incidunt",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=98.10801063719194",
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
  },
  {
    id: 12,
    name: "Norberto Labadie",
    tel: "172-804-2906 x6468",
    address: "07843 Evan Squares",
    opening_hours: "08:00",
    description:
      "Enim modi et vero amet odio excepturi repellendus nihil quisquam.\nUllam minima dolor eum quibusdam et fuga inventore.\nVeniam autem explicabo reprehenderit tempore voluptatem aut est deleniti sint.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=66.50049116663675",
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
  },
  {
    id: 13,
    name: "Hannah Daniel",
    tel: "(946) 711-7976 x78835",
    address: "78827 Zieme Crossroad",
    opening_hours: "08:00",
    description:
      "Nostrum enim ut voluptatem aliquid est reprehenderit ut dolor. Aliquid cupiditate tenetur ipsum autem molestiae ab. Architecto labore voluptas officia eaque. Nisi ipsa illum dolores. Molestias laborum et.\n \rDoloremque sequi voluptatem optio tempora pariatur facilis. Et odit voluptates iusto ipsa quo minima quia. Commodi autem qui ea consequatur. Nemo aut dolores. Sed sit dolorem eum molestiae.\n \rReprehenderit pariatur corrupti rerum a dolor. Rerum et veniam ratione et doloremque atque. Culpa veniam reprehenderit. Facilis ut nam quo quasi. Id ut laborum molestiae rerum natus aspernatur excepturi iste.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=91.1651743236209",
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
  },
  {
    id: 14,
    name: "Delfina Tremblay",
    tel: "004.826.8374 x61056",
    address: "94902 Titus Mountains",
    opening_hours: "08:00",
    description:
      "Nisi consequatur quibusdam sequi dolore qui aut molestiae quia. Minus ea labore. Ut eum voluptatem quia est molestias deleniti dolore.\n \rQuis voluptas temporibus ipsam non repudiandae ut omnis iste. Beatae ullam est aut quasi aut. Illum tempora distinctio veritatis unde. Ad quaerat incidunt est aspernatur ullam libero quia. Rem dolorem aperiam non perspiciatis. Nihil saepe ipsa est quia totam.\n \rPraesentium optio ducimus aperiam. Ipsam vel voluptatem quia. At odit nihil. Quaerat aspernatur vitae qui quo ducimus harum.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=66.71932404914678",
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
  },
  {
    id: 15,
    name: "Daphney Nicolas",
    tel: "(197) 364-0949 x32128",
    address: "5719 Ceasar Flats",
    opening_hours: "08:00",
    description:
      "Vitae natus aut autem quos. Numquam error quia in ipsa similique distinctio vel. Optio pariatur velit placeat beatae autem officiis est in totam. Et itaque amet sapiente reprehenderit laboriosam ut est. Repellat cupiditate expedita voluptatem saepe aliquam. Omnis ex consequuntur molestias voluptas aperiam.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=51.13912290074569",
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
  },
  {
    id: 16,
    name: "Amara Wilkinson",
    tel: "(235) 769-7559 x5013",
    address: "4921 Vickie Brooks",
    opening_hours: "08:00",
    description: "id",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=18.247760232460266",
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
  },
  {
    id: 17,
    name: "Julie Kreiger",
    tel: "1-530-020-7750 x6278",
    address: "8561 Augustine Keys",
    opening_hours: "08:00",
    description: "saepe quia aperiam",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=71.39700426313638",
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
  },
  {
    id: 18,
    name: "Ms. Nikki Davis",
    tel: "990.794.0181",
    address: "01549 Ratke Glens",
    opening_hours: "08:00",
    description: "dicta eligendi sint",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=21.140375937351273",
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
  },
  {
    id: 19,
    name: "Mauricio Quitzon",
    tel: "406-662-3521",
    address: "851 Barrows Path",
    opening_hours: "08:00",
    description: "ut molestias rem",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=52.567881878910995",
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
  },
  {
    id: 20,
    name: "Hilbert Lynch PhD",
    tel: "1-397-765-6583",
    address: "153 Nat Park",
    opening_hours: "08:00",
    description: "Hic sit libero nulla.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=90.30412401521718",
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
  },
  {
    id: 21,
    name: "Keyshawn Abernathy",
    tel: "1-026-585-1323 x18404",
    address: "42309 Gislason Parks",
    opening_hours: "08:00",
    description:
      "Itaque ducimus aut sunt eaque incidunt voluptatem ducimus impedit iusto.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=56.16758518001148",
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
  },
  {
    id: 22,
    name: "Kaci Kerluke",
    tel: "1-951-281-3263",
    address: "273 Orpha Greens",
    opening_hours: "08:00",
    description: "aut",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=3.0690104921434758",
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
  },
  {
    id: 23,
    name: "Sincere Schoen",
    tel: "555.824.6678",
    address: "782 Rutherford Haven",
    opening_hours: "08:00",
    description:
      "Tenetur consectetur magnam commodi soluta illum eos sint dicta enim. Nisi dolor architecto reiciendis. Repudiandae tempora id ratione exercitationem illo.\n \rExcepturi enim molestiae quisquam ut sint repudiandae. Quidem et rem enim consequatur laudantium ut debitis. Magnam nostrum officia unde.\n \rMinima deserunt esse. Nobis ipsa sit id rerum aut illo. Recusandae sint quas voluptatem quis. Suscipit placeat vel dolor officiis. Cum pariatur aliquid cumque et. Eum quas accusamus vel repudiandae atque.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=86.31397476662943",
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
  },
  {
    id: 24,
    name: "Joshuah Weimann",
    tel: "648.181.4869 x0393",
    address: "108 Kiehn Corners",
    opening_hours: "08:00",
    description:
      "Sunt est quaerat vitae. Quasi voluptas praesentium quisquam consequatur quidem nesciunt exercitationem. Aliquid voluptatem voluptatem. Et suscipit tempora odio numquam assumenda deleniti. Suscipit rerum ut.\n \rSed in quos qui veritatis excepturi quia pariatur cupiditate enim. Quidem praesentium omnis et commodi voluptas. Soluta est quasi consequatur enim vel. Temporibus dolorum sunt provident ipsam. Praesentium consequatur vel. Id autem tempora harum nobis earum.\n \rQuisquam eos voluptatum ipsum voluptas qui eveniet rerum at. Ratione ipsum iusto est et. Dolores exercitationem voluptatem.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=77.44794701009981",
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
  },
  {
    id: 25,
    name: "Stacy Kunze",
    tel: "1-115-255-7432",
    address: "15285 Armstrong Field",
    opening_hours: "08:00",
    description: "id tenetur facilis",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=24.318682815215453",
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
  },
  {
    id: 26,
    name: "Montana Ledner III",
    tel: "471-691-2608 x7838",
    address: "40817 Britney Estate",
    opening_hours: "08:00",
    description: "ut libero in",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=25.021992103797565",
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
  },
  {
    id: 27,
    name: "Elisa Grady",
    tel: "460-547-2299 x001",
    address: "1766 Pagac Neck",
    opening_hours: "08:00",
    description: "Veritatis sit fuga.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=4.519063383709843",
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
  },
  {
    id: 28,
    name: "Eudora Anderson III",
    tel: "974-587-5530",
    address: "23281 Runolfsdottir Cape",
    opening_hours: "08:00",
    description: "quaerat",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=61.55431014389381",
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
  },
  {
    id: 29,
    name: "Mr. Coby Larkin",
    tel: "907-665-0225 x59857",
    address: "8176 Moore Mall",
    opening_hours: "08:00",
    description:
      "Neque omnis fugiat neque temporibus quasi est aliquam ex fugit. Totam quae incidunt. Voluptatibus aperiam quidem est enim ab. Mollitia dolor ut qui voluptatibus et. Molestiae assumenda ut praesentium distinctio.\n \rNostrum provident sed eos et cupiditate ut sint autem. Sit reprehenderit commodi rem doloremque cumque ipsum autem saepe at. Enim esse recusandae maiores provident aut. Consequatur esse quia natus hic et ea.\n \rNeque consequatur eaque. Beatae assumenda ratione fugiat voluptate provident ex incidunt perferendis. Ut non minus possimus id ut. Tenetur in debitis quia. Quaerat at rem officiis.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=62.08861495788649",
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
  },
  {
    id: 30,
    name: "Magdalena Rolfson",
    tel: "076-162-1483 x5977",
    address: "6682 Dibbert Park",
    opening_hours: "08:00",
    description: "Qui amet ut doloremque.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=49.78071515550337",
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
  },
  {
    id: 31,
    name: "Camylle Kutch",
    tel: "1-029-272-8168",
    address: "9835 Kautzer Plain",
    opening_hours: "08:00",
    description:
      "Corrupti quam placeat esse perspiciatis. Iste laudantium cupiditate cum corrupti. Quidem quidem aliquam odit magnam omnis. Eum amet nemo distinctio quo nemo eum. Aliquam sed reprehenderit aut. Suscipit dolorem eveniet ducimus accusamus adipisci facilis veniam qui.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=20.073821502789112",
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
  },
  {
    id: 32,
    name: "Coy Schuster III",
    tel: "1-630-171-5227",
    address: "785 Ari Tunnel",
    opening_hours: "08:00",
    description: "Sed quod dolores sint at voluptas et sint.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=70.21220739116556",
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
  },
  {
    id: 33,
    name: "Olin Olson",
    tel: "1-408-159-5865 x979",
    address: "97860 Adams Lodge",
    opening_hours: "08:00",
    description:
      "Sequi est similique reprehenderit quia culpa esse.\nSimilique iusto nesciunt consequatur expedita totam blanditiis eos nihil.\nConsequatur vel omnis provident.\nQuia velit velit nisi maxime iure.\nEa inventore cum debitis ullam natus qui id suscipit.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=44.38076883734126",
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
  },
  {
    id: 34,
    name: "Mrs. Verner Koch",
    tel: "422-057-3743 x309",
    address: "811 Godfrey Keys",
    opening_hours: "08:00",
    description: "vitae",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=25.647819310654096",
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
  },
  {
    id: 35,
    name: "Paolo Shanahan",
    tel: "(607) 897-0508",
    address: "6806 Eduardo Roads",
    opening_hours: "08:00",
    description:
      "Et non qui quis libero. Quae et est dolore. Aut repellendus vel esse dolores temporibus iste.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=78.97853603546108",
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
  },
  {
    id: 36,
    name: "Estelle Mosciski",
    tel: "1-733-173-0186",
    address: "804 Dino Shoals",
    opening_hours: "08:00",
    description:
      "Et totam qui molestias quasi quis incidunt eum.\nEa rem eos omnis cupiditate.\nPlaceat placeat in distinctio culpa voluptates repellendus.\nVel vel quaerat.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=60.75612803775707",
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
  },
  {
    id: 37,
    name: "Camylle Carroll III",
    tel: "027-128-4687",
    address: "6078 Hayes Shore",
    opening_hours: "08:00",
    description: "inventore",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=89.85515980559573",
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
  },
  {
    id: 38,
    name: "Mckenna Russel DVM",
    tel: "(681) 555-2251",
    address: "428 Breitenberg Land",
    opening_hours: "08:00",
    description:
      "Eveniet natus non. Beatae provident qui pariatur. Voluptatem possimus corrupti nam qui fugit consectetur quo nemo. Reiciendis dignissimos eum laborum quia quod quidem. Minima veniam omnis doloremque culpa accusantium dolores. Eum quasi optio.\n \rAut est eveniet aut totam id. Consequatur consequatur consequuntur porro aut assumenda nihil eos. Hic ad rem voluptatum fugit reiciendis aut ipsam.\n \rEst impedit deserunt libero accusamus quibusdam velit. Natus id occaecati quibusdam corrupti. Optio id in rerum in ut in perspiciatis. Quas eum est exercitationem et accusamus.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=59.36257686372639",
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
  },
  {
    id: 39,
    name: "Madge Kub",
    tel: "782-853-1397",
    address: "0691 Michaela Shoals",
    opening_hours: "08:00",
    description:
      "Commodi quaerat occaecati ducimus quas maiores. Aut fugit veritatis dolor voluptatem hic autem. Deleniti iste rerum in. Ut corrupti ab iste impedit aliquid iste at voluptatem sint. Dolor dolores laudantium culpa rerum doloribus quo eum et repellendus. Ratione voluptatem molestias repudiandae qui doloremque excepturi ut.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=46.94604521174042",
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
  },
  {
    id: 40,
    name: "Baby Gaylord",
    tel: "(163) 131-2162",
    address: "3606 Damien Fork",
    opening_hours: "08:00",
    description: "sint corporis molestias",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=47.01676148128185",
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
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
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
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
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
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
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
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
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
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
  },
  {
    id: 46,
    name: "Dr. Tyrell Towne",
    tel: "504.507.8358 x833",
    address: "3800 Gleason Rapids",
    opening_hours: "08:00",
    description:
      "Quis officia odio ut labore repellendus ut magni nemo.\nNon aliquam excepturi reprehenderit harum.\nQui architecto ratione harum.\nDignissimos quae dicta molestias est hic.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=17.92478070013526",
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
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
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
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-24T13:30:57.000Z",
      updatedAt: "2022-01-24T13:30:57.000Z",
    },
  },
  {
    id: 49,
    name: "Natalia Gorczany",
    tel: "110.828.2840",
    address: "285 Mitchell Ways",
    opening_hours: "08:00",
    description: "Non nobis nobis accusantium commodi adipisci aut quo.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=62.64857272504805",
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
  },
  {
    id: 50,
    name: "Verdie Bashirian",
    tel: "(637) 247-8734",
    address: "6519 Watsica Mall",
    opening_hours: "08:00",
    description: "Autem ut non quis est aut porro officiis occaecati dolores.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=42.907122132790995",
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
  },
];

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData;
    },
    deleteRestaurant (restaurantId) {
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id !== restaurantId
      )
    }
  },
};
</script>

