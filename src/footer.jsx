// Footer.jsx

import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Əlaqə</h3>
          <ul>
            <li>Telefon: 050-694-1206</li>
            <li>Email: tbbooks@gmail.com</li>
            <li>Adres: Adres: Naxçıvan MR , Məmməd Araz,23</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Xidmətlər</h3>
          <ul>
            <li>Endirimlər</li>
            <li>Ən Çox Satılanlar</li>
            <li>Yeni Gələnlər</li>
            <li>Təklif olunanlar</li>
            <li>Məşhur Kitablar</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Haqqımızda</h3>
          <p>TB BOOKS kitabsevərlərə sevimli kitablarını təklif etməyə çalışan e-ticarət platformasıdır.</p>
          <p>Məqsədimiz kitabsevərlərin kitab oxumaq vərdişini təşviq etmək və ehtiyaclarını ödəməkdir.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TB BOOKS. Bütün hüquqlar qorunur.</p>
      </div>
    </footer>
  );
}

export default Footer;

