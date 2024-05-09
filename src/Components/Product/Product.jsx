import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import item from "../Product/Data";
// import required modules
import { Pagination } from "swiper/modules";

const Product = () => {
  console.log(item);
  return (
    <div className="mt-8  font-sans py-16 mx-16">
      <h2 className="text-2xl font-bold mt-8">আমাদের পণ্যসমূহ</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {item?.map((cata, index) => (
          <SwiperSlide key={index}>
            <div className=" bottom-4  bg-base-100 shadow-xl  ">
              <figure>
                <img src={cata.image} alt="Shoes" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title font-bold">{cata.title}</h2>
                <p className="text-justify">{cata.description}</p>
              <div className="text-left rounded-xl">
              <button className="btn btn-success">আরো পড়ুন</button>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
