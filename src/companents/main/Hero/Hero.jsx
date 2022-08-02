import "../Hero/Hero.css";

import React, { useEffect } from "react";
import Aos from "aos";
import  "../../../../node_modules/aos/dist/aos.css";

import btnimg from "../../Header/img/btnimg.svg";

const Hero = () => {
  useEffect(() => {
    Aos.init({})
  }, [])
  return (
    <section className="hero-sec">
      <div className="container">
        <div className="hero-inner">
          <h2 className="hero-heading" data-aos="fade-up">
            İşinize uygun <span className="heading-spn">tasarım</span> ve{" "}
            <span className="heading-spn">yazılımlar</span>{" "}
          </h2>
          <p className="text-center hero-text">
            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
            İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım
            hizmetleri sunmaktayız.
          </p>
          <button className="hero-btn">
            Detaylı İncele
            <img className="ms-2 mb-1" src={btnimg} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
