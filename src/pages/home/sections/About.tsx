import { Col, Image, Row, Space, Typography } from "antd";
import person from "../../../assets/person.png";

const { Title } = Typography;
const About = () => {
  return (
    <>
      <div className="about-background"></div>
      <Row align="middle" justify="center" className="about">
        <Col xl={16} xs={24}>
          <Row gutter={[16, 16]}>
            <Col xl={12} xs={24} className="person-wrapper">
              <div className="person">
                <Image src={person} height={402} width={402} preview={false} />
              </div>
            </Col>
            <Col xl={12} xs={24}>
              <Space direction="vertical" className="about-card">
                <Title className="primary-title">
                  About the <br />
                  apprenticeship
                </Title>

                <p>
                  Our scholarships are designed to give talented and driven
                  young people from any background access to top-class
                  education, experience and network. We offer a fully-funded
                  master’s degree alongside an apprenticeship and a guaranteed
                  job upon graduation.
                </p>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default About;
