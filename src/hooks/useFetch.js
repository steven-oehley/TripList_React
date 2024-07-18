// any custom hook must start with use

import { useState, useEffect } from "react";

// pitfall -   !*NB
// concerns passing in reference types as dependancies OR passing itenms that are not state
// ie passing in a function that is not a state variable
// function - useCallback
// object or array - useState or useRef
// for example passing in options for type of request - get, post, put, delete as an object {type: "GET"} - not a state variable
// when taken in the useFetch convert to a useRef, and use that value in depencancies array

export function useFetch(url) {
  // create state for data and loading
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorToDisplay, setErrorToDisplay] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    // fetch data
    // function created inside - not need to wrap with useCallback
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // get response
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          // response not okay - throw error
          throw new Error(response.statusText);
        }
        // reponse ok - get data, set data, set loading to false
        const fetchedData = await response.json();

        if (fetchedData.length === 0) {
          throw new Error("No data found");
        }
        setData(fetchedData);
        setIsLoading(false);
        setErrorToDisplay(null); // reset error on successful fetch
      } catch (error) {
        // if aborted
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        } else {
          // error passed in is error from if response not okay
          console.error("Error fetching data", error);
          setErrorToDisplay(error.message);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // cleanup function
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, errorToDisplay }; // custom hook - always return some data - array or object
  /* Returning an array or object allows you to easily expand the hook later by
   adding more state variables, functions, or even other hooks. If you only return a single value, 
   you’d have to refactor the hook and its usages to accommodate the new values. */
}
