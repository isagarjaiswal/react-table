import React, { useRef, useState } from "react";
import "./Carousal.css";
const defaultFunction = () => {};
export const Carousal = ({
  imageList = [],
  onDelete = defaultFunction,
  defaultImage,
  onSave = defaultFunction,
  circleCount = 5,
}) => {
  const [page, setpage] = useState(0);
  const carouselRef = useRef();

  const scrollToRight = () => {
    const nextPage = page + 1;
    if (imageList.length > nextPage) {
      carouselRef.current.children[nextPage].scrollIntoView();
      window.scrollTo(0, 0);
      setpage(nextPage);
    }
  };

  const scrollToLeft = () => {
    const prevPage = page - 1;

    if (prevPage >= 0) {
      carouselRef.current.children[prevPage].scrollIntoView();
      window.scrollTo(0, 0);
    }
    setpage(prevPage);
  };

  const handleOnDelete = () => {
    onDelete(imageList.filter((image, index) => index !== page));
    setpage(0);
  };

  const handelOnSave = () => {
    onSave(imageList[page]);
  };

  return (
    <>
      <div className="carousel-container">
        {
          <>
            <div ref={carouselRef} className="image-container">
              {imageList.length > 0 ? (
                imageList.map((image, index) => {
                  return (
                    <img
                      className={`carsousel-image`}
                      src={image.url}
                      key={index}
                      alt="NoT Found"
                    />
                  );
                })
              ) : (
                <div className="default-image-outer">
                  <img
                    className="default-image"
                    src={defaultImage}
                    alt="NoT Found"
                  />
                </div>
              )}
            </div>
            {imageList.length > 0 && (
              <>
                {page === 0 ? (
                  ""
                ) : (
                  <div
                    className="arrow carsouel-left-arrow"
                    onClick={scrollToLeft}
                  ></div>
                )}
                {page === imageList.length - 1 ? (
                  ""
                ) : (
                  <div
                    className="arrow carsouel-right-arrow"
                    onClick={scrollToRight}
                  ></div>
                )}
                <div className="cross-button" onClick={handleOnDelete}>
                  Delete
                </div>

                <div className="save-button" onClick={handelOnSave}>
                  Save
                </div>

                <div className="carousel-circle-container">
                  {imageList.slice(0, circleCount).map((img, index) => {
                    return (
                      <div
                        key={index}
                        className={`carousel-circle ${
                          page === index && `carousel-circle-active`
                        }`}
                      ></div>
                    );
                  })}
                </div>
              </>
            )}
          </>
        }
      </div>
    </>
  );
};
