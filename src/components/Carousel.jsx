import { NavLink } from "react-router-dom";

const Carousel = () => {
    return(
        <>
             <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/1122865/pexels-photo-1122865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 user-select-none" alt="..."/>
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75">
                            <h1 className="fs-1 fw-bold ">Are you looking for your country?</h1>
                                <p className="nav-link text-gray fs-4"> Open the NavBar to seach it!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/2017747/pexels-photo-2017747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 user-select-none" alt="..."/>
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75">
                            <h1 className="fs-1 fw-bold">Are you looking for Chilean Universities?</h1>
                             <NavLink to={'/Chile'} className="nav-link text-gray fs-4 text-decoration-underline">Click here to know more about them!</NavLink>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 user-select-none" alt="..."/>
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75">
                            <h1 className="fs-1 fw-bold">These are the Universities of USA</h1>
                             <NavLink to={'/USA'} className="nav-link text-gray fs-4 text-decoration-underline">Click here to know more about them!</NavLink>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/705318/pexels-photo-705318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 user-select-none" alt="..."/>
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75">
                            <h1 className="fs-1 fw-bold">Do you want to know more about Brazilian Universities?</h1>
                             <NavLink to={'/Brazil'} className="nav-link text-gray fs-4 text-decoration-underline">Click here to know more about them!</NavLink>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 user-select-none" alt="..."/>
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75">
                            <h1 className="fs-1 fw-bold">Would you like to know the English Universities?</h1>
                             <NavLink to={'/England'} className="nav-link text-gray fs-4 text-decoration-underline">Click here to know more about them!</NavLink>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
};

export default Carousel
