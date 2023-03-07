import React from "react";
import "./Menu.css";
const Menu = () => {
  return (
    <>
      <div className="menu_cont">
        <div className="title_name" id="Menu">
          Menu
        </div>

        <div className="container_mi">
          <div className="english_item">
            <h2 className="item_title">चिकन मेन्यू</h2>
            <h5 className="item_name"> चिकन बिर्याणी - रु.150</h5>
            <h5 className="item_name"> चिकन लॉलीपॉप - रु.180 </h5>
            <h5 className="item_name"> चिकन चिल्ली - रु.200</h5>
            <h5 className="item_name"> चिकन मसाला - रु. 180</h5>
            <h5 className="item_name"> चिकन उख्खर- रु.140</h5>
            <h5 className="item_name"> चिकन फ्राय - रु. 140</h5>
            <h5 className="item_name"> चिकन हंडी - रु. 250/450</h5>
            <h5 className="item_name"> स्पे.चिकन थाळी - रु.250</h5>
            <h5 className="item_name"> चिकन मालवणी- रु.350/600</h5>
            <h5 className="item_name"> चिकन दालचा राईस- रु.150</h5>
          </div>
          <div className="marathi_item">
            <h2 className="item_title"> मटन मेन्यू</h2>
            <h5 className="item_name"> मटन बिर्याणी - रु.250</h5>
            <h5 className="item_name"> मटन मसाला- रु.230</h5>
            <h5 className="item_name"> मटन उख्खर- रु. 230</h5>
            <h5 className="item_name"> मटण हंडी - रु.350/600</h5>
            <h5 className="item_name"> स्पेशल मटन थाळी- रु.350</h5>
            <h5 className="item_name"> मटन मालवणी - रु.400</h5>
            <h5 className="item_name"> मटन दालचा राईस - रु. 250</h5>
          </div>
        </div>
        <div className="container_mi">
          <div className="english_item">
            <h2 className="item_title"> अंडा मेन्यू</h2>
            <h5 className="item_name"> अंडा बिर्याणी - रु.150</h5>
            <h5 className="item_name"> अंडा करी - रु.130</h5>
            <h5 className="item_name"> अंडा मसाला - रु. 130</h5>
            <h5 className="item_name"> अंडा फ्राय - रु. 40</h5>
            <h5 className="item_name"> अंडा थाळी - रु. 170</h5>
            <h5 className="item_name"> बॉईल अंडा - रु.30</h5>
          </div>
          <div className="marathi_item">
            <h2 className="item_title"> चायनीज मेन्यू </h2>
            <h5 className="item_name">  चिकन शेजवान राईस - रु.150</h5>
            <h5 className="item_name"> चिकन शेजवान नूडल्स - रु.150</h5>
          </div>
        </div>
        <div className="container_mi">
          <div className="marathi_item">
            <h2 className="item_title"> पनीर मेन्यू</h2>
            <h5 className="item_name"> पनीर बिर्याणी - रु.150</h5>
            <h5 className="item_name"> पनीर मसाला - रु.150</h5>
            <h5 className="item_name"> काजू पनीर मसाला - रु.170</h5>
            <h5 className="item_name"> काजू मसाला रु. 170</h5>
            <h5 className="item_name"> मसाला पापड- - रु. 20</h5>
            <h5 className="item_name"> जिरा राईस- - रु. 50/70</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
