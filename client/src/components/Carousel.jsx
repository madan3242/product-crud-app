import React from 'react';
import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';

const Carousel = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg">
                <div id="carouselControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="carousel" />
                        </div>
                        <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="carousel" />
                        </div>
                        <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="carousel" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselControls" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselControls" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel