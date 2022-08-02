import { Stack, Typography } from "@mui/material";
import React from "react";
import PaymentMethodCard from "../molecules/PaymentMethodCard";
import AmountDetails from "../organisms/AmountDetails";
import ChooseCrypto from "../organisms/ChooseCrypto";
import OrderSummary from "../organisms/OrderSummary";
import SelectSpeedDelivery from "../organisms/SelectSpeedDelivery";
import Template from "../templates/Template";

function PurchaseSellScreen() {
  return (
    <Template
      content={
        <Stack direction="row" spacing={2}>
          <Stack spacing={2}>
            <Typography>Buy Crypto</Typography>
            <ChooseCrypto />
            <PaymentMethodCard />
            <AmountDetails />
            <SelectSpeedDelivery />
          </Stack>
          <OrderSummary />
        </Stack>
      }
    ></Template>
  );
}

export default PurchaseSellScreen;
