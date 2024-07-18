import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

function TripReviews({ rating, expandedCard, id, handleChange }) {
  const numStars = Math.floor(rating.rating);
  const numHalfStars = rating.rating % 1 >= 0.5 ? 1 : 0;

  const starsArray = [];

  for (let i = 0; i < numStars; i++) {
    starsArray.push(
      <IoIosStar key={`full-${i}`} className="text-yellow-400" />
    );
  }

  if (numHalfStars) {
    starsArray.push(<IoIosStarHalf key="half" className="text-yellow-400" />);
  }

  return (
    <div className="bg-gray-800 rounded-lg mb-4">
      <Accordion
        expanded={expandedCard === id}
        onChange={() => handleChange(id)}
        className="bg-gray-800 text-white"
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          className="bg-gray-700 text-white flex flex-row"
        >
          <Typography>Rating:</Typography>
          <div className="flex ml-2">{starsArray}</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{rating.message}</Typography>
          <Typography className="text-slate-400 pt-2">
            Author: {`${rating.reviewer.name} ${rating.reviewer.surname}`}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default TripReviews;
