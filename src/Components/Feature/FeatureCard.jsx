import React from 'react';
import data from '../Feature/data'
import Card from './Card';
const FeatureCard = () => {
    console.log(data)
    return (
        <>
        <div className="">
            <h2 className='text-center text-3xl font-bold mt-8'>কেন Edufy?</h2>
            <p className='text-center py-4'>Edufy স্কুল ম্যানেজমেন্ট সিস্টেম ব্যবহার আপনার স্কুল পরিচালনার প্রয়োজনীয়তাগুলিকে <br/> সহজতর করবে, যা সমস্ত শিক্ষার্থীদের জন্য একটি নিরাপদ, দক্ষ ও ডিজিটালাইজড প্রক্রিয়ায় <br/> শিক্ষা প্রদানের সুযোগ করে দেয়।</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 mx-16'>
            {
                data?.map((item) =>(
                 <Card item={item}/>
                ))
            }
        </div>
        </>
    );
};

export default FeatureCard;