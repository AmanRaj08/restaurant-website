import React from "react";
import { menu } from "../Data";
import menu1 from "../assets/images/menu-1.png";
import menu2 from "../assets/images/menu-2.png";
import menu3 from "../assets/images/menu-3.png";
import menu4 from "../assets/images/menu-4.png";
import menu5 from "../assets/images/menu-5.png";
import menu6 from "../assets/images/menu-6.png";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>recommendation</span>
        </h1>

        <div className="box-container">
          
            <div className="box">
              <img src={menu1} alt="" />
              <h3>Classic Combo</h3>
              <div className="price">
                Rs399 <span>599</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
            <div className="box">
              <img src={menu2} alt="" />
              <h3>Popcorn & Fries</h3>
              <div className="price">
                Rs159 <span>200</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
            <div className="box">
              <img src={menu3} alt="" />
              <h3>Crispy Chicken</h3>
              <div className="price">
                Rs599 <span>700</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
            <div className="box">
              <img src={menu4} alt="" />
              <h3>Farmhouse Pizza</h3>
              <div className="price">
                Rs150 <span>200</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
            <div className="box">
              <img src={menu5} alt="" />
              <h3>Healthy Combo</h3>
              <div className="price">
                Rs350 <span>500</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
            <div className="box">
              <img src={menu6} alt="" />
              <h3>Affogatos</h3>
              <div className="price">
                Rs150 <span>300</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
