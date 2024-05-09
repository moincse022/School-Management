import React from 'react';

const Card = ({item}) => {
    console.log(item)
    const {image, title, description} = item;
    return (
        <>
           <div className="w-[341px] py-4">
              <img src={image} alt="" />
              <h2 className=' font-bold'>{title}</h2>
              <p>{description}</p>
              <p className='text-[#40bfb4] font-bold'>আরো পড়ুন</p>
            </div>  
        </>
    );
};

export default Card;