import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Footer } from "./components/index";
import Main from "./components/containers/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import {
  ContactUs,
  Login,
  News,
  Registration,
  Services,
  Teachers,
} from "./pages/index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} exact>
            <Route index element={<Main />} />
            <Route path="/services" element={<Services />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/news" element={<News />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Registration />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
