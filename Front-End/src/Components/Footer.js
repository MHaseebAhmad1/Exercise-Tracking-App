import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="page-footer font-small mdb-color pt-4" style={{background:"black"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-12 mb-4">
                            <div className="view overlay z-depth-1-half">
                                <img src="/pics/1.webp" style={{ width: "150px", height: "100px" }} className="img-fluid" alt="" />
                                <a href="/">
                                    <div className="mask rgba-white-light" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4">
                            <div className="view overlay z-depth-1-half">
                                <img src="/pics/2.jpg" style={{ width: "150px", height: "100px" }} className="img-fluid" alt="" />
                                <a href="/">
                                    <div className="mask rgba-white-light" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4">
                            <div className="view overlay z-depth-1-half">
                                <img src="/pics/3.webp" style={{ width: "150px", height: "100px" }} className="img-fluid" alt="" />
                                <a href="/">
                                    <div className="mask rgba-white-light" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4">
                            <div className="view overlay z-depth-1-half">
                                <img src="/pics/4.jpg" style={{ width: "150px", height: "100px" }} className="img-fluid" alt="" />
                                <a href="/">
                                    <div className="mask rgba-white-light" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4">
                            <div className="view overlay z-depth-1-half">
                                <img src="/pics/5.webp" style={{ width: "150px", height: "100px" }} className="img-fluid" alt="" />
                                <a href="/">
                                    <div className="mask rgba-white-light" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4">
                            <div className="view overlay z-depth-1-half">
                                <img src="/pics/6.jpg" style={{ width: "150px", height: "100px" }} className="img-fluid" alt="" />
                                <a href="/">
                                    <div className="mask rgba-white-light" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-white text-center py-3">© 2023 Copyright:
                    <a href="/"> Exercise Tracker App</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer