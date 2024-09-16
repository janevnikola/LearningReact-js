import React, { useState, useEffect } from "react";
import ImageSliderStyles from "./ImageSliderStyles.module.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function ImageSlider({ urlOfPictures, limitOfPictures }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState(false);

    // Function to fetch the images from the API
    async function fetchImages(url, limit) {
        try {
            setLoadingMessage(true);
            const response = await fetch(`${url}?page=1&limit=${limit}`);
            const data = await response.json();

            console.log("Fetched data:", data);

            if (data) {
                setImages(data);
                setLoadingMessage(false);
            }
        } catch (error) {
            setErrorMessage(`Error fetching images: ${error.message}`);
        }
    }

    useEffect(() => {
        if (urlOfPictures) {
            fetchImages(urlOfPictures, limitOfPictures);
        }
    }, [urlOfPictures, limitOfPictures]);

    if (loadingMessage) {
        return (
            <>
                <p>Loading data, please wait...</p>
            </>
        );
    }

    if (errorMessage) {
        return (
            <>
                <p>{errorMessage}</p>
            </>
        );
    }


    function handleLeftClick(){
        if(currentSlide === 0){
            setCurrentSlide(prevcurrentSlide => images.length - 1);
        }
        else{
            setCurrentSlide(prevcurrentSlide => prevcurrentSlide - 1);
        }
    }

    
    function handleRightClick(){
        if(currentSlide === images.length -1){
            setCurrentSlide(prevcurrentSlide => prevcurrentSlide = 0);
        }
        else{
            setCurrentSlide(prevcurrentSlide => prevcurrentSlide + 1);
        }
    }

    function handleCircleClickChange(indx){
        setCurrentSlide(indx);
    }

    return (
        <>
            <div className={ImageSliderStyles.ImageSliderContainer}>
                <ChevronLeftIcon className={ImageSliderStyles.leftIcon} onClick={handleLeftClick}/>
                {images && images.length > 0 ? (
                    images.map((imageItem, index) => (
                        <img
                            key={imageItem.id}
                            alt="Image"
                            src={imageItem.download_url || imageItem.url} // Fallback to 'url' if 'download_url' doesn't exist
                            className={currentSlide === index ? ImageSliderStyles.currentImage : ImageSliderStyles.hideImage}
                            width="670px"
                            height="420px"
                        />
                    ))
                ) : (
                    <p>No images available</p>
                )}
                <ChevronRightIcon className={ImageSliderStyles.rightIcon} onClick={handleRightClick}/>
                <span className={ImageSliderStyles.indicators}>
                    {images && images.length > 0 ? (
                        images.map((_, index) => (
                            <button key={index} onClick={()=>handleCircleClickChange(index)} className={currentSlide === index ? ImageSliderStyles.circleIndicator :
                            ImageSliderStyles.hideCircleIndicator
                            }></button>
                        ))
                    ) : null}
                </span>
            </div>
        </>
    );
}

export default ImageSlider;
