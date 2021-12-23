import mock from "../utils/mock";

mock.onPost("/api/home/login").reply(200, {
    "id" : 1,
   "username": "mateusbeltrao",
   "email" : "mateusbeltrao2019@gmail.com" 
})