import React from "react";
import Header from "../components/header/header";
import MainSection from "./home-sections/main-section/mainSection";
import ArticleSection from "./home-sections/article-section/articleSection";
import RecentSection from "./home-sections/recent-section/recentSection";
import Footer from "../components/footer/footer";

function Home() {
    return (
      <>
      <Header />
      <MainSection />
      <ArticleSection />
      <RecentSection />
      <Footer />
      </>
    );
  }

  export default Home