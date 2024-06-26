import { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import InputLabel from "@mui/material/InputLabel";

const Language = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "20px", textAlign: "center" }}
      >
        <Grid item>
          <Typography sx={{ color: "black", fontSize: "20px" }}>
            {t("language")}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={toggleExpansion}
            style={{ color: "black", marginLeft: "50px" }}
          >
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </Grid>
      </Grid>
      {isExpanded && (
        <div style={{ color: "white", textAlign: "center" }}>
          <FormControl
            variant="standard"
            sx={{
              width: "416px",
              height: "40px",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              InputLabelProps={{
                style: { color: "black" },
              }}
              sx={{
                color: "black",
              }}
            >
              Languages
            </InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedLanguage}
              label="Languages"
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-input": {
                  color: "black",
                },

                "& .MuiSelect-root": {
                  color: "black",
                  width: "100%",
                  height: "100%",
                  minWidth: "inherit",
                  minHeight: "inherit",
                },
                "& .MuiMenuItem-root": {
                  color: "black",
                },
              }}
            >
              <MenuItem value={"vi"}>Tiếng Việt</MenuItem>
              <MenuItem value={"en"}>English</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}
    </>
  );
};

export default Language;
