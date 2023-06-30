import { NavLink } from "react-router-dom";

const NavbarAltern = () => {
    return(
        <>
        <div className="sticky-top">
            <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                <div className="bg-dark p-2 text-white bg-opacity-25 ">
                    <h5 className="container text-body-emphasis">Where do you wanna go?</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <NavLink to={'/'} className="nav-link text-white">Home</NavLink>
                            </div>
                            <div className="col">
                                <h5>Fast Search:</h5>
                            </div>
                            <div className="col">
                                <div className="nav-item dropdown">
                                    <a className="nav-link fs-6 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Europe
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to={'/Spain'} className="nav-link text-white">Spain </NavLink></li>
                                        <li><NavLink to={'/England'} className="nav-link text-white">England </NavLink></li>
                                        <li><NavLink to={'/France'} className="nav-link text-white">France </NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="nav-item dropdown">
                                    <a className="nav-link fs-6 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Asia
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to={'/Japan'} className="nav-link text-white">Japan </NavLink></li>
                                        <li><NavLink to={'/China'} className="nav-link text-white">China </NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="nav-item dropdown">
                                    <a className="nav-link fs-6 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        America
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to={'/Chile'} className="nav-link text-white">Chile </NavLink></li>
                                        <li><NavLink to={'/Brazil'} className="nav-link text-white">Brazil </NavLink></li>
                                        <li><NavLink to={'/Argentina'} className="nav-link text-white">Argentina </NavLink></li>
                                        <li><NavLink to={'/USA'} className="nav-link text-white">USA </NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="bg-dark p-2 text-white bg-opacity-25 ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="https://hipolabs.com/static/v4/img/logo.svg" alt="NavImage" width="30" height="24" className="user-select-none"/>
                    </button>
                </div>
            </nav>
        </div>
        </>
    )
};


export default NavbarAltern
