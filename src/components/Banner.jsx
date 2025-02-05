import { useState, useEffect } from "react";
import img from "../assets/images/banner_img.png";
import btnBg from "../assets/images/ourPcBtn.png";

const images = [img, img, img];

const title = [
  "NVIDIA RTX SUPER",
  "Powerful Gaming PCs",
  "Next-Gen Technology",
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative max-w-full mx-auto overflow-hidden  shadow-lg text-white h-[100vh]">
      <div className="flex transition-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[100vh] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-6 container w-full mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-[60px] font-medium">
                {title[index]}
              </h2>
              <p className="mt-6 text-lg md:text-xl w-[630px] font-medium text-[22px]">
                Новые игровые видеокарты
                <span className="text-[23px]">
                  NVIDIA GeForce RTX 4070 Super, 4070 Ti и 4080
                </span>
                доступны к заказу!
              </p>
              <p className="mt-6 text-lg md:text-xl w-[630px] font-medium text-[22px]">
                Будь среди первых и протестируй новые возможности
              </p>
              <button
                className="w-[189px] min-h-[42px] bg-cover bg-center text-[18px] font-[600] mt-4"
                style={{ backgroundImage: `url(${btnBg})` }}
              >
                Подробнее
              </button>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-[22px]">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-[11px] h-[11px] transition-all ${
                    currentIndex === index ? "bg-pink-500 " : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
