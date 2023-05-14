import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('/public/service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center space-y-4'>
                <h4 className='text-orange-500 font-bold text-2xl'>Service</h4>
                <h1 className='text-6xl font-bold'>Our Service Area</h1>
                <p className='text-gray-700'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap=6'>
                
                {
                   services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)     
                }
            </div>
        </div>
    );
};

export default Service;