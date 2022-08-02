import { Stack } from "@mui/material";
import React from "react";
import TradeListFilter from "../molecules/TradeListFilter";
import TradeList from "../organisms/TradeList";
import Template from "../templates/Template";

function TradeScreen() {
  return (
    <Template
      content={
        <Stack>
          <TradeListFilter />
          <TradeList />
        </Stack>
      }
    ></Template>
  );
}

export default TradeScreen;
