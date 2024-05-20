import React from "react";
import { Stack } from "@mui/material";
import Language from "../../components/settingItems/Language";
import { useTranslation } from "react-i18next";
const Settings = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        marginLeft: "25%",
        backgroundColor: "white",
        height: "100vh",
        width: "75%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          height: "80px",
          borderBottom: "1px solid #857f74",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "black" }}> {t("setting")} </h1>
      </Stack>
      <Language />
    </div>
  );
};

export default Settings;
