import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Home, CharacterPage, Navigation, LoginPage, ContactPage, Admin, Footer } from "..";
import { AuthProvider } from "../../context/AuthContext";

const Layout = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navigation />
          <Container className="wrapper">
            <Routes>
              <Route path="/" exact="true" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/detail/:id" element={<CharacterPage />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Container>
        </Router>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default Layout;
