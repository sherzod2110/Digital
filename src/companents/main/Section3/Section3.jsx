import "../Section3/Section3.css";
import "../../Card/Card";
import Card from "../../Card/Card";

import firstimg from "../Section3/img/card.png";
import firstimg2 from "../Section3/img/card2.png";
import firstimg3 from "../Section3/img/card3.png";
import firstimg4 from "../Section3/img/card4.png";

// import card_img from "../Section3/img/card.png";
// import right from "../Section3/img/right.png";

const Section3 = () => {
  let aryy = [
    {
      img: firstimg,
      text1: "Dijital Pazarlama",
      text2: "Sosyal CRM Nedir? Sosyal CRM Avantajları Nelerdir?",
      text3:
        "Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...",
    },
    {
      img: firstimg2,
      text1: "Dijital Pazarlama",
      text2: "Dijital PR Nedir? Dijital PR Neden Gereklidir?",
      text3:
        "Dijital PR, sosyal medya platformları ve web siteleri üzerinden işletmelerin...",
    },
    {
      img: firstimg3,
      text1: "Kurumsal Kimlik Tasarımı",
      text2: "Dijital Ajans Nedir? Doğru Dijital Ajans Nasıl Seçilir?",
      text3:
        "Bir dijital ajans arama motorları, e ticaret, web sitesi tasarımı gibi birçok alanda hizmet...",
    },
    {
      img: firstimg4,
      text1: "Dijital Pazarlama",
      text2: "Online İtibar Yönetimi Nedir?",
      text3:
        "Online itibar yönetimi, markanızla dijital dünyada ortaya çıkan algıyı profesyonel şekilde yönetmek...",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="sec3-wrapper">
          <p className="sec3-spn text-center">
            Neler <span className="text-primary">Yapıyoruz?</span>
          </p>
          <h3 className="sec3-heading text-center">
            Öğreniyoruz, sizinle paylaşıyoruz.
          </h3>
          <p className="sec3-text">
            Alanında uzman yazar arkadaşlarımızın, bilgi paylaşımı yaptıkları
            yazıları inceleyelim.
          </p>
          <div className="btns-box">
            <button
              className="sec3-btn"
            >
              Hepsini Gör
            </button>
            <button
              className="sec3-btns"
            >
              Web Tasarım
            </button>
            <button
              className="sec3-btns"
            >
              Kurumsal Kimlik Tasarımı
            </button>
            <button
              className="sec3-btns"
            >
              SEO
            </button>
            <button
              className="sec3-btns"
            >
              Dijital Pazarlama
            </button>
          </div>

          <div className="card-box mt-4 d-flex" data-aos="flip-left">
            {aryy.map((item) => {
              return <Card key={item.text1} info={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
