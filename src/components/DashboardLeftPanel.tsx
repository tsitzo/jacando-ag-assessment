import React from "react";
import { useFetch } from "../hooks/useFetch";
import { DailyWeatherResponse } from "../types/apiResponse";
import styles from "../css/DashboardLeftPanel.module.scss";
// import dayjs from "dayjs";
import { getWeatherIcon } from "../utils/getWeatherIcon";

const DashboardLeftPanel = () => {
  const URI = `https://api.openweathermap.org/data/2.5/weather?lat=40.633354&lon=14.602745&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  const { response, loading, error } = useFetch<DailyWeatherResponse>(URI);
  const today = new Date();
  return (
    <>
      {loading && <div className={styles.centered}>Loading</div>}
      {!loading && error && <div className={styles.centered}>Error</div>}
      {response && (
        <div className={styles.root}>
          <div className={styles.topRow}>
            <p>IMN</p>
            <i className="fa-solid fa-bars" />
          </div>

          <div className={styles.bottomRow}>
            <div className={styles.infoContainer}>
              <div className={styles.temperatureContainer}>
                <i className={getWeatherIcon(response?.weather[0].id!)} />
                <p>
                  {!response?.main.feels_like || error || loading
                    ? "-"
                    : response.main.feels_like.toFixed()}
                  °C
                </p>
              </div>
              <p className={styles.locationText}>Positano</p>
              <p className={styles.sublocationText}>Amalfi Coast, Italy</p>
            </div>
            <div className={styles.dateContainer}>
              {/* leaving this one here just to show the library I use */}
              {/* <p>{dayjs().format("hh:mm A -  dddd D MMMM, YYYY")}</p> */}
              <p>
                {today.toLocaleDateString("en-GB", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </p>
              <div className={styles.dateSectionsRow}>
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div />
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLeftPanel;
