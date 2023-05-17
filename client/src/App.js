// import "./App.css";
import "./css/bootstrap.css";
import "./css/styles.css";
import Navigation from "./components/Nav/Nav";
// import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer";
import Mac from "./components/pages/Mac";
import Iphone from "./components/Iphone/iphone";
// import Iphone from "./components/pages/Iphone";
import Ipad from "./components/pages/Ipad";
import Watch from "./components/pages/watch";
import TV from "./components/pages/TV";
import Music from "./components/pages/Music";
import Support from "./components/pages/Support";
import Cart from "./components/pages/Cart";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Four04 from "./components/pages/Four04";
import ProductPage from "./components/Iphone/ProductPage";
function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/Iphone" element={<Iphone />} />

        <Route path="/Ipad" element={<Ipad />} />
        <Route path="/Watch" element={<Watch />} />
        <Route path="/TV" element={<TV />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />
        <Route path="/iphone/:productID" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
