import { Col, Image, Row, Space, Typography } from "antd";
import person from "../../../assets/person.png";

const { Title } = Typography;
const About = () => {
  return (
    <Row align="middle" justify="center">
      <Col span={16}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="person">
              <Image src={person} height={402} preview={false} />
            </div>
          </Col>
          <Col span={12}>
            <Space direction="vertical">
              <Title className="primary-title">
                About the <br />
                apprenticeship
              </Title>

              <p>
                Our scholarships are designed to give talented and driven young
                people from any background access to top-class education,
                experience and network. We offer a fully-funded master’s degree
                alongside an apprenticeship and a guaranteed job upon
                graduation.
              </p>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default About;
