
import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import butcher from "../frontPage/images/butcher.jpeg";
import florist from "../frontPage/images/florist.jpg";
import bakeries from "../frontPage/images/bakeries.jpeg";
import hardware from "../frontPage/images/hardware.jpg"
import farmers from "../frontPage/images/farmers.jpg"
import "../../styles/businesses.css";



const CarouselPage = () => {
    return (
        <MDBContainer >
            <MDBCarousel
                activeItem={1}
                length={5}
                showControls={true}
                showIndicators={true}
                className="z-depth-1 carouselcontainer"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView className='image-container'>
                            <img
                                className="d-block w-100 image-carousel"
                                src={hardware}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Hardware</h3>
                            <p>Shop</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100 image-carousel"
                                src={butcher}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Butcher</h3>
                            <p>Shop</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100 image-carousel"
                                src={florist}
                                alt="Second slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Florist</h3>
                            <p>Shop</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <img
                                className="d-block w-100 image-carousel"
                                src={bakeries}
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Bakeries</h3>
                            <p>Shop</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="5">
                        <MDBView>
                            <img
                                className="d-block w-100 image-carousel"
                                src={farmers}
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Local</h3>
                            <p>Markets</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default CarouselPage;










