import { MinusCircleFilled, PlusCircleOutlined } from "@ant-design/icons";
import { Col, Collapse, Row, Select, Space, Typography } from "antd";
import { useState } from "react";
import { DATA } from "../../../utils/data";

const { Option } = Select;
const { Panel } = Collapse;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const { Title } = Typography;

const Faq = () => {
  const [selectedPanel, setSelectedPanel] = useState<string | string[]>("1");
  const onChange = (key: string | string[]) => {
    setSelectedPanel(key);
  };

  return (
    <Row align="middle" justify="center" className="faq">
      <Col xl={16} xs={24}>
        <Space direction="vertical" style={{ width: "100%" }} size={70}>
          <Row align="middle" justify="space-between">
            <Col span={12} xl={12} xs={24}>
              <Title className="primary-title">
                Frequently asked questions
              </Title>
            </Col>
            <Col span={7}>
              <div className="faq-filter">
                <p>Filter by:</p>
                <Select
                  defaultValue="Program conditions"
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="Program conditions">Program conditions</Option>
                </Select>
              </div>
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
            {DATA.map((item) => {
              return (
                <Panel
                  header={
                    <div className="faq-panel">
                      <p className="faq-panel-title">Program conditions</p>
                      <div className="faq-content">
                        <p className="text-bold">{item.title}</p>
                        <p
                          className={`content hidden-xs ${
                            selectedPanel === item.key.toString()
                              ? "visible"
                              : ""
                          }`}
                        >
                          {item.body}
                        </p>
                      </div>
                    </div>
                  }
                  key={item.key}
                >
                  <p className="hidden-lg">{item.body}</p>
                </Panel>
              );
            })}
          </Collapse>
        </Space>
      </Col>
    </Row>
  );
};

export default Faq;
