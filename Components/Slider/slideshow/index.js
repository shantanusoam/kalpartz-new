import { React, useEffect, useState, useRef } from 'react';
import useMediaQuery from '../../../Hooks/CustomMediaQuery';
import { useHover } from '../../../Hooks/Hover';

// import { TabComponent } from '../../TabComponent';

// import NewsShowcase from '../../NewsShowcase';
// const colors = [
//   '#0088FE',
//   '#00C49F',
//   '#FFBB28',
//   '#0088FE',
//   '#00C49F',
//   '#FFBB28',
//   '#0088FE',
//   '#00C49F',
//   '#FFBB28',
// ];

const delay = 1500;
export const Slideshow = ({
  data,
  smallSlider = false,
  heading = 'Brands We Offer',
  singleSlider = false,
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [slides, setStateSlides] = useState(data);
  const [index, setIndex] = useState(0);
  const [ended, setended] = useState(false);
  const timeoutRef = useRef(null);
  const [hoverRef, isHovered] = useHover();
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  console.log(`small slider ${smallSlider}`);
  useEffect(() => {
    resetTimeout();
    // if (index === slides.length) {

    // }
    if (!isHovered) {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === slides.length - (isDesktop ? 4 : 1)
              ? 0
              : prevIndex + 1
          ),
        delay
      );
      return () => {
        resetTimeout();
      };
    }
  }, [index, isHovered, slides, smallSlider]);
  useEffect(() => {
    setStateSlides(data);
    setIndex(0);
  }, [data]);
  // useEffect(() => {
  //   const slidesWithClones = [...slides];
  //   slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
  //   slidesWithClones.push(slidesWithClones[1]);
  //   setStateSlides(slidesWithClones);
  // }, []);

  return (
    <>
      {heading ? (
        <div
          className={`text-36px font-semibold text-Heading flex justify-center items-center ${
            smallSlider ? 'pb-4' : 'pb-16 mt-16 '
          }  `}
        >
          {smallSlider ? null : <h1>{heading}</h1>}
        </div>
      ) : null}

      {/* <TabComponent></TabComponent> */}
      <div
        className=" slideshow    snap-x flex justify-center items-center overflow-auto"
        ref={hoverRef}
      >
        <div
          className="slideshowSlider  transition ease-linear delay-75 mb-16 "
          style={{
            transform: `translate3d(${
              -index * (!isDesktop || singleSlider ? 100 : 25)
            }%, 0, 0)`,
          }}
        >
          {slides.map((brand, index) => (
            <div
              className={`${
                smallSlider
                  ? 'slide_small lg:grayscale-1    hover:scale-75 `'
                  : 'slide lg:grayscale-0 grayscale-0    hover:scale-110 '
              }  ${
                singleSlider ? 'w-50vw' : 'w-1/4'
              }    hover:grayscale-0   transition-all flex items-center content-center justify-center `}
              key={index}
              // style={{ backgroundImage: `url(${brand.imageurl})` }}
            >
              {singleSlider ? (
                <NewsShowcase />
              ) : (
                <img
                  src={brand.imageurl}
                  // style={{
                  //   border: '1px solid #ddd',
                  //   margin: '0rem 1rem',
                  // }}
                  className={`${
                    smallSlider ? 'p-0' : 'p-0'
                  }     self-center slide justify-self-center justify-items-center border `}
                />
              )}
            </div>
          ))}
        </div>

        {/* <div className="slideshowDots">
          {slides.map((_, idx) => (
            <div
              key={idx / 4}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx / 4);
              }}
            ></div>
          ))}
        </div> */}
      </div>
    </>
  );
};

// flex space-x-5 overflow-x-auto snap-x
// w-80 flex-shrink-0 snap-center h-48 bg-gray-800
