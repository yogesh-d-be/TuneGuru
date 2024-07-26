import React from 'react';
import { Layout, Typography,Card } from 'antd';
import 'antd/dist/reset.css'; 

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const TermsAndConditions = () => {
  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: '30px' }}>
        <div style={{ padding: '24px', background: '#fff', minHeight: 280 }}>
          <Title level={2}>Terms and Conditions</Title>

          <Card bordered={false}>
            <Title level={4}>1. Introduction</Title>
            <Paragraph>Welcome to TuneGuru Home Service and Maintenance Company. By using our services, you agree to the following terms and conditions. If you do not agree with these terms, please refrain from using our services.</Paragraph>

            <Title level={4}>2. Definitions</Title>
            <Paragraph>
              <strong>“Company,”</strong> <strong>“we,”</strong> <strong>“us,”</strong> or <strong>“our”</strong> refers to TuneGuru Home Service and Maintenance Company, founded by Yogesh, located in Porur, Chennai.<br />
              <strong>“User,”</strong> <strong>“you,”</strong> or <strong>“your”</strong> refers to individuals or entities using our services.<br />
              <strong>“Services”</strong> includes all home service and maintenance offerings provided by us.
            </Paragraph>

            <Title level={4}>3. Intellectual Property</Title>
            <Paragraph>
              <strong>Ownership:</strong> All intellectual property rights in the Services are owned by or licensed to us. We grant you a non-exclusive, non-transferable, and revocable license to use the Services in accordance with these Terms.<br />
              <strong>Feedback:</strong> We may use any suggestions or feedback you provide without any compensation to you.
            </Paragraph>

            <Title level={4}>4. Term and Termination</Title>
            <Paragraph>
              <strong>Duration:</strong> These Terms remain effective until terminated.<br />
              <strong>Termination by Us:</strong> We may terminate your access to the Services if you breach these Terms, fail to meet our standards, or for any other legitimate reason. We may also provide 30 days' notice before termination.<br />
              <strong>Termination by You:</strong> You may terminate these Terms by notifying us via email at privacy@tuneGuru.com.<br />
              <strong>Effects of Termination:</strong> Upon termination, your account will expire, and the Services will no longer be accessible.
            </Paragraph>

            <Title level={4}>5. Disclaimers and Warranties</Title>
            <Paragraph>
              <strong>As-Is Basis:</strong> The Services are provided without any warranties, including implied warranties of merchantability or fitness for a particular purpose.<br />
              <strong>No Guarantees:</strong> We do not guarantee that the Services will meet your expectations or that errors will be corrected.<br />
              <strong>Liability:</strong> We are not responsible for any issues arising from the Services or the performance of any third-party service providers. Your use of the Services is at your own risk.
            </Paragraph>

            <Title level={4}>6. Indemnity</Title>
            <Paragraph>You agree to indemnify and hold us harmless from any claims, losses, or damages arising from your use of the Services or any violation of these Terms.</Paragraph>

            <Title level={4}>7. Jurisdiction, Governing Laws, and Dispute Resolution</Title>
            <Paragraph>
              <strong>Governing Law:</strong> These Terms are governed by the laws of India. Disputes will be resolved in New Delhi.<br />
              <strong>Arbitration:</strong> Disputes will be resolved by arbitration in New Delhi in accordance with the Arbitration and Conciliation Act, 1996.
            </Paragraph>

            <Title level={4}>8. Grievance Redressal</Title>
            <Paragraph>
              <strong>Contact:</strong> For any complaints or queries, contact our Grievance Redressal Officer, Nikhil Shanker, at nikhilshanker@tuneGuru.com.<br />
              <strong>Resolution:</strong> We will address your complaints within the timelines prescribed by applicable laws.
            </Paragraph>

            <Title level={4}>9. Miscellaneous Provisions</Title>
            <Paragraph>
              <strong>Changes to Terms:</strong> We may update these Terms at any time. Changes are effective immediately upon posting. Your continued use of the Services constitutes acceptance of the revised Terms.<br />
              <strong>Modification to Services:</strong> We may add, modify, or discontinue the Services without liability.<br />
              <strong>Severability:</strong> If any provision is found to be unlawful, the remaining provisions will continue in effect.<br />
              <strong>Assignment:</strong> You may not assign your rights or obligations under these Terms without our consent.<br />
              <strong>Notices:</strong> Notices should be sent to legal@tuneGuru.com.<br />
              <strong>Third-Party Rights:</strong> No third party has rights to enforce these Terms.<br />
              <strong>Force Majeure:</strong> We are not liable for failures due to events beyond our control.
            </Paragraph>

            <Title level={4}>10. Payment Terms</Title>
            <Paragraph>
              <strong>Charges:</strong> All payments for services are to be made as specified during the booking process.<br />
              <strong>Methods:</strong> We accept various payment methods as detailed on our platform.<br />
              <strong>Refunds:</strong> Refunds are subject to our refund policy, which may vary depending on the service provided.
            </Paragraph>

            <Title level={4}>11. Booking Terms</Title>
            <Paragraph>
              <strong>Booking Confirmation:</strong> Your booking is confirmed once you receive an email or notification from us.<br />
              <strong>Cancellation:</strong> You may cancel your booking according to our cancellation policy. Please refer to our platform for details.<br />
              <strong>Rescheduling:</strong> Rescheduling is subject to availability and may incur additional charges.
            </Paragraph>

            <Title level={4}>12. Service Partner Terms</Title>
            <Paragraph>
              <strong>Obligations:</strong> Service partners are required to provide services as described and in a professional manner.<br />
              <strong>Liability:</strong> We are not liable for any issues arising from the actions of service partners. You enter into a contract directly with the service provider for the services rendered.<br />
              <strong>Feedback:</strong> You may provide feedback on service partners, which will be used to improve our services.
            </Paragraph>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default TermsAndConditions;
