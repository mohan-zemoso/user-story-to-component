import { Stack } from "@mui/material";
import React, { useState } from "react";
import AboutCurrency from "../molecules/AboutCurrency";
import WatchListBar from "../molecules/WatchListBar";
import DetailScreenTabs from "../organisms/DetailScreenTabs";
import PriceCorrelation from "../organisms/PriceCorrelation";
import Template from "../templates/Template";

function DetailWalletScreen() {
  const [isCash, setCash] = useState<boolean>(false);
  const [tabNo, setTabNo] = useState<string>("1");
  return (
    <Template
      content={
        <Stack>
          <WatchListBar />
          <DetailScreenTabs tabNo={tabNo} isCash={isCash} />
          <Stack direction="row" spacing={3}>
            <AboutCurrency />
            <PriceCorrelation />
          </Stack>
        </Stack>
      }
    ></Template>
  );
}

export default DetailWalletScreen;
