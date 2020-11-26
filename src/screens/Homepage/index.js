import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";
import Slider from "../../partials/Slider";
import fgi from "../../assets/fgi.png";
import stocks from "../../assets/stocks.png";
import ai_trading from "../../assets/ai_trading.png";
import edu from "../../assets/edu.png";
import rs_pbpe from "../../assets/rs-pbpe.png";
import rs_hist from "../../assets/rs-hist.png";
import rs_chart from "../../assets/rs-chart.png";
import rs_num from "../../assets/rs-num.png";
const Homepage = () => {
  return (<div className="section-home">
    <Container fluid>
      <Row>
        <Slider></Slider>
      </Row>
    </Container>
    <Container>
      <Row className="d-flex justify-content-center my-4 home-section">
        <Col>
          <ButtonGroup size="lg" className="w-100 bg-light text-dark inner-menu">
            <Button color="link">
              <NavLink to="/market" activeClassName="active">Market</NavLink>
            </Button>
            <Button color="link">
              <NavLink to="/stocks" activeClassName="active">Stocks</NavLink>
            </Button>
            <Button color="link">
              <NavLink to="/ai-traiding" activeClassName="active">AI Trading</NavLink>
            </Button>
            <Button color="link">
              <NavLink to="/edu" activeClassName="active">Edu</NavLink>
            </Button>
          </ButtonGroup>
        </Col>

      </Row>
      <Row className="home-section">
        <Col md="6">
          <img className="image-home" src={fgi}></img>
        </Col>
        <Col md="6" className="fdi-info">
          <p className="text-success mb-0 text-second">Market</p>
          <h1 className="text-light mb-4">Cảm xúc thị trường hiện tại ra sao?</h1>
          <ul className="fgi-list">
            <li>Nhận định được vùng ĐÁY và vùng ĐỈNH của thị trường chiếm 50% thành công của giao dịch - W.Oneil.</li>
            <li>FGI Index là công cụ định lượng cảm xúc của NĐT trên thị trường từ sợ hãi cực độ đến tham lam cực độ.</li>
            <li>Sử dụng thuật toán tích lũylũy từ hàng triệu lệnh giao dịch của hàng ngàn cổ phiếu đang niêm yết trên 3 sàn.</li>
          </ul>
          <Button color="success">Trải nghiệm ngay</Button>
        </Col>
      </Row>
      <Row className="home-section">
        <Col md="6" className="fdi-info">
          <p className="text-success mb-0 text-second">AI Trading</p>
          <h1 className="text-light mb-4">Đầu tư bằng thuật toán.</h1>
          <ul className="fgi-list">
            <li>Hỗ trợ NĐT quyết định đầu tư hiệu quả.</li>
            <li>Sử dụng công nghệ Machine Learning.</li>
            <li>Kết hợp giữa thị trường, yếu tố cơ bản và chuyển động giá của cổ phiếu.</li>
          </ul>
          <Button color="success">Trải nghiệm ngay</Button>
        </Col>
        <Col md="6">
          <img className="image-home" src={ai_trading}></img>
        </Col>
      </Row>
      <Row className="home-section">
        <Col md="6">
          <img className="image-home" src={stocks}></img>
        </Col>
        <Col md="6">
          <p className="text-success mb-0 text-second">Stock</p>
          <h1 className="text-light mb-4 mr-5 pr-5">Hỗ trợ NĐT công cụ phân tích doanh nghiệp</h1>
          <ul className="stock-list">
            <li><img src={rs_pbpe} alt="pbpe"></img> Định giá theo phương pháp P/E và P/B lịch sử.</li>
            <li><img src={rs_chart} alt="chart"></img> Đồ thị hóa số liệu báo cáo tài chính</li>
            <li><img src={rs_hist} alt="history"></img> Đồ thị RS (CANSLIM) lịch sử.</li>
            <li><img src={rs_num} alt="base number"></img> Số liệu RS và các chỉ số cơ bản cập nhật hàng ngày.</li>
          </ul>
          <Button color="success">Trải nghiệm ngay</Button>
        </Col>
      </Row>

      <Row className="home-section">
        <Col md="12 text-center edu-header">
          <p className="text-success mb-0 text-second">Golo.vnvn-edu</p>
          <h1 className="text-light mb-4">Khóa học được thiết kế bài bản từ cơ bản đến nâng cao.</h1>
        </Col>
        <Col md="6" className="px3">
          <img className="image-home" src={edu}></img>
          <div>
            <p className="edu-text mt-5"><span>02. </span>Đồ thị giá và bản chất của chu kỳ giá.</p>
            <p className="edu-text mt-5"><span>03. </span>Lựa chọn cổ phiếu tốt để đầu tư.</p>
            <p className="edu-text mt-5"><span>04. </span>Định thời điểm để mua và bán.</p>
            <p className="edu-text mt-5"><span>05. </span>Công cụ hỗ trợ độc quyền sau khóa học.</p>
          </div>
        </Col>
        <Col md="6" className="px-3">
          <p className="edu-text edu-text-large"><span>01.</span>Thấu hiểu ngôn ngữ tài chính của Doanh Nghiệp</p>
          <p>
            Proin lacinia nulla quis lacus vehicula fermentum. Nulla bibendum quam vel metus dictum fringilla.
            <br />
            <br />
            Ut a quam at magna tincidunt convallis vel in tortor. In hac habitasse platea dictumst. Vivamus pretium ex in ullamcorper cursus. Proin euismod, nulla eu convallis tempus, turpis neque pellentesque eros, .
          </p>
          <Button color="success">Trải nghiệm ngay</Button>
        </Col>
      </Row>

      <Row className="home-section price-section">
        <Col md="12" className="text-center price-header mb-5">
          <p className="text-success mb-2 text-second">Tài khoản</p>
          <h1 className="text-light mb-4">Đăng Ký Tài Khoản V.I.P</h1>
          <p className="text-center">Pro membership bringbrings exclusive and timely data at your fingertips.<br/>
          Discover your next great investment idea quicker and easier
          </p>
        </Col>
        <Col md="3" className="package-head">
          <div className="content">
            <div>
              <pre>Golo.vn</pre>
              <h2>Tính năng</h2>
            </div>
            <ul>
              <li>Stock Analysis</li>
              <li>Investment ideas</li>
              <li>Smart Portfolia</li>
              <li>Research tools</li>
              <li>Daily Insights</li>
              <li>Top Experts</li>
              <li>Email Alerts</li>
              <li>Export Data</li>
              <li>Support</li>
            </ul>
          </div>
        </Col>
        <Col md="3" className="package">
          <div className="content">
            <div>
              <pre>Gói cao cấp</pre>
              <h2>Ultimate</h2>
            4tr/Tháng
          </div>
            <ul>
              <li>Full Access</li>
              <li>Full Access</li>
              <li>Full Access</li>
              <li>Full Access</li>
              <li>Full Access</li>
              <li>Full Access</li>
              <li>Full Access</li>
              <li>Excel + PDF</li>
              <li>Top Priority</li>
            </ul>
            <Button color="success">Đăng ký ngay</Button>
          </div>

        </Col>
        <Col md="3" className="package">
          <div className="content">
            <div>
              <pre>Gói thông thường</pre>
              <h2>Premium</h2>
            3tr/Tháng
          </div>
            <ul>
              <li>Full Access</li>
              <li>Advanced</li>
              <li>Advanced</li>
              <li>Full Access</li>
              <li>Advanced</li>
              <li>Advanced</li>
              <li>Limited</li>
              <li>PDF</li>
              <li>Priority</li>
            </ul>
            <Button color="success">Đăng ký ngay</Button>
          </div>

        </Col>
        <Col md="3" className="package">
          <div className="content"><div>
            <pre>Gói cơ bản</pre>
            <h2>Basic</h2>
            Free
          </div>
            <ul>
              <li>Limited</li>
              <li>None</li>
              <li>Limited</li>
              <li>Limited</li>
              <li>Limited</li>
              <li>Limited</li>
              <li>None</li>
              <li>None</li>
              <li>Upon Availaability</li>
            </ul>
            <Button color="success">Đăng ký ngay</Button></div>

        </Col>
      </Row>
    </Container>
  </div>);
};

export default Homepage;
