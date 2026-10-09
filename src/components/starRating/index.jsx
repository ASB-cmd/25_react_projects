import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
export default function StarRating({ noOfStars = 5 }) {
  const [select, setSelect] = useState();
  const [hover, sethover] = useState();

  function handleSelect(getcurrentid) {
    setSelect(getcurrentid);
  }

  function handleMousehover(getcurrentid) {
    sethover(getcurrentid);
  }

  function handleMouseleave() {
    sethover(select);
  }

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        return (
          <FaStar
            className={index <= (select || hover) ? "active" : "inactive"}
            key={index}
            onClick={() => handleSelect(index)}
            onMouseMove={() => handleMousehover(index)}
            onMouseLeave={() => handleMouseleave()}
            size={45}
          />
        );
      })}
    </div>
  );
}
