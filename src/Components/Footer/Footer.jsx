import { FaPhoneAlt } from 'react-icons/fa';
import img from '../../assets/Image/edufy-logo.svg'
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from 'react-icons/io5';
import { SiMinutemailer } from 'react-icons/si';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 bg-gradient-to-r from-[#6f42c1] to-[#0dcaf0] text-white ">
        <nav className='w-[420px]'>
          <img src={img} alt="" className="w-40 "/>
          {/* <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a> */}
         
          <p className="">Edufy, এমন একটি সফ্টওয়্যার যা একাডেমী বা শিক্ষা প্রতিষ্ঠানগুলোকে তাদের শিক্ষক, শিক্ষার্থী এবং প্রতিষ্ঠান পরিচালনা করতে সাহায্য করে। সর্বত্র শিক্ষার্থী ও স্কুলগুলোর চাহিদা পূরণ করার জন্য আমাদের কাছে বিস্তৃত পণ্য এবং পরিষেবা রয়েছে। ভর্তি কার্যক্রম থাকে শুরু করে শিক্ষার্থীদের উপস্থিতি নেয়া, ট্র্যাক রাখা, ক্লাস পরিচালনা করা, বাড়ির কাজ, পরীক্ষা পরিচালনা সহ প্রাতিষ্ঠানিক কার্যক্রম পরিচালনার সকল দিক, শিক্ষক ও কর্মচারীদের পর্যবেক্ষণ এবং রিপোর্ট তৈরী সহ আরও অনেক কিছু করা যায়।</p>
        <p className="py-4">শিক্ষা প্রতিষ্ঠানগুলিকে তাদের কর্মকান্ড ডিজিটাল এবং আরও কার্যকরভাবে চালাতে প্রতিনিয়ত সাহায্য করছি, Edufy সাশ্রয়ী মূল্যে ও নির্ভরযোগ্য শিক্ষা ব্যবস্থাপনার একটি সহজ সমাধান।</p>
        </nav> 
        <nav>
          <h6 className=" text-xl font-bold">কুইক লিঙ্ক</h6> 
          <a className="link link-hover">Edufy সম্পর্কে</a>
          <a className="link link-hover">বৈশিষ্ট্য</a>
          <a className="link link-hover">ব্লগ / কেস স্টাডি</a>
         
        </nav> 
        <nav>
          <h6 className="text-xl font-bold">প্রতিষ্ঠান</h6> 
          <a className="link link-hover">কোম্পানী সম্পর্কে</a>
          <a className="link link-hover">পণ্য</a>
          <a className="link link-hover">সেবা</a>
          <a className="link link-hover">যোগাযোগ করুন</a>
          <a className="link link-hover">পার্টনার্স</a>
        </nav> 
        <form>
          <h6 className="text-xl font-bold">আমাদের সাথে যোগাযোগ করুন</h6> 
          <div className="flex gap-4 items-center">
             <MdOutlineEmail className='w-6 h-6'/>
             <p className='text-xl'>info@edufy.com</p>
          </div>
          <div className="flex gap-4 items-center">
             <FaPhoneAlt  className='w-6 h-6'/>
             <p className=''>+880 1894-430505, +880 1894- <br/>430504, +880 1730-797262, +880<br/> 0189-4430510</p>
          </div>
          <div className="flex gap-4 items-center">
             <IoLocationSharp className='w-6 h-6'/>
             <p className=''>নাভানা লা শাতেউ দে হুসেন, ফ্ল্যাট #বি৪,<br/> বাড়ি #71, রোড #27, গুলশান-01,<br/> ঢাকা-1212</p>
          </div>
          <hr/>
          <fieldset className="form-control w-80">
                
            <div className="relative">
              <input type="text" placeholder="Enter your email address" className="input input-bordered  rounded-xl w-72 "/> 
             <div className="w-10 h-10 bg-gray-600 absolute top-1 right-10  rounded-full flex items-center justify-center hover:bg-red-700">
             <SiMinutemailer className='w-6  h-8  text-white '/>
             </div>
            </div>
          </fieldset>
        </form>
      </footer>
    );
};

export default Footer;