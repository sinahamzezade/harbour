import { Col, Divider, Row, Typography } from "antd";
const { Title } = Typography;

const Scholarship = () => {
  return (
    <Row align="middle" justify="center" className="scholarship-section">
      <Col xl={16} xs={24}>
        <Row gutter={[16, 16]}>
          <Col xl={8} xs={24}>
            <div className="card scholarship">
              <div className="application-info">
                <div className="information-item">
                  <p className="primary-text">Scholarship value</p>
                  <Title>€31,300</Title>
                </div>
              </div>
              <div className="card-footer">
                <Divider className="hidden-xs"/>
                <div className="application-info">
                  <div className="information-item">
                    <p className="primary-text">Tuition covered</p>
                    <p>€20,900</p>
                  </div>
                  <div className="information-item">
                    <p className="primary-text">Remaining</p>
                    <p>€2,000</p>
                  </div>
                  <div className="information-item">
                    <p className="primary-text">Living stipend</p>
                    <p>€8,400 (€700/month)</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={16} xs={24}>
            <div className="scholarship-wrapper">
              <div className="card scholarship-item commitment">
                <div className="application-info">
                  <div className="information-item">
                    <p className="primary-text">Study commitment</p>
                    <p className="large-text">3 hours / day</p>
                    <Divider />
                    <p>
                      You will complete 15 modules to graduate. Daily classes
                      are 3 hours, plus coursework to complete in your own time.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card scholarship-item commitment">
                <div className="application-info">
                  <div className="information-item">
                    <p className="primary-text">Work commitment</p>
                    <p className="large-text">4 hours / day</p>
                    <Divider />
                    <p>
                      Immerse yourself in the professional world during your
                      apprenticeship. You’ll learn the ropes from the best and
                      get to apply your newly acquired knowledge in the field
                      from day one.
                    </p>
                  </div>
                </div>
              </div>
              <Divider>GRADUATION</Divider>
              <div className="card scholarship-item contract">
                <div className="application-info">
                  <div className="information-item">
                    <p className="primary-text">A full-time contract</p>
                    <p className="large-text">1 Year / Full-Time</p>
                    <Divider />
                    <p>
                      You’ll be guaranteed a 1 year contract with SCG upon
                      graduation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Scholarship;
