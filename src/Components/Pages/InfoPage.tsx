import "./InfoPage.css";
import React, { useEffect, useState } from "react";

const InfoPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const targetDate: any = new Date("2025-08-09T00:00:00");

    const updateCountdown = () => {
      const now: any = new Date();
      const diff = targetDate - now;

      const totalMinutes = Math.floor(diff / (1000 * 60));
      const totalHours = Math.floor(diff / (1000 * 60 * 60));
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

      const days = totalDays;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;

      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown(); // initial call
    const timer = setInterval(updateCountdown, 1000 * 60); // update every minute

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div className="book-page">
      <div className="info-container">
        <div className="notice-content">
          <h6 className="save-the-date">Save the Date</h6>
          <div className="invite-date">
            <div className="invite-day">SABADO</div>
            <div className="invite-number">09</div>
            <div className="invite-month-year">AGOSTO</div>
          </div>

          <div className="invite-details">
            <div className="invite-section">
              <div className="section-title">Dirección:</div>
              <div>XXXXXXXXX XX</div>
              <div>XXX XXXXXXX XXX XXXX</div>
              <div>XX XXXXX</div>
            </div>

            <div className="invite-section">
              <div className="section-title">Horario:</div>
              <div>Recepción: 7:00PM</div>
              <div>Cena: 8:30PM</div>
            </div>
          </div>

          <div className="countdown-title">Solo falta:</div>
          <div className="countdown-box">
            <div className="countdown-item">
              <div className="countdown-circle">
                <div className="countdown-number">{timeLeft.days}</div>
              </div>
              <div className="countdown-label">DÍAS</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-circle">
                <div className="countdown-number">{timeLeft.hours}</div>
              </div>
              <div className="countdown-label">HORAS</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-circle">
                <div className="countdown-number">{timeLeft.minutes}</div>
              </div>
              <div className="countdown-label">MINUTOS</div>
            </div>
          </div>
          <p className="farewell">
            Su presencia es el mejor regalo que podemos recibir.
          </p>
          <p className="closing-text">¡Te esperamos!</p>
          {/* <p className="vestimenta-message">Vestimenta formal</p> */}
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
