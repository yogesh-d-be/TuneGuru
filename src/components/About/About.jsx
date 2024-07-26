import React from 'react';
import { Typography, Row, Col, Card, Divider, Image, Button } from 'antd';
import { TeamOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './About.css'; // Create a separate CSS file if needed

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <div className="about-container">
      <Typography>
        <Title level={2}>About Us</Title>
        <Paragraph>
          <Text strong>TuneGuru Home Service and Maintenance Company</Text> was founded with a vision to simplify and enhance the home maintenance experience. Our team is committed to providing reliable, professional, and efficient services to ensure your home remains in top condition.
        </Paragraph>
        <Paragraph>
          Based in Porur, Chennai, we offer a comprehensive range of home services tailored to meet your needs. Whether it’s routine maintenance or emergency repairs, TuneGuru is here to help you every step of the way.
        </Paragraph>

        <Divider />

        <Title level={3}>Our Mission</Title>
        <Paragraph>
          Our mission is to deliver exceptional home maintenance solutions that exceed customer expectations. We aim to build lasting relationships with our clients by consistently providing high-quality services and unparalleled customer support.
        </Paragraph>

        <Title level={3}>Our Values</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <TeamOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
              <Title level={4}>Customer-Centric</Title>
              <Paragraph>
                We prioritize your needs and work hard to ensure your complete satisfaction.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <EnvironmentOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
              <Title level={4}>Integrity</Title>
              <Paragraph>
                We operate with transparency and honesty in all our interactions.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <UserOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
              <Title level={4}>Excellence</Title>
              <Paragraph>
                We strive for excellence in every task and service we provide.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Divider />

        <Title level={3}>Our Team</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              cover={
                <Image
                  alt="Yogesh"
                  src={require('../../assests/images/yogeshd.jpg')}
                  className="team-image"
                />
              }
            >
              <Title level={4}>Yogesh</Title>
              <Text type="secondary">Founder</Text>
              <Paragraph>
                Yogesh, the visionary behind TuneGuru, brings extensive experience in the home maintenance industry. His passion for quality service drives the company’s commitment to excellence.
              </Paragraph>
            </Card>
          </Col>
          {/* Add more team members similarly */}
        </Row>

        <Divider />

        <Title level={3}>Contact Us</Title>
        <Paragraph>
          We’d love to hear from you! Whether you have questions about our services or need assistance, feel free to reach out to us.
        </Paragraph>
        <Link to="/contactus">
          <Button type="primary">Email Us</Button>
        </Link>
      </Typography>
    </div>
  );
};

export default About;
