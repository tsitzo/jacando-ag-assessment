import React from "react";
import { useFetch } from "../hooks/useFetch";
import { SevenDaysWeatherResponse } from "../types/apiResponse";
import styles from "../css/DashboardRightPanel.module.scss";
// import dayjs from "dayjs";
import WeeklyForecastIcon from "./WeeklyForecastIcon";
import ChartPanel from "./ChartPanel";

const DashboardRightPanel = () => {
  const URI = `https://api.openweathermap.org/data/2.5/onecall?lat=40.633354&lon=14.602745&exclude=current,hourly,alerts,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  const { response, error, loading } = useFetch<SevenDaysWeatherResponse>(URI);
  const today = new Date();

  return (
    <>
      {loading && <div className={styles.centered}>Loading</div>}
      {!loading && error && <div className={styles.centered}>Error</div>}
      {response && (
        <div className={styles.root}>
          <div className={styles.topRow}>
            <p>Regional Weather Forecast</p>
            {/* leaving this one here just to show the library I use */}
            {/* <p>{dayjs().format("D MMM YYYY")}</p> */}
            <p>
              {today.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>

          <ChartPanel daily={response?.daily[0]!} />

          <div className={styles.weeklyRowList}>
            {response.daily.map((el, i) => (
              <WeeklyForecastIcon daily={el} />
            ))}
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.buttonLeft}>
              <i className="fa-solid fa-arrow-left" />
              <p>PREVIOUS</p>
            </div>
            <div className={styles.buttonRight}>
              <p>NEXT</p>
              <i className="fa-solid fa-arrow-right" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardRightPanel;
