import { NavLink } from "react-router-dom";

const CarouselAltern = () => {
    return(
        <>
             <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/1034008/pexels-photo-1034008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 user-select-none" alt="..."/>
                        <div className="carousel-caption d-none d-md-block text-white bg-dark bg-opacity-75">
                            <h1 className="fs-1 fw-bold ">404! <br /> Page not found.</h1>
                             <NavLink to={'/'} className="nav-link fs-4 text-decoration-underline">Click here to go back!</NavLink>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/335394/pexels-photo-335394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 user-select-none" alt="..."/>
                        <div className="carousel-caption d-none d-md-block text-white bg-dark bg-opacity-75">
                            <h1 className="fs-1 fw-bold ">404! <br /> Page not found.</h1>
                             <NavLink to={'/'} className="nav-link fs-4 text-decoration-underline">Click here to go back!</NavLink>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 user-select-none" alt="..."/>
                        <div className="carousel-caption d-none d-md-block text-white bg-dark bg-opacity-75">
                            <h1 className="fs-1 fw-bold ">404! <br /> Page not found.</h1>
                             <NavLink to={'/'} className="nav-link fs-4 text-decoration-underline">Click here to go back!</NavLink>
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

export default CarouselAltern