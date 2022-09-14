import React, { useState, useEffect } from "react";
// import Data from '../Data/Data'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Styles from "../styles/SliderAudio.module.css";
// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import { musics } from "../Data/Data";

export default function App() {
  const fetchAllMusics = async () => {
    const res = await fetch("http://localhost:3000/api/music");
    const AllMusics = await res.json();

    SetAllMusic(AllMusics);
  };

  useEffect(() => {
    fetchAllMusics();
  }, []);

  const [allMusic, SetAllMusic] = useState([]);

  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={Styles.swiper}
      >
        {allMusic.map((item) => (
          <SwiperSlide key={item.id} className={Styles.swiperSlide}>
            {/* <Image
                src = {item.img}
                alt = {item.title}
                layout = "fill"
            /> */}
            <div className={Styles.title}>
              <h2 key={item.id}>{item.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// {allMusic.map((music) => (
//     <SwiperSlide key={music.id}>
//       <Image
//           // src="http://placeimg.com/640/640/any"
//       //   src={music.img}
//         alt={music.title}
//         layout="fill"
//       />
//       <div className="title">
//         <h2 className="h3" data-id={music.id}>
//           {music.title}
//         </h2>
//       </div>
//     </SwiperSlide>
//   ))}
