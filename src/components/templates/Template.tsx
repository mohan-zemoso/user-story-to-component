import { Stack } from "@mui/material";
import React from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Navigation from "../organisms/Navigation";
type TemplateProps = {
  content: React.ReactNode | React.ReactNode[];
};

function Template({ content }: TemplateProps) {
  return (
    <>
      <Stack direction="row">
        <Navigation />
        <Stack>
          <Header />
          {content}
          <Footer />
        </Stack>
      </Stack>
    </>
  );
}

export default Template;
