import React, { FC, useState } from "react";
import { Daily } from "../types/apiResponse";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import Chart from "./Chart";

import styles from "../css/ChartPanel.module.scss";

interface IChartPanelProps {
  daily: Daily;
}

const ChartPanel: FC<IChartPanelProps> = ({ daily }) => {
  const [activeTab, setActiveTab] = useState("Temps");
  const tabs = ["Temps", "Precipitation", "Wind"];
  return (
    <div className={styles.root}>
      <div className={styles.rightPanelTabs}>
        {tabs.map((el, i) => (
          <div
            key={i}
            className={styles.tab}
            onClick={() => {
              setActiveTab(el);
            }}
          >
            <p
              className={
                el === activeTab ? styles.activeText : styles.inactiveText
              }
            >
              {el}
            </p>
            <div
              className={el === activeTab ? styles.active : styles.inactive}
            />
          </div>
        ))}
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.row}>
          <p>Positano</p>
          <i className="fa-solid fa-bars" />
        </div>

        <div className={styles.temperatureRow}>
          <i className={getWeatherIcon(daily.weather[0].id)} />
          <p>
            {daily.temp.min.toFixed()}°-{daily.temp.max.toFixed()}°
          </p>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default ChartPanel;
