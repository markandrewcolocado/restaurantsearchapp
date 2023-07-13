import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  // Extracting all the codes related to the yelp search api to create a hook
  // 1 - Cut all the codes related to yelp search api
  // 2 - Returning the things we inside of our SearchScreen component inside of an array
  // 3 - Import this hook to the component that needs it
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi there");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong.");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
