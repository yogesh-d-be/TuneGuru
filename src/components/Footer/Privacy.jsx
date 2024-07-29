import React from 'react';
import { Typography, Card } from 'antd';
import '../Footer/Privacy.css'

const { Title, Paragraph, Text } = Typography;

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '10px', background: 'rgb(228, 225, 225)' }}>
      <Typography>
        <Card bordered={false} style={{ padding: '10px', marginTop: '20px', marginLeft: '30px', marginRight: '30px' }}>
          <Title level={2}>Privacy Policy</Title>
          <Paragraph>
            <Text strong>Last updated:</Text> 31st July, 2024
          </Paragraph>
          <Paragraph>
            Welcome to TuneGuru’s privacy policy (“Privacy Policy” or “Policy”).
          </Paragraph>
          <Paragraph>
            TuneGuru Home Service and Maintenance Company, founded by Yogesh and located in Porur, Chennai (collectively, “TuneGuru”, “we” or “us”), is dedicated to providing home maintenance and service solutions. This Policy outlines our practices in relation to the collection, storage, usage, processing, and disclosure of personal data that you have consented to share with us when you access, use, or otherwise interact with our website available at <a href="https://www.tuneguru.com/" target="_blank" rel="noopener noreferrer">https://www.tuneguru.com/</a> or mobile application ‘TuneGuru’ (collectively, “Platform”) or avail products or services that TuneGuru offers you on or through the Platform (collectively, the “Services”).
          </Paragraph>
          <Paragraph>
            At TuneGuru, we are committed to protecting your personal data and respecting your privacy. In order to provide you with access to the Services, we need to collect and process certain data about you. This Policy explains how we process and use personal data about you.
          </Paragraph>
          <Paragraph>
            Please note that unless specifically defined in this Policy, capitalised terms shall have the same meaning ascribed to them in our Terms and Conditions, available at <a href="https://www.tuneguru.com/terms" target="_blank" rel="noopener noreferrer">https://www.tuneguru.com/terms</a> (“Terms”). Please read this Policy in conjunction with the Terms.
          </Paragraph>
          <Paragraph>
            By using the Services, you confirm that you have read and agree to be bound by this Policy and consent to the processing activities described under this Policy.
          </Paragraph>
          <Paragraph>
            Please refer to Section 1 to understand how the terms of this Policy apply to you.
          </Paragraph>

          <Title level={3}>1. BACKGROUND AND KEY INFORMATION</Title>
          <Paragraph>
            <Text strong>(a) How this Policy applies:</Text> This Policy applies to individuals who access or use the Services or otherwise avail the Professional Services. For the avoidance of doubt, references to “you” across this Policy are to an end user that uses the Platform.
          </Paragraph>
          <Paragraph>
            By using the Platform, you consent to the collection, storage, usage, and disclosure of your personal data, as described in and collected by us in accordance with this Policy.
          </Paragraph>
          <Paragraph>
            <Text strong>(b) Review and Updates:</Text> We regularly review and update our Privacy Policy, and we request you to regularly review this Policy. It is important that the personal data we hold about you is accurate and current. Please let us know if your personal data changes during your relationship with us.
          </Paragraph>
          <Paragraph>
            <Text strong>(c) Third-Party Services:</Text> The Platform may include links to third-party websites, plug-ins, services, and applications (“Third-Party Services”). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We neither control nor endorse these Third-Party Services and are not responsible for their privacy statements. When you leave the Platform or access third-party links through the Platform, we encourage you to read the privacy policy of such third-party service providers.
          </Paragraph>

          <Title level={3}>2. PERSONAL DATA THAT WE COLLECT</Title>
          <Paragraph>
            <Text strong>(a) Types of Data Collected:</Text> We collect different types of personal data about you, including but not limited to:
            <ul className='data-list'>
              <li><Text strong>Contact Data:</Text> Mailing or home address, location, email addresses, and mobile numbers.</li>
              <li><Text strong>Identity and Profile Data:</Text> Name, username or similar identifiers, photographs, and gender.</li>
              <li><Text strong>Marketing and Communications Data:</Text> Address, email address, information posted in service requests, offers, wants, feedback, comments, pictures, responses to surveys and polls, and communication preferences.</li>
              <li><Text strong>Technical Data:</Text> IP address, browser type, internet service provider, details of operating system, access time, page views, device ID, and other technology on the devices that you use to access the Platform.</li>
              <li><Text strong>Transaction Data:</Text> Details of the Services or Professional Services you have availed, credit or debit card details, and UPI IDs.</li>
              <li><Text strong>Usage Data:</Text> Information about how you use the Services, booking history, user taps and clicks, and page views.</li>
            </ul>
          </Paragraph>
          <Paragraph>
            <Text strong>(b) Aggregated Data:</Text> We also collect, use, and share aggregated data for any purpose. Aggregated data does not reveal your identity. However, if combined with personal data so that it can identify you, it will be treated as personal data.
          </Paragraph>
          <Paragraph>
            <Text strong>(c) Impact of Refusal:</Text> If you refuse to provide personal data required by law or contract, we may not be able to perform the contract or provide the Services.
          </Paragraph>

          <Title level={3}>3. HOW DO WE COLLECT PERSONAL DATA?</Title>
          <Paragraph>
            <Text strong>(a) Direct Interactions:</Text> You provide us with personal data when you:
            <ul className='data-list'>
              <li>Create an account or profile.</li>
              <li>Use our Services or carry out related activities.</li>
              <li>Enter promotions, surveys, or feedback.</li>
              <li>Request marketing communications.</li>
              <li>Report issues or contact us.</li>
            </ul>
          </Paragraph>
          <Paragraph>
            <Text strong>(b) Automated Technologies:</Text> We collect Technical Data through cookies, web beacons, pixel tags, and similar technologies.
          </Paragraph>
          <Paragraph>
            <Text strong>(c) Third Parties:</Text> We receive personal data from:
            <ul className='data-list'>
              <li>Analytics providers and advertising networks.</li>
              <li>Service professionals and publicly available sources.</li>
              <li>Affiliate entities.</li>
            </ul>
          </Paragraph>

          <Title level={3}>4. HOW DO WE USE YOUR PERSONAL DATA?</Title>
          <Paragraph>
            <Text strong>(a) Purposes:</Text> We use your personal data for:
            <ul className='data-list'>
              <li>Verifying your identity and creating your user account.</li>
              <li>Providing and improving Services.</li>
              <li>Tracking transactions and processing payments.</li>
              <li>Sending notifications and marketing communications.</li>
              <li>Compliance with legal obligations.</li>
            </ul>
          </Paragraph>
          <Paragraph>
            <Text strong>(b) Contact Authorisation:</Text> By using our Services, you authorise us to contact you via email, phone, or otherwise.
          </Paragraph>
          <Paragraph>
            <Text strong>(c) Data Sharing:</Text> We may share data with service professionals, vendors, and other entities in the TuneGuru group, and may disclose data when required by law.
          </Paragraph>

          <Title level={3}>5. COOKIES</Title>
          <Paragraph>
            <Text strong>(a) Definition and Use:</Text> Cookies are small files that help us recognize your browser and track interactions on our Platform. We use cookies to improve user experience.
          </Paragraph>
          <Paragraph>
            <Text strong>(b) Types:</Text> We use session cookies (deleted after browser closure) and persistent cookies (stored until expiration or deletion). You can control cookies via browser settings.
          </Paragraph>

          <Title level={3}>6. DATA SECURITY</Title>
          <Paragraph>
            <Text strong>(a) Protection Measures:</Text> We implement security measures to protect your personal data.
          </Paragraph>
          <Paragraph>
            <Text strong>(b) Breach Response:</Text> We have protocols for data breaches and will notify you if required.
          </Paragraph>

          <Title level={3}>7. DATA RETENTION</Title>
          <Paragraph>
            <Text strong>(a) Duration:</Text> We retain your personal data only as long as necessary for the purposes outlined in this Policy.
          </Paragraph>
          <Paragraph>
            <Text strong>(b) Deletion:</Text> We securely delete or anonymize personal data upon request or when it is no longer required.
          </Paragraph>

          <Title level={3}>8. YOUR RIGHTS</Title>
          <Paragraph>
            You have the right to access, correct, or request deletion of your personal data. To exercise your rights, please contact us.
          </Paragraph>
        </Card>
      </Typography>
    </div>
  );
};

export default PrivacyPolicy;
