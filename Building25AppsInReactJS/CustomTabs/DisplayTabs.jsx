import React, { useState } from "react";
import CustomTabsStyles from "./CustomTabsStyles.module.css"

function DisplayTabs({ tabsContent, onChange }) {
  const [indexTab, setIndexTab] = useState(0);

  function handleTabChange(getIndex) {
    setIndexTab(getIndex);
    onChange(getIndex);
  }
  return (
    <>
      <div className={CustomTabsStyles.wrapper}>
        <div className={CustomTabsStyles.heading}>
          {tabsContent.map((tabItem, index) => (
            <div className={`${CustomTabsStyles.tabItem} ${indexTab === index ? CustomTabsStyles.active : ""}`}  
            onClick={() => handleTabChange(index)} key={tabItem.label}>

              <span className={CustomTabsStyles.label}>{tabItem.label}</span>
            </div>
          ))}
        </div>
        <div className={CustomTabsStyles.content}>
          {tabsContent[indexTab] && tabsContent[indexTab].content}
        </div>
      </div>
    </>
  );
}

export default DisplayTabs  ;
