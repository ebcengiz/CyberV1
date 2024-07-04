import "./App.css";
import FooterV1 from "./components/footerV1/FooterV1";
import NavbarV1 from "./components/navbarV1/NavbarV1";
import SiteRouter from "./components/siteRouter/SiteRouter";

function App() {
  return (
    <>
      <NavbarV1 />
      <SiteRouter />
      <FooterV1 />
    </>
  );
}

export default App;
