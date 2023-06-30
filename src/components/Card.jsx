import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const Card = (props) => {
    return(
        <>
            <div className="card" style={{width: "250px", height: "300px"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <hr />
                    <h6 className="card-subtitle mb-2 text-body-secondary">Clasification</h6>
                    <p className="card-text">
                        Country: {props.country}<br />
                        Web Page: <a target="_blank" href={props.web_pages}>
                            {props.web_pages}<br />
                            </a>
                    </p>
                </div>
            </div>
        </>
    )
};

Card.propTypes = {
    country: PropTypes.string,
    name: PropTypes.string,
    state_province: PropTypes.string,
    domains: PropTypes.string,
    web_pages: PropTypes.array,
    alpha_two_code: PropTypes.string,
}

export default Card


/*
{"country": "Chile", "name": 
"Universidad T\u00e9cnica Federico Santa Mar\u00eda", 
"state-province": null, 
"domains": ["usm.cl"], 
"alpha_two_code": "CL", 
"web_pages": ["https://usm.cl"]}


<div className="card" style={{width: "250px", height: "300px"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <hr />
                    <h6 className="card-subtitle mb-2 text-body-secondary">Clasification</h6>
                    <p className="card-text">
                        Country: {props.country}<br />
                        Web Page: <a target="_blank" href={props.web_pages}>
                            {props.web_pages}<br />
                            </a>
                    </p>
                </div>
            </div>
*/