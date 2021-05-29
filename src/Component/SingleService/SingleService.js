import React from 'react';
import './SingleService.css'
import img1 from '../Images/house1.png'
const SingleService = (props) => {
    const { name, description, price, img } = props.service;
    console.log(props.service.name)
    return (
        <div>
            <div class="part">
                <div class="card mb-3" style={{ maxWidth: '500px' }}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={img} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">{description}</p>
                            </div>
                            <div style={{ float: 'inline-start' }}>
                                <h2>{price}</h2>
                                <a href="#" class="btn btn-success">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;