import dayjs from "dayjs";
import React, { FC } from "react";
import { Daily } from "../types/apiResponse";
import { getWeatherIcon } from "../utils/getWeatherIcon";

import styles from "../css/WeeklyForecastIcon.module.scss";

interface IWeeklyForecastIconprops {
  daily: Daily;
}

const WeeklyForecastIcon: FC<IWeeklyForecastIconprops> = ({ daily }) => {
  const date = new Date(daily.dt * 1000);
  return (
    <div className={styles.root}>
      {/* <p className={styles.iconDayName}>{dayjs.unix(daily.dt).format("ddd")}</p> */}
      <p className={styles.iconDayName}>
        {date.toLocaleDateString("en-US", { weekday: "short" })}
      </p>
      <i className={getWeatherIcon(daily.weather[0].id!)} />
      <p className={styles.tempRangeText}>
        {daily.temp.min.toFixed()}°-{daily.temp.max.toFixed()}°
      </p>
    </div>
  );
};

export default WeeklyForecastIcon;
