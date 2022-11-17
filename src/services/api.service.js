const BASE_URL = "http://localhost:3001/users";

// any function/method marked as 'async' will return a Promise
export default {
  async getAllUsers() {
    // this is a promis that wraps the raw Response object
    const response = await fetch(BASE_URL);
    // this is a promise that wraps the parsed JSON object
    return response.json();
  },
};
