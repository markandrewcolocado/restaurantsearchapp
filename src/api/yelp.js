import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer l-ZDXqIwHhtEfnIMOOg1aQgk7RWTytkkzwMr3vDERhxJb_OmJJCNJAWf-9N3Wf1Y9haDKa1EvwiGJ-UWdmqxo7Q6f0elaP0RsF7iZ2vjseWH7jeslWdhr217YL-pZHYx",
  },
});
