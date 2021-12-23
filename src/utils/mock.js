var MockAdapter = require("axios-mock-adapter");

var axios = require("axios");

const instance = new MockAdapter(axios, {delayResponse: 0})

export default instance