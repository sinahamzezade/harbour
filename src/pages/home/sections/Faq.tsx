import {
  MinusCircleFilled,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Col, Collapse, Divider, Row, Select, Space, Typography } from "antd";
import { useState } from "react";

const { Option } = Select;
const { Panel } = Collapse;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const { Title } = Typography;

const Faq = () => {
  const [selectedPanel, setSelectedPanel] = useState<string | string[]>("1");
  const onChange = (key: string | string[]) => {
    setSelectedPanel(key);
  };

  return (
    <Row align="middle" justify="center" className="faq">
      <Col span={16}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Row align="middle" justify="space-between">
            <Col span={12}>
              <Title className="primary-title">
                Frequently asked questions
              </Title>
            </Col>
            <Col span={6}>
              <Space align="center" className="faq-filter">
                <p>Filter by:</p>
                <Select
                  defaultValue="Program conditions"
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="Program conditions">Program conditions</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Space>
            </Col>
          </Row>

          <Collapse
            defaultActiveKey={["1"]}
            ghost
            accordion
            onChange={onChange}
            expandIconPosition="end"
            expandIcon={({ isActive }) =>
              isActive ? (
                <MinusCircleFilled className="faq-icon close" />
              ) : (
                <PlusCircleOutlined className="faq-icon open" />
              )
            }
          >
            <Panel
              header={
                <div className="faq-panel">
                  <p className="faq-panel-title">Program conditions</p>
                  <div className="faq-content">
                    <p className="text-bold">What are my obligations?</p>
                    <p
                      className={`content ${
                        selectedPanel === "1" ? "visible" : ""
                      }`}
                    >
                      The majority of our students receive numerous job offers
                      at the end of the second academic year of their Bachelor's
                      programme and at the end of the first academic year of
                      their Master's programme. The best applicants receive an
                      offer from our industrial partners at the beginning of
                      their programmes. Harbour.Space is highly recognized among
                      innovative employers and is strategic partner of B.Grimm
                      multi- industry corporation with 140 years of history in
                      Thailand. Together we insure students get the best
                      knowledge about the current job market opportunities. We
                      offer our students paid internships options during studies
                      jointly with our industrial partners. Employers that hired
                      graduates of Harbour.Space in the past include Google,
                      IBM, Accenture, Typeform, Frog, and other tech centric
                      companies. Our industry specific employability report
                      could be provided to you separately during the admission
                      process.
                    </p>
                  </div>
                </div>
              }
              key="1"
            ></Panel>
            <Panel
              header={
                <div className="faq-panel">
                  <p className="faq-panel-title">Program conditions</p>
                  <div className="faq-content">
                    <p className="text-bold">
                      Do I get a job placement upon graduation?
                    </p>
                    <p
                      className={`content ${
                        selectedPanel === "2" ? "visible" : ""
                      }`}
                    >
                      The majority of our students receive numerous job offers
                      at the end of the second academic year of their Bachelor's
                      programme and at the end of the first academic year of
                      their Master's programme. The best applicants receive an
                      offer from our industrial partners at the beginning of
                      their programmes. Harbour.Space is highly recognized among
                      innovative employers and is strategic partner of B.Grimm
                      multi- industry corporation with 140 years of history in
                      Thailand. Together we insure students get the best
                      knowledge about the current job market opportunities. We
                      offer our students paid internships options during studies
                      jointly with our industrial partners. Employers that hired
                      graduates of Harbour.Space in the past include Google,
                      IBM, Accenture, Typeform, Frog, and other tech centric
                      companies. Our industry specific employability report
                      could be provided to you separately during the admission
                      process.
                    </p>
                  </div>
                </div>
              }
              key="2"
            ></Panel>
          </Collapse>
        </Space>
      </Col>
    </Row>
  );
};

export default Faq;
