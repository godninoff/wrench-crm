import Head from "next/head";
import Header from "./Header";
import MainContent from "./MainContent";
import Menu from "./Menu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>wrench-crm</title>
      </Head>
      <Header />
      <main className="main-container">
        <Menu /> <MainContent />
      </main>
    </div>
  );
}
