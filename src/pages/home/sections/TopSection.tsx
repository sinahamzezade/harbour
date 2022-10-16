import { Button, Col, Image, Row, Space, Typography } from "antd";
import { ReactComponent as BrandIcon } from "../../../assets/interaction-icon.svg";
import elephant from "../../../assets/elephant.png";
const { Title } = Typography;

const TopSection = () => {
  return (
    <Row align="middle" justify="center">
      <Col span={16}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Space direction="vertical">
              <Title className="primary-title">
                Interaction Design <br /> Apprenticeship
              </Title>
              <BrandIcon className="interaction-icon" />
              <p className="text-bold">
                A fully funded work-study program to launch <br /> your tech
                career
              </p>
              <p>
                Harbour.Space has partnered with SCG to empower driven talent
                and eliminate the barriers to accessing exceptional education
                and career opportunities through a Masters Fellowship.
              </p>
              <div className="jumbotron-ps">
                <p className="text-bold">Position:</p>
                <p>Marketing Performance</p>
              </div>
              <Button type="primary" className="mt-1">
                Apply Now
              </Button>
            </Space>
          </Col>
          <Col span={12}>
            <Space direction="vertical" className="fullwidth" size={30}>
              <div className="powered-by">
                <Image src={elephant} width={80} preview={false} />
                <div>
                  <p>Powered by:</p>
                  <p className="text-bold">Zeptolab</p>
                </div>
              </div>

              <div className="card">
                <div className="close-application">
                  <p className="primary-text">Application closes in</p>
                  <div className="counter">
                    <p>6 Day </p>
                    <p>:</p>
                    <p>22 Hrs</p>
                    <p>:</p>
                    <p>56 Min</p>
                    <p>:</p>
                    <p>13 Seg</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="application-info">
                  <div className="information-item">
                    <p className="primary-text">Location</p>
                    <p>Bangkok</p>
                  </div>
                  <div className="information-item">
                    <p className="primary-text">Duration</p>
                    <p>
                      1 Year <br />
                      Full-Time
                    </p>
                  </div>
                  <div className="information-item">
                    <p className="primary-text">Start date</p>
                    <p>30 June 2020</p>
                  </div>
                  <div className="information-item">
                    <p className="primary-text">End date</p>
                    <p>3 Aug 2020</p>
                  </div>
                </div>
              </div>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TopSection;
