import React from "react";
import "./Quote.css";
import modiSmall from "../../assets/modi2.jpg"; // chhoti image
import modiLarge from "../../assets/modi1.jpg"; // badi image (right side)

const Quote = () => {
  return (
    
    <section className="quote-section">
            <div className="quote1">
                <div className="quote1-left">
                    <p className="quote-en">
                        “I dream of a digital India where <br />
                        cyber security becomes an integral <br />
                        part of our National Security”
                    </p>
                    <p className="quote-hi">
                        "मैं एक डिजिटल दुनिया का सपना देखता हूँ जहाँ साइबर सुरक्षा हमारे 
                        राष्ट्रीय सुरक्षा का एक अभिन्न हिस्सा बन जाए।"
                    </p>
                </div>

                <div className="quote1-right">
                    {/* <img src={modiLarge} alt="" /> */}
                </div>
        </div>

        <div className="quote2">
            <img data-aos="fade-right" data-aos-delay="100" src={modiSmall} alt="" />
            <div className="position-manager"></div>
            <div className="quote2-content"  data-aos="fade-left" data-aos-delay="200">
                <h3>Our Honerable Prime Ministaer Of India</h3>
                <p>" To overcome Cybersecurity threats, we must unite and act together "</p>
            </div>
        </div>
        
    </section>

  );
};

export default Quote;
