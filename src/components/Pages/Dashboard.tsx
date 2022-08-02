import { Stack } from "@mui/material";
import React from "react";
import Watchlist from "../organisms/Watchlist";
import MyPortfolioValue from "../organisms/MyPortfolioValue";
import Template from "../templates/Template";
import MyPortfolio from "../organisms/MyPortfolio";
import TotalBalance from "../molecules/TotalBalance";
import MyWallets from "../organisms/MyWallets";
import RecentTransactions from "../molecules/RecentTransactions";

function Dashboard() {
  return (
    <Template
      content={
        <Stack direction="row" spacing={2}>
          <Stack spacing={2}>
            <Watchlist />
            <MyPortfolioValue />
          </Stack>
          <Stack spacing={2}>
            <MyPortfolio />
            <TotalBalance />
            <MyWallets />
            <RecentTransactions />
          </Stack>
        </Stack>
      }
    ></Template>
  );
}

export default Dashboard;
