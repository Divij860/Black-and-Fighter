import React, { useState } from 'react';
import "./Products.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Airfryer, Blender, Sandwich,Kettle } from "../assets/index.js"; // Import other product images as needed
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Products = () => {
  const [showMore, setShowMore] = useState({});

  const products = [
    {
      id: 1,
      image: Airfryer,
      title: "Airfryer",
      features: [
        "Removable Non-stick Coating Inner Pot",
        "Cook & Keep Warm Function",
        "Rapid Air Technology",
        "Temperature Control up to 200°C",
        "Easy to Clean Parts"
      ]
    },
    {
      id: 2,
      image: Blender,
      title: "Blender",
      features: [
        "Powerful Motor for Blending",
        "Stainless Steel Blades",
        "Variable Speed Control",
        "Detachable Parts for Easy Cleaning",
        "Compact Design"
      ]
    },
    {
        id: 3,
        image: Sandwich,
        title: "Sandwich-Maker",
        features: [
          "Removable Non-stick Coating Inner Pot",
          "Cook & Keep Warm Function",
          "Rapid Air Technology",
          "Temperature Control up to 200°C",
          "Easy to Clean Parts"
        ]
      },
      {
        id: 4,
        image: Kettle,
        title: "Kettle",
        features: [
          "Removable Non-stick Coating Inner Pot",
          "Cook & Keep Warm Function",
          "Rapid Air Technology",
          "Temperature Control up to 200°C",
          "Easy to Clean Parts"
        ]
      },
      {
        id: 5,
        image: Airfryer,
        title: "Airfryer",
        features: [
          "Removable Non-stick Coating Inner Pot",
          "Cook & Keep Warm Function",
          "Rapid Air Technology",
          "Temperature Control up to 200°C",
          "Easy to Clean Parts"
        ]
      },
      {
        id: 6,
        image: Blender,
        title: "Blender",
        features: [
          "Powerful Motor for Blending",
          "Stainless Steel Blades",
          "Variable Speed Control",
          "Detachable Parts for Easy Cleaning",
          "Compact Design"
        ]
      },
      {
          id: 7,
          image: Sandwich,
          title: "Sandwich-Maker",
          features: [
            "Removable Non-stick Coating Inner Pot",
            "Cook & Keep Warm Function",
            "Rapid Air Technology",
            "Temperature Control up to 200°C",
            "Easy to Clean Parts"
          ]
        },
        {
          id: 8,
          image: Kettle,
          title: "Kettle",
          features: [
            "Removable Non-stick Coating Inner Pot",
            "Cook & Keep Warm Function",
            "Rapid Air Technology",
            "Temperature Control up to 200°C",
            "Easy to Clean Parts"
          ]
        },

    // Add more products as needed
  ];

  const handleToggle = (id) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [id]: !prevShowMore[id],
    }));
  };

  return (
    <div className='product'>
      <div className="heading">PRODUCTS</div>
      <hr />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        pagination={{clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className={`${showMore[product.id] ? "expanded" : ""}`}>
            <div className="slide-top">
              <img className='air' src={product.image} alt={product.title} />
            </div>
            <div className={`slide-bottom ${showMore[product.id] ? "expanded" : ""}`}>
              <div className="description">
                <h2>{product.title}</h2>
                <div className="desc">
                  <ul>
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                    {showMore[product.id] && product.features.slice(2).map((feature, index) => (
                      <li key={index + 2}>{feature}</li>
                    ))}
                  </ul>
                  <div className="toggle-arrow" onClick={() => handleToggle(product.id)}>
                    {showMore[product.id] ? '▲' : '▼'}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
