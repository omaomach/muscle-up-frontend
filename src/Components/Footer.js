import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="contact">
      <footer>
        <div className="footer">
          <div className="summary">
            <h2>
              <a href="" className="a-logo">
                muscleUp
              </a>
            </h2>
            <p>
              At muscleUp, we will provide you with a combination of fitness and
              service to help you reach your fitness goals. We have top notch
              trainers who will challenge you while providing individualized
              attention, yoga and meditation classes, kickboxing and martial
              arts classes, and personal training.
            </p>
          </div>
        </div>
        <div className="Company">
          <h2>Links</h2>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Trainers</li>
            <li id="contact">Contact</li>
          </ul>
        </div>
        <div className="Our-focus">
          <h2 >
             Contact
          </h2>
          <ul>
            <li>
              <a href="https://github.com/lilianwangechi" target="_blank" className="git-link">
                Lilian Wangechi
              </a>
            </li>
            <li>
              <a href="https://github.com/Muthiira" target="_blank" className="git-link">
                Caleb Muthiira
              </a>
            </li>
           

            <li>
              <a href="https://github.com/NdanuGrace" target="_blank" className="git-link">
                Grace Kyalo
              </a>
            </li>
            <li>
              <a href="https://github.com/Masai11" target="_blank" className="git-link">
                Roy Masai
              </a>
            </li>
            <li>
              <a href="https://github.com/omaomach" target="_blank" className="git-link">
                Joash Omao
              </a>
            </li>
            
          </ul>
        </div>
        <div className="Company">
          <h2>Others</h2>
          <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
