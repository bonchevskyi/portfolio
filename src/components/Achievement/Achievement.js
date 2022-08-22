import React, { useContext } from "react";

import AchievementCard from "./AchievementCard";
import { ThemeContext } from "../../contexts/ThemeContext";
import { achievementData } from "../../data/achievementData";
import { AchievementMain, Body, Card, Cards } from "./Achievement.styled";

function Achievement() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {achievementData.achievements.length > 0 && (
        <AchievementMain
          id="achievement"
          style={{ backgroundColor: theme.secondary }}
        >
          <Body>
            <h1 style={{ color: theme.primary }}>Achievements</h1>
            <h4 style={{ color: theme.tertiary }}>{achievementData.bio}</h4>
          </Body>
          <Cards>
            {achievementData.achievements.map((achieve) => (
              <AchievementCard
                key={achieve.id}
                id={achieve.id}
                title={achieve.title}
                details={achieve.details}
                date={achieve.date}
                field={achieve.field}
                image={achieve.image}
              />
            ))}
          </Cards>
        </AchievementMain>
      )}
    </>
  );
}

export default Achievement;
