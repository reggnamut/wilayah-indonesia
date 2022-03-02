const httpResponseCode = {
  200: {
    code: 200,
    status: "OK",
  },
  304: {
    code: 304,
    status: "Not Modified",
  },
  403: {
    code: 403,
    status: "Forbidden",
  },
  404: {
    code: 404,
    status: "Not Found",
  },
  406: {
    code: 406,
    status: "Not Acceptable",
  },
  429: {
    code: 429,
    status: "Too Many Requests",
  },
  500: {
    code: 500,
    status: "Internal Server Error",
  },
};

export default httpResponseCode;
