const { schema } = require("../models/Product");

const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "1.0.0", // by default: '1.0.0'
    title: "SE SHOP REST API", // by default: 'REST API'
    description: "RESTful API for SE SHOP", // by default: ''
    contact: {
      name: "Arthittaya Kongdee",
      email: "",
    },
  },
  servers: [
    {
      url: "", // by default: 'http://localhost:3000'
      description: "", // by default: ''
    },
    // { ... }
  ],
  tags: [
    // by default: empty Array
    {
      name: "product", // Tag name
      description: "API fot product Object", // Tag description
    },
    // { ... }
  ],
  components: {
    schema: {
      Product: {
        type: "object",
        properties: {
          name: { type: "String" },
          description: { type: "String" },
          price: { type: "Number" },
          image: { type: "String" },
          category: { type: "String" },
        },
      },
    },
  }, // by default: empty object
};

const outputFile = "./swagger-output.json";
const routes = ["./index.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
