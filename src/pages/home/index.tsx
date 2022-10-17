import { Col, Row } from "antd";
import { HeaderLogo } from "../../components";
import HeaderApply from "../../components/headerApply";
import { MenuOutlined } from "@ant-design/icons";

import TopSection from "./sections/TopSection";
import About from "./sections/About";
import Scholarship from "./sections/Scholarship";
import Testimonial from "./sections/Testimonial";
import Faq from "./sections/Faq";

const Home = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <header>
          <Row
            className="header"
            align="middle"
            justify="center"
            gutter={[80, 0]}
          >
            <Col span={8}>
              <HeaderLogo />
            </Col>
            <Col span={12}>
              <HeaderApply />
            </Col>
            <Col span={2}>
              <MenuOutlined className="header-navigation-icon" />
            </Col>
          </Row>
        </header>
      </Col>
      <Col span={24} className="jumbotron">
        <TopSection />
      </Col>
      <Col span={24} className="jumbotron">
        <About />
      </Col>
      <Col span={24} className="jumbotron">
        <Scholarship />
      </Col>
      <Col span={24} className="jumbotron">
        <Testimonial />
      </Col>
      <Col span={24} className="jumbotron">
        <Faq />
      </Col>
    </Row>
  );
};

export default Home;
