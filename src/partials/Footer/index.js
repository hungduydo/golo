import React from "react";
import logo from "../../assets/logo.png"
import { Col, NavLink, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <div className="container my-auto">
        <Row className="py-5">
          <Col cols="3">
            <img src={logo} alt="Golo.vn"></img>
          </Col>
          <Col cols="3">
            <p className="f-header">Contact Us</p>
            <p><i className="fas fa-map-marker-alt"></i> 80 Diệp Minh Châu, Tân Sơn Nhì, Tân Phú, TP HCM</p>
            <p><i className="fas fa-phone"></i> +84 356 137 845</p>
            <p><i className="far fa-envelope"></i> info@golo.vn</p>
          </Col>
          <Col cols="3">
            <p className="f-header">Quick Links</p>
            <Row className="f-quicklink">
              <Col md="6">
                <p><i className="fas fa-angle-right"></i>Home</p>
                <p><i className="fas fa-angle-right"></i>Về Chúng Tôi</p>
                <p><i className="fas fa-angle-right"></i>Tài Khoản</p>
                <p><i className="fas fa-angle-right"></i>Blog</p>
                <p><i className="fas fa-angle-right"></i>Liên Hệ</p>
              </Col>
              <Col md="6">
                <p><i className="fas fa-angle-right"></i>Market</p>
                <p><i className="fas fa-angle-right"></i>Stock</p>
                <p><i className="fas fa-angle-right"></i>AI Trading</p>
                <p><i className="fas fa-angle-right"></i>Edu</p>
              </Col>

            </Row>
          </Col>
          <Col cols="3" className="f-network">
            <p className="f-header">Kết Nối</p>
            <p><i className="fab fa-facebook-f"></i>Facebook</p>
            <p><i className="fab fa-instagram"></i>Instagram</p>
            <p><i className="fab fa-twitter"></i>Twitter</p>
          </Col>
        </Row>
        <div className="copyright text-center my-auto py-3">
          <span>Copyright &copy; Golo.vn 2020</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
