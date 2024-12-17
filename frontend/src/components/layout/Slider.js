import React, { Component } from "react";

class Sliderr extends Component {
    render() {
        return (
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100"
                            src="https://www.bigc.vn/files/c/2024-10-01-2024-21-43-06/c426-09-12-2024-14-42-16/update-11-12-2024-18-16-27/c426-banner-web-1486x692.jpg"
                            height={700}
                            alt="First slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="https://www.bigc.vn/files/c/2024-10-01-2024-21-43-06/bf425-25-11-2024-11-12-03/bf425-banner-web-1486x692.jpg"
                            height={700}
                            alt="Second slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="https://www.bigc.vn/files/omni-banner-31-07-2023-14-47-58/december-04-12-2024-17-00-43/banner-website-1486-x-692.jpg"
                            height={600}
                            alt="Third slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="https://www.bigc.vn/files/omni-banner-31-07-2023-14-47-58/december-04-12-2024-17-00-43/adapt-visual-go-024-banner-website-size-1486x692.png"
                            height={600}
                            alt="Four slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="https://www.bigc.vn/files/omni-banner-31-07-2023-14-47-58/december-04-12-2024-17-00-43/adapt-visual-go-024-banner-website-size-1486x692.png"
                            height={600}
                            alt="Four slide"
                        />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Sliderr;
