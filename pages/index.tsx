import Head from "next/head";
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Menu from "./Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>wrench-crm</title>
      </Head>
      <Header />
      <main className="main-container">
        <Menu />
        <MainContent />
      </main>
    </>
  );
}
