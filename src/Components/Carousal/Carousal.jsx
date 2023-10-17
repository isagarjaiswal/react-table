import React, { useRef, useState } from 'react'
import "./Carousal.css"
const defaultFunction = () => { }
const Carousel = ({ imageList = [], onDelete = defaultFunction, defaultImage = "", onSave = defaultFunction, circleCount = 5 }) => {
    const [page, setPage] = useState(0)
    const carouselRef = useRef();
    const scrollToRight = () => {
        const nextPage = page + 1;
        if (imageList.length > nextPage) {
            carouselRef.current.children[nextPage].scrollIntoView({ behavior: "smooth" })
            setPage(nextPage);
        }
    }
    const scrollToLeft = () => {
        const prevPage = page - 1;
        if (prevPage >= 0) {
            carouselRef.current.children[prevPage].scrollIntoView({ behavior: "smooth" })
            setPage(prevPage);
        }
    }
    const handleOnDelete = () => {
        onDelete(imageList.filter((img, index) => index !== page));
        setPage(0)
    }
    const handleOnSave = () => {
        onSave(imageList[page]);
    }

    return (
        <div className='carousel-box'>
            <div className='carousel-container'>
                {
                    <>
                        <div ref={carouselRef} className='image-container'>
                            {
                                imageList.length > 0
                                    ? (
                                        imageList.map((image, index) => {
                                            return <img className='carousel-image' src={image.url} key={index} />
                                        })
                                    ) : (
                                        <img src={defaultImage} alt='No images' />
                                    )
                            }
                        </div>
                        {
                            imageList.length > 0 && (<>
                                {
                                    page > 0 && (<div className='carousel-arrow carousel-left-arrow' onClick={scrollToLeft}> &lt; </div>)
                                }
                                {
                                    page < imageList.length - 1 && (<div className='carousel-arrow carousel-right-arrow' onClick={scrollToRight}> &gt; </div>)
                                }
                                <div className='carousel-arrow carousel-cross-btn' onClick={handleOnDelete}> X </div>

                                <div className='carousel-circle-container'>
                                    {
                                        imageList.slice(0, circleCount).map((img, index) => {
                                            return <div key={index} className={`carousel-circle ${page === index && ('carousel-circle-active')}`}>

                                            </div>
                                        })
                                    }
                                </div>
                            </>)
                        }

                    </>
                }
            </div>
            <div className="carousel-btn">
            <button onClick={handleOnSave} className='carousel-save-btn'>Save</button>
            {/* <button onClick={} className='carousel-delete-btn'>Delete</button> */}
            </div>
        </div>
    )
}

export default Carousel