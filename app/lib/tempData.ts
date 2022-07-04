import {
  DAYS_OF_WEEK,
  RATING_SOURCE,
  TYPE_OF_PLACE
} from "~/routes/plan/$position";

export const tempData = [
  [
    {
      image_url:
        "https://lh5.googleusercontent.com/p/AF1QipMynujQeYWBq6aCUFfBbYWKdoJuG4_cCYzzr3Td=w408-h271-k-no",
      name: "Conga",
      description:
        'One of the most famous eateries in Porto, Conga is known for its "B"ifana” (pulled pork burger), made with a family secret recipe and sold at affordable prices.',
      coordinates: { lat: 41.14912871318949, lng: -8.609374130822491 },
      ratings: [{ source: RATING_SOURCE.GOOGLE, rating: 2 }],
      opening_hours: {
        [DAYS_OF_WEEK.MONDAY]: [{ start: "12pm", end: "10pm" }],
        [DAYS_OF_WEEK.TUESDAY]: [{ start: "12pm", end: "10pm" }],
        [DAYS_OF_WEEK.WEDNESDAY]: [{ start: "12pm", end: "10pm" }],
        [DAYS_OF_WEEK.THURSDAY]: [{ start: "12pm", end: "10pm" }],
        [DAYS_OF_WEEK.FRIDAY]: [{ start: "12pm", end: "9.30pm" }],
        [DAYS_OF_WEEK.SATURDAY]: [{ start: "12pm", end: "10pm" }],
        [DAYS_OF_WEEK.SUNDAY]: [{ start: "12pm", end: "10pm" }],
      },
      price: {
        currency: "€",
        amount: 5,
      },
      recommended_duration_minutes: 30,
      known_for: "",
      type_of_place: [TYPE_OF_PLACE.RESTAURANT],
    },
    {
      image_url:
        "https://insideporto.com/wp-content/uploads/2015/04/InsidePorto_Clerigos-Tower.jpg ",
      name: " Clérigos Tower",
      description:
        "A 75m tall bell tower of a church, the Clérigos Tower can be seen prominently throughout Porto and a climb up offers impressive views of the city",
      coordinates: { lat: 41.145836083701646, lng: -8.614540022893717 },
      ratings: [{ source: RATING_SOURCE.GOOGLE, rating: 2 }],
      opening_hours: {
        [DAYS_OF_WEEK.MONDAY]: [{ start: "9am", end: "7pm" }],
        [DAYS_OF_WEEK.TUESDAY]: [{ start: "9am", end: "7pm" }],
        [DAYS_OF_WEEK.WEDNESDAY]: [{ start: "9am", end: "7pm" }],
        [DAYS_OF_WEEK.THURSDAY]: [{ start: "9am", end: "7pm" }],
        [DAYS_OF_WEEK.FRIDAY]: [{ start: "9am", end: "7pm" }],
        [DAYS_OF_WEEK.SATURDAY]: [{ start: "9am", end: "7pm" }],
        [DAYS_OF_WEEK.SUNDAY]: [{ start: "9am", end: "7pm" }],
      },
      price: {
        currency: "EUR",
        amount: { regular: "6", students_and_children: "3" },
      },
      recommended_duration_minutes: 60,
      known_for: "Church, views of the city",
      type_of_place: [TYPE_OF_PLACE.ATTRACTION, TYPE_OF_PLACE.VANTAGE_POINT],
    },
    {
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd1cCijs1hRmC5CllfcMwVojZg79dJG8ihPA&usqp=CAU",
      name: "Igreja do Carmo",
      description:
        "Connected to its twin church by a house, this baroque church has a well-known tiled side façade. The Church is free to enter, and is accompanied with a museum with an entrance fee gating the Hidden House (narrowest house of Oporto), church, catacombs, sacristy and three other rooms with ancient paintings and vestments",
      coordinates: { lat: 41.16135669308233, lng: -8.621184729101367 },
      ratings: [{ source: RATING_SOURCE.GOOGLE, rating: 4.5 }],
      opening_hours: {
        [DAYS_OF_WEEK.MONDAY]: [{ start: "9am", end: "6pm" }],
        [DAYS_OF_WEEK.TUESDAY]: [{ start: "9am", end: "6pm" }],
        [DAYS_OF_WEEK.WEDNESDAY]: [{ start: "9am", end: "6pm" }],
        [DAYS_OF_WEEK.THURSDAY]: [{ start: "9am", end: "6pm" }],
        [DAYS_OF_WEEK.FRIDAY]: [{ start: "9am", end: "6pm" }],
        [DAYS_OF_WEEK.SATURDAY]: [{ start: "9am", end: "6pm" }],
        [DAYS_OF_WEEK.SUNDAY]: [{ start: "9am", end: "6pm" }],
      },
      price: {
        currency: "EUR",
        amount: 5,
      },
      recommended_duration_minutes: 60,
      known_for: "Church architecture, titled exterior, museum",
      type_of_place: [TYPE_OF_PLACE.ATTRACTION, TYPE_OF_PLACE.MUSEUM],
    },
    {
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMI2G7Xcxj_4NdWP-dQ-kOJmlb-GaFJDogQA&usqp=CAU",
      name: "Church of Santo Ildefonso",
      description:
        " Completed in 1739, the church was built in a proto-Baroque style and features a retable by the Italian artist Nicolau Nasoni and a façade of 1932 azulejo tilework. ",
      coordinates: { lat: 41.146215079288105, lng: -8.606698125922836 },
      ratings: [{ source: RATING_SOURCE.GOOGLE, rating: 4.5 }],
      opening_hours: {
        [DAYS_OF_WEEK.MONDAY]: [{ start: "closed", end: "closed" }],
        [DAYS_OF_WEEK.TUESDAY]: [{ start: "10am", end: "10.40pm" }],
        [DAYS_OF_WEEK.WEDNESDAY]: [{ start: "10am", end: "10.40pm" }],
        [DAYS_OF_WEEK.THURSDAY]: [{ start: "10am", end: "10.40pm" }],
        [DAYS_OF_WEEK.FRIDAY]: [{ start: "10am", end: "10.40pm" }],
        [DAYS_OF_WEEK.SATURDAY]: [{ start: "10am", end: "10.40pm" }],
        [DAYS_OF_WEEK.SUNDAY]: [{ start: "10am", end: "10.40pm" }],
      },
      price: {
        currency: "EUR",
        amount: 0,
      },
      recommended_duration_minutes: 15,
      known_for: "Church architecture, cermaric titled exterior",
    },
    {
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0aVk8iCuL0EOpf-J_oRhwmy0eHNBXbZ49g&usqp=CAU ",
      name: " O Gazela ",
      description:
        " The most famous place for hotdogs in Porto - thin bread, sausage and cheese comprise a unique yet delicious spin on hot dogs.",
      coordinates: { lat: 41.1449188725986, lng: -8.60773406639426 },
      ratings: [{ source: RATING_SOURCE.GOOGLE, rating: 4.7 }],
      opening_hours: {
        [DAYS_OF_WEEK.MONDAY]: [{ start: "12pm", end: "10.30pm" }],
        [DAYS_OF_WEEK.TUESDAY]: [{ start: "12pm", end: "10.30pm" }],
        [DAYS_OF_WEEK.WEDNESDAY]: [{ start: "12pm", end: "10.30pm" }],
        [DAYS_OF_WEEK.THURSDAY]: [{ start: "12pm", end: "10.30pm" }],
        [DAYS_OF_WEEK.FRIDAY]: [{ start: "12pm", end: "10.30pm" }],
        [DAYS_OF_WEEK.SATURDAY]: [{ start: "12pm", end: "10.30pm" }],
        [DAYS_OF_WEEK.SUNDAY]: [{ start: "closed", end: "closed" }],
      },
      price: {
        currency: "EUR",
        amount: 4,
      },
      recommended_duration_minutes: 30,
      known_for: "Spicy Hot Dogs",
    },
    {
      image_url:
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGGxxRyYqvpixXY3gEKVo-3djyIe6FK_oyQ&usqp=CAU",
      name: "Porto Cathedral",
      description:
        " One of the city's oldest monuments, the Cathedral is still the largest place for worship in Porto. Its stunning Romanesque architecture, including the prominent gothic rose windows on the exterior and silver altarpiece in the interior, is free to visitors. The cloister charges an entry fee, boasting tiles painted with some of the scenes from the Bible, and the Cathedral Treasure, exhibiting the cathedral’s most prized possessions",
      coordinates: { lat: 41.143095466258615, lng: -8.611100408722711 },
      ratings: [{ source: RATING_SOURCE.GOOGLE, rating: 4.5 }],
      opening_hours: {
        [DAYS_OF_WEEK.MONDAY]: [{ start: "9am", end: "5.30pm" }],
        [DAYS_OF_WEEK.TUESDAY]: [{ start: "9am", end: "5.30pm" }],
        [DAYS_OF_WEEK.WEDNESDAY]: [{ start: "9am", end: "5.30pm" }],
        [DAYS_OF_WEEK.THURSDAY]: [{ start: "9am", end: "5.30pm" }],
        [DAYS_OF_WEEK.FRIDAY]: [{ start: "9am", end: "5.30pm" }],
        [DAYS_OF_WEEK.SATURDAY]: [{ start: "9am", end: "5.30pm" }],
        [DAYS_OF_WEEK.SUNDAY]: [{ start: "9am", end: "5.30pm" }],
      },
      price: {
        currency: "EUR",
        amount: 3,
      },
      recommended_duration_minutes: 45,
      known_for: "Romanesque architecture, church",
    },
    {
      image_url:
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97ENnQ47RKSg_Dvq2U-_593Mhva2RXAUi7A&usqp=CAU ",
      name: "Ribeira de Porto",
      description:
        "The area directly alongside Douro River, Ribeira boasts narrow cobbled streets which wind past merchants’ houses and cafes, and a stunning view of the ascending development of Vila Nova de Gaia across it ",
      coordinates: { lat: 41.14053349262897, lng: -8.61264615414872 },
      ratings: [{ source: RATING_SOURCE.GOOGLE, rating: 4.8 }],
      opening_hours: {
        [DAYS_OF_WEEK.MONDAY]: [{ start: "closed", end: "closed" }],
        [DAYS_OF_WEEK.TUESDAY]: [{ start: "closed", end: "closed" }],
        [DAYS_OF_WEEK.WEDNESDAY]: [{ start: "closed", end: "closed" }],
        [DAYS_OF_WEEK.THURSDAY]: [{ start: "closed", end: "closed" }],
        [DAYS_OF_WEEK.FRIDAY]: [{ start: "closed", end: "closed" }],
        [DAYS_OF_WEEK.SATURDAY]: [{ start: "closed", end: "closed" }],
        [DAYS_OF_WEEK.SUNDAY]: [{ start: "closed", end: "closed" }],
      },
      price: {
        currency: "EUR",
        amount: 0,
      },
      recommended_duration_minutes: 30,
      known_for:
        "River; Nightlife, Scenic view of Vila Nova de Gaia across the river",
    },

    {
      image_url:
        "https://www.google.com/maps/place/Caf%C3%A9+Restaurante+O+Afonso/@41.1526364,-8.6217367,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMzlv_FNY6zV1qbtTREVixf5oEJ7BW3ySofvrxu!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMzlv_FNY6zV1qbtTREVixf5oEJ7BW3ySofvrxu%3Dw150-h86-k-no!7i5872!8i3360!4m12!1m6!3m5!1s0x0:0xf05e852a15a7a221!2sCaf%C3%A9+Restaurante+O+Afonso!8m2!3d41.1526364!4d-8.6217367!3m4!1s0xd24650408f3e261:0xf05e852a15a7a221!8m2!3d41.1526364!4d-8.6217367#",
      name: "Café Restaruante O Alfonso",
      description:
        " Visited by Anthony Bourdain, Alfonso is small local restaurant famous for Francesinha",
      coordinates: { lat: 41.15357348482662, lng: -8.621371919565895 },
      ratings: [{ source: RATING_SOURCE.GOOGLE, rating: 4.4 }],
      opening_hours: {
        [DAYS_OF_WEEK.MONDAY]: [{ start: "closed", end: "closed" }],
        [DAYS_OF_WEEK.TUESDAY]: [
          {
            start: "12pm",
            end: "3pm",
          },
          {
            start: "7pm",
            end: "10.30pm",
          },
        ],
        [DAYS_OF_WEEK.WEDNESDAY]: [
          {
            start: "12pm",
            end: "3pm",
          },
          {
            start: "7pm",
            end: "10.30pm",
          },
        ],
        [DAYS_OF_WEEK.THURSDAY]: [
          {
            start: "12pm",
            end: "3pm",
          },
          {
            start: "7pm",
            end: "10.30pm",
          },
        ],
        [DAYS_OF_WEEK.FRIDAY]: [
          {
            start: "12pm",
            end: "3pm",
          },
          {
            start: "7pm",
            end: "10.30pm",
          },
        ],
        [DAYS_OF_WEEK.SATURDAY]: [
          {
            start: "12pm",
            end: "3pm",
          },
          {
            start: "7pm",
            end: "10.30pm",
          },
        ],
        [DAYS_OF_WEEK.SUNDAY]: [
          {
            start: "12pm",
            end: "3pm",
          },
          {
            start: "7pm",
            end: "10.30pm",
          },
        ],
      },
      price: {
        currency: "EUR",
        amount: 10 - 12,
      },
      recommended_duration_minutes: 30 - 60,
      known_for: " Francesinha",
    },
  ],
  [],
  [],
];
