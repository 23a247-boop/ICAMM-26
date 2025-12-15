import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./accordion.css";

interface AccordionItem {
  title: string;
  images: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
      { breakpoint: 320, settings: { slidesToShow: 1 } },
    ],
  };

  const onItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderContent = (item: AccordionItem, index: number) => {
    const isActive = activeIndex === index;

    return (
      <div key={index} className="accordion-item">
        <div className="accordion-header" onClick={() => onItemClick(index)}>
          {item.title}
        </div>

        <div className={`accordion-content ${isActive ? "active" : ""}`}>
          <Slider {...settings}>
            {item.images.map((image, i) => (
              <div key={i} className="past">
                <img
                  src={image}
                  alt={`Image ${i + 1}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1 className='acco-title'>PREVIOUS EDITIONS</h1>
      <div id='past_conference' className="accordion">
        {items.map((item: AccordionItem, index: number) => renderContent(item, index))}
      </div>
    </>
  );
};

const Accord = () => {
  const accordionItems = [
    {
      title: 'ICAMM 2025',
      images: ['/src/images/25_01.jpg','/src/images/25_02.jpg','/src/images/25_03.jpg','/src/images/25_04.jpg','/src/images/25_05.jpg','/src/images/25_06.jpg','/src/images/25_07.jpg','/src/images/25_08.jpg','/src/images/25_09.jpg','/src/images/25_10.jpg','/src/images/25_11.jpg','/src/images/25_12.jpg','/src/images/25_13.jpg','/src/images/25_14.jpg'],
    },
    {
      title: 'ICAMM 2023',
      images: ['/src/images/23_01.jpg','/src/images/23_02.jpg','/src/images/23_03.jpeg','/src/images/23_04.jpg'],
    },
    {
      title: 'ICAMM 2021',
      images: ['/src/images/21_01.png','/src/images/21_02.jpeg','/src/images/21_03.jpeg','/src/images/21_04.jpeg','/src/images/21_05.jpeg'],
    },
    {
      title: 'ICAMM 2018',
      images: ['/src/images/18_01.jpg','/src/images/18_02.jpg','/src/images/18_03.jpg','/src/images/18_04.jpg','/src/images/18_05.jpg','/src/images/18_06.jpg'],
    },
    {
      title: 'ICAMM 2016',
      images: ['/src/images/16_01.jpg','/src/images/16_02.jpg','/src/images/16_03.jpg','/src/images/16_04.jpg','/src/images/16_05.jpg','/src/images/16_06.jpg'],
    },
    {
      title: 'ICAMM 2014',
      images: ['/src/images/14_01.jpg','/src/images/14_02.jpg','/src/images/14_03.jpg','/src/images/14_04.jpg','/src/images/14_05.jpg','/src/images/14_06.jpg'],
    },
  ];

  return (
    <div className='acc-container'>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default Accord;