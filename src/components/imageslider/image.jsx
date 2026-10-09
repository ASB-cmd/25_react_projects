import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [image, setimage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMsg, SeterrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(geturl) {
    try {
      setLoading(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setimage(data);
        setLoading(false);
      }
    } catch (e) {
      SeterrMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevous() {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(image);

  if (loading) {
    return <div>Loading Data Please Wait</div>;
  }

  if (errMsg !== null) {
    return <div>Error occured {errMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevous}
        className="arrow arrow-left"
      />
      {image && image.length
        ? image.map((item, index) => (
            <img
              key={item.url}
              alt={item.download_url}
              src={item.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicater">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator hide-current-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
