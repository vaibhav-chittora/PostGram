export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PostGram API",
      version: "1.0.0",
      description:
        "Rest API for PostGram App built with Node.js, Express, MongoDB, and Mongoose.",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routers/v1/*.js"],
};
