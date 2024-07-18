import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import { Button, CircularProgress, Box } from "@mui/material";

import TripCard from "./TripCard";
import ErrorDisplay from "./ErrorDisplay";

function TripList() {
  //   const [trips, setTrips] = useState([]); - data now comes from useFetch
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const {
    data: trips,
    isLoading,
    errorToDisplay: networkError,
  } = useFetch(url); // use custom hook to get data rename to trips

  // could not use useState here like this
  // cause continuous loop of rendering

  /* fetch("http://localhost:3000/trips")
.then((response) => response.json())
.then((data) => setTrips(data));     */

  // component renders fetches data and sets state
  // state change triggers re-render
  // re-render fetches data and sets state - over and over

  // useEffect on the other hand only re-run when one of its dependecies change
  // empty dependancy array - empty array means no dependancies only run on first render
  // can now avoid that loop

  /*  useEffect(
    ** cant use async here - cant have direct async () => {
      // can nest an async function inside
      fetch(url)
        .then((response) => response.json())
        .then((data) => setTrips(data));
    },
    [url]
  ); */

  // if we wrote async function outside useEffect and placed it inside
  // it would be called on every render - as function is outside data brought into useEffect
  // useEffect would see it as a new function on every render - location in memory, set state inside function
  // state updates, useEffect runs - back to same problem of continuous loop
  // this behaviour would be the same for all reference types - functions, objects, arrays
  // objects and arrays can be used in a useState - negating this behaviour
  // functions need a different solution -> useCallback

  /*   const fetchTrips = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTrips(data);
  }, [url]); */

  // useCallback will only re-run when its dependancies change
  // ie when should it create a new function - otherwise run old cached function
  // above want a new function when url changes - so pass url as dependancy

  /*   useEffect(() => {
    fetchTrips();
  }, [fetchTrips]); */ // run useEffect when the useCallback function changes, no longer need url as dependancy
  // url is dependancy of fetchTrips - fetchTrips is dependancy of useEffect

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 pt-6">TripList</h2>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFD700",
          color: "#000",
          marginRight: "8px",
          marginBottom: "16px",
          "&:hover": {
            backgroundColor: "#FFC300",
          },
        }}
        onClick={() => setUrl("http://localhost:3000/trips")}
      >
        All Trips
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFD700",
          color: "#000",
          marginBottom: "16px",
          "&:hover": {
            backgroundColor: "#FFC300",
          },
        }}
        onClick={() => setUrl("http://localhost:3000/trips?location=Europe")}
      >
        European Trips
      </Button>
      <ul>
        {/*  make sure trips exists before mapping */}

        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CircularProgress color="primary" />
          </Box>
        ) : networkError ? (
          <ErrorDisplay error={networkError} />
        ) : (
          trips?.map((trip) => <TripCard key={"tc_" + trip.id} trip={trip} />)
        )}
      </ul>
    </div>
  );
}

export default TripList;
