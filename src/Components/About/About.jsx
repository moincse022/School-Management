
import img1 from '../../assets/Image/who-we-are.png'
const About = () => {
    return (
        <section>
              <div className="md:flex  justify-around py-16 bg-[#e9ecef]">
                  <div className="w-[530px] h-auto">
                    <h2 className='text-3xl font-bold text-center py-4'>স্কুল ম্যানেজমেন্ট সফটওয়্যার</h2>
                    <p className='text-justify p-4 w-96 ml-8 lg:w-full'>স্কুল ম্যানেজমেন্ট সফটওয়্যার এমন একটি প্রক্রিয়া যেখানে একটি স্কুলের জন্য সকল ধরণের কার্যক্রম সময়ের মধ্যে, সহজ, নিভুল এবং কার্যকরী সমাধান। আমরা সাধারণত দেখি একটি শিক্ষা প্রতিষ্ঠান তার নিয়মিত কাজ গুলো সম্পাদনের জন্য ভিন্ন কর্মী নিয়োগ করেন যারা পুরো স্কুলের কাজগুলো হাতেকলমে করেন, ভর্তি গ্রহণ থেকে শুরু করে বেতন দেয়া পর্যন্ত। এছাড়া শিক্ষকও সকল কাজ বাস্তবায়ন এর জন্য ম্যানুয়েল পদ্ধতি ব্যবহার করেন। <br/><br/>

যার ফলে একটি স্কুলের মোট শিক্ষার্থীর সংখ্যা অনুসারে বছরে প্রায় ২০-৪০ হাজারেরও বেশি অর্থ শুধু কাগজ কিনতে হয়, যা পরিচালনা কার্যক্রমে ব্যবহৃত হয়। তাছাড়া কর্মী বেতন এবং সংরক্ষণ করা থেকে শুরু করে নিভুল কাজ সম্পাদন করা প্রায় অসম্ভব, এসবকিছু পর্যবেক্ষণের করাও ভোগান্তির। কিন্তু এই স্কুল ম্যানেজমেন্ট সফটওয়্যার এই সকল কাজ এক মুহূর্তে নিভুল সমাধান হতে পারে এবং সকল তথ্য সংগ্রহ করা এবং বার্ষিক বা মাসিক রিপোর্টও তৈরী করে দিতে পারে। এমনি এই সফটওয়্যার ম্যানুয়াল পদ্ধতি থেকে প্রায় ৯০ ভাগ সাশ্রয়ী এবং ঝামেলা মুক্ত। উন্নত বিশ্বগুলোতে শিক্ষা প্রতিষ্ঠান তাদের শিক্ষার মান, নিয়মিত কার্যক্রম এবং সংগ্রহ ও নিয়ন্ত্রণ এর জন্য ম্যানেজমেন্ট সফটওয়্যার ব্যবহার করে যা অসম সক্ষমতা এবং জ্ঞানের উৎসগুলোকে একীভূত করার মাধ্যমে দক্ষ, সমন্বয় এবং স্কুল কার্য সম্পাদনের পরিকল্পনা দেয়। যা শিক্ষা ব্যবস্থাকে আরো সহজ করেছে।<br/><br/>

সাম্প্রতিক বছরগুলিতে এই সিস্টেম ক্রমবর্ধমান জনপ্রিয় হয়ে উঠেছে কারণ- অভিভাবক, শিক্ষক এবং স্কুল কার্যক্রম এর জন্য বিভিন্ন সুবিধা প্রদান করে যার ফলে তারা সার্বক্ষণিক শিক্ষার্থীদের পর্যবেক্ষণ করতে পারছে হাতে থাকা মোবাইল ফোনের মাধ্যমেই ফলে সারাক্ষন ল্যাপটপ বা কম্পিউটার এর সামনে বসে থাকতে হয় না, যা শিক্ষার্থীদের পড়াশোনার ম্যান ও মনোবল বিকশিত করতেও সাহায্য করে।

এই সফটওয়্যার ডেটা ট্র্যাক করার জন্য একটি সেন্ট্রাল সার্ভার সিস্টেম প্রদান করে, যার ফলে পরিচালকগণ কর্মচারীদের অবস্থানকে আরও ভালভাবে পর্যবেক্ষণ করতে পারেন এবং প্রয়োজনে পরিবর্তন করতে পারেন।</p>
                  </div>
                  <div className="w-96 ml-8 md:w-[550px] h-[350px]">
                  <img src={img1} alt="" className="" />
                  </div>
              </div>
        </section>
    );
};

export default About;