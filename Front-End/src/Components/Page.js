import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
function Page() {
    return (
        <div>
            <Header />
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={4} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={5} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 img" src="/pics/b.webp" alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Playing Football</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img" src="/pics/c.jpg" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Yoga</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img" src="/pics/d.jpg" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Weight Lifting</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img" src="/pics/e.jpg" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Running</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img" src="/pics/g.webp" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Swimming</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img" src="/pics/h.webp" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Hiking</h5>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <Footer />
        </div>
    );
}

export default Page;