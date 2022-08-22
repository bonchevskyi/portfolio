import React, { useContext, useState, useEffect } from "react";
import SingleService from "./SingleService/SingleService";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import i18next from "../../i18nextInit";
import { servicesData } from "../../data/servicesData";
import { Body, BodyContainer, Header, ServicesMain } from "./Services.styled";

function Services() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

  const servicesDataTitle = t("services.data", {
    returnObjects: true,
  });

  for (let i = 0; i < servicesData.length; i++) {
    servicesData[i]["title"] = servicesDataTitle[i];
  }

  useEffect(() => {
    //var lang = getLanguage();
    const servicesDataTitle = i18next.t("services.data", {
      returnObjects: true,
    });

    for (let i = 0; i < servicesData.length; i++) {
      servicesData[i]["title"] = servicesDataTitle[i];
    }
  }, [getLanguage()]);

  return (
    <>
      {servicesData.length > 0 && (
        <ServicesMain
          id="services"
          style={{ backgroundColor: theme.secondary }}
        >
          <Header>
            <h1 style={{ color: theme.primary }}>{t("services.title")}</h1>
          </Header>
          <Body>
            <p style={{ color: theme.tertiary80 }}>{t("services.body")}</p>
            <BodyContainer>
              {servicesData.map((services) => (
                <SingleService
                  key={services.id}
                  id={services.id}
                  title={services.title}
                  icon={services.icon}
                />
              ))}
            </BodyContainer>
          </Body>
        </ServicesMain>
      )}
    </>
  );
}

export default Services;
