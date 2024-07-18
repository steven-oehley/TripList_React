import TripReviews from "./TripReviews";

import { useState } from "react";

function TripCard({ trip }) {
  const [expandedCard, setExpandedCard] = useState(null);

  function handleChange(id) {
    setExpandedCard(expandedCard === id ? null : id);
  }
  return (
    <li
      className="mb-6 border p-4
    "
    >
      <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
      <p className="text-yellow-400 mb-4">{trip.price}</p>
      {trip.ratings.map((rating, index) => (
        <TripReviews
          key={"tr_" + index + "_" + trip.id}
          rating={rating}
          id={index}
          expandedCard={expandedCard}
          handleChange={handleChange}
        />
      ))}
    </li>
  );
}
export default TripCard;
