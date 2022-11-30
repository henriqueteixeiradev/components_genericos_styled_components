import React from "react";
import type { NextPage } from "next";
import { HeadLine } from "styles/HeadLine";

const Home: NextPage = () => {
  return (
    <>
    <HeadLine level={1} fontWeight="bold" size="xxlarge">Título 01</HeadLine>
    </>
  )
};

export default Home;
