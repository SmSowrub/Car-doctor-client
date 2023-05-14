import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, price, title } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-orange-500 font-bold'>Price : {price}</p>
                
            </div>
        </div>
    );
};

export default ServiceCard;