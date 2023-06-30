import { NavLink } from "react-router-dom";


const Footer = () => {
    return(
        <>
            <footer className="bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <br className="user-select-none" />
                            <img src="https://hipolabs.com/static/v4/img/logo.svg" alt="NavImage" width="70" height="70" className="user-select-none"/>
                            <span className="invisible">----</span>
                            <span><a href="https://hipolabs.com/" className="fs-2 text-white text-decoration-none lead">Hipolabs</a></span>
                            <br className="user-select-none" />
                            <h4 className="fs-4 text-white text-decoration-none lead">University Domains and Names Data List & API</h4>
                            <br className="user-select-none" />
                            <br className="user-select-none" />
                        </div>
                        <div className="col-3 text-white">
                            <br className="user-select-none" />
                            <br className="user-select-none" />
                            <h3>About API</h3>
                            <a href="https://github.com/Hipo/university-domains-list" className="text-white text-decoration-none">API's GitHub Page</a>
                            <br className="user-select-none" />
                            <a href="http://universities.hipolabs.com/search?country=United+States" className="text-white text-decoration-none">API example link</a>
                            <br className="user-select-none" />
                            <br className="user-select-none" />
                        </div>
                        <div className="col-3 text-white">
                            <br className="user-select-none" />
                            <br className="user-select-none" /> 
                            <h3>Made With</h3>
                            <a href="https://code.visualstudio.com/" className="text-white text-decoration-none">Visual Studio Code</a>
                            <br className="user-select-none" />
                            <a href="https://getbootstrap.com/" className="text-white text-decoration-none">Bootstrap</a>
                            <br className="user-select-none" />
                            <a href="https://react.dev/" className="text-white text-decoration-none">ReactJS</a>
                            <br className="user-select-none" />
                            <br className="user-select-none" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer

/*

<div class="container text-center">
    <div class="row align-items-end text-white">
        <div class="col">
            <br />
            <img src="https://cdn.pixabay.com/photo/2017/10/14/15/50/fruit-2850840_1280.png" alt="NavImage" width="50" height="50" className="user-select-none"/>
            <span>Fruityvice</span>
            <br />

        </div>
        <div class="col">
            <br />
            <h4>
                About API
            </h4>
            <p>
                <a href="https://www.fruityvice.com/">API's official page.</a>
            </p>
        </div>
        <div class="col">
        One of three columns
        </div>
        <div class="col">
        One of three columns
        </div>
    </div>
</div>
*/