import { Avatar, Col, Row, Space, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { LinkedinOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-background"></div>
      <Row align="middle" justify="center">
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="testimonial-section">
              <Swiper
                style={{ textAlign: "center" }}
                slidesPerView={1.2}
                loop
                centeredSlides
                breakpoints={{
                  0: {
                    spaceBetween: 20,
                  },
                  480: {
                    spaceBetween: 20,
                  },
                  640: {
                    spaceBetween: 50,
                  },
                  768: {
                    spaceBetween: 50,
                  },
                  1024: {
                    spaceBetween: 50,
                  },
                }}
              >
                <SwiperSlide key={1} virtualIndex={1}>
                  <div className="card testimonial">
                    <div className="tesimonial-info">
                      <Space align="center" size={20}>
                        <Avatar
                          src="https://joeschmoe.io/api/v1/random"
                          size={70}
                        />
                        <div className="author">
                          <p className="text-bold">Irene Pereyra</p>
                          <p>Interaction Design Fellow ‘19</p>
                        </div>
                      </Space>
                      <LinkedinOutlined size={24} />
                    </div>
                    <div className="testimonial-content">
                      <Title>
                        This Fellowship was a turning point in my career. I
                        wouldn’t be where I am today without the financial
                        support and experienced offered through the program.
                      </Title>
                      <Space>
                        <p>Education</p>
                        <p>.</p>
                        <p>B.A. Visual Design</p>
                      </Space>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide key={2} virtualIndex={2}>
                  <div className="card testimonial">
                    <div className="tesimonial-info">
                      <Space align="center" size={20}>
                        <Avatar
                          src="https://joeschmoe.io/api/v1/random"
                          size={70}
                        />
                        <div className="author">
                          <p className="text-bold">Irene Pereyra</p>
                          <p>Interaction Design Fellow ‘19</p>
                        </div>
                      </Space>
                      <LinkedinOutlined size={24} />
                    </div>
                    <div className="testimonial-content">
                      <Title>
                        This Fellowship was a turning point in my career. I
                        wouldn’t be where I am today without the financial
                        support and experienced offered through the program.
                      </Title>
                      <Space>
                        <p>Education</p>
                        <p>.</p>
                        <p>B.A. Visual Design</p>
                      </Space>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide key={3} virtualIndex={3}>
                  <div className="card testimonial">
                    <div className="tesimonial-info">
                      <Space align="center" size={20}>
                        <Avatar
                          src="https://joeschmoe.io/api/v1/random"
                          size={70}
                        />
                        <div className="author">
                          <p className="text-bold">Irene Pereyra</p>
                          <p>Interaction Design Fellow ‘19</p>
                        </div>
                      </Space>
                      <LinkedinOutlined size={24} />
                    </div>
                    <div className="testimonial-content">
                      <Title>
                        This Fellowship was a turning point in my career. I
                        wouldn’t be where I am today without the financial
                        support and experienced offered through the program.
                      </Title>
                      <Space>
                        <p>Education</p>
                        <p>.</p>
                        <p>B.A. Visual Design</p>
                      </Space>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Testimonial;
