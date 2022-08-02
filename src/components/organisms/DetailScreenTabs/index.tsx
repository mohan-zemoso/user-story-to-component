import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Image from "../../atoms/Image";
import { Stack } from "@mui/material";
import TotalBalance from "../../molecules/TotalBalance";
import WalletList from "../WalletList";

interface DetailScreenTabsProps {
  tabNo?: string;
  isCash?: boolean;
}

function DetailScreenTabs({ tabNo, isCash }: DetailScreenTabsProps) {
  const [value, setValue] = useState<string>(tabNo!);
  const [isBTC, setIsBTC] = useState<boolean>(!isCash);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="Wallet" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Image />
        </TabPanel>
        <TabPanel value="2">
          <Stack>
            {isBTC && <TotalBalance />}
            {!isBTC && <TotalBalance />}
            <WalletList />
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default DetailScreenTabs;
