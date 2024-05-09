import img1 from '../assets/Image/about-img.png'

const Hero = () => {
    return (
    <>
    <div className=" mt-8 bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="md:flex text-center justify-around items-center py-16">
        <div className="w-[445px] h-[235px]">
           <h2 className='text-3xl text-white py-4 font-bold'>Edufy সম্পর্কে</h2>
           <p className=' text-justify text-white mx-4 ml-8'>আমাদের চাই আপনার স্কুলের ডিজিটালাইজেশনের সঙ্গী হতে, প্রতিযোগিতার সময়ে যেন আপনি পিছিনে না পড়েন তার সহযোগিতা করতে। আপনাকে যেন ভিন্ন ভিন্ন কাজ এর জন্য আলাদা ভাবে কোথাও যেতে না হয় এবং আপনার সকল ধরণের চাহিদাগুলো পূরণ যেন এক ছাদের নিচে করতে পারেন। স্কুলগুলোকে ডিজিটালাইজ করার জন্য আমরা প্রতি নিয়ত কাজ করে যাচ্ছি, পরিবর্তন নিয়ে আসাই আমাদের মূল এবং প্রথম লক্ষ্য। এখন সময় এক সাথে মাথা উঁচু করে দাঁড়াবার।</p>
        </div>
        <div className="w-[550px] h-[350px] mt-16">
           
                <img src={img1} alt="" className="w-[400px] ml-8 h-[350px] md:w-full" />
               
             
        </div>
    </div>
    </div>
        </>
    );
};

export default Hero;