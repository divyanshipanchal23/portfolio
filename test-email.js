// This is a simple test script to verify Resend functionality
import { Resend } from 'resend';

// Don't worry about hardcoding the API key here, it's just for testing
// In your actual app, it will use the key from .env.local
const resend = new Resend('re_TfD837TA_Hw2ffeXdfdLUuarVf5tygS9p');

async function testEmail() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'divyanshi23.work@gmail.com',
      subject: 'Portfolio Contact Form Test',
      html: '<p>This is a test email from your portfolio contact form setup! <strong>It works!</strong></p>'
    });
    
    console.log('Email sent successfully!');
    console.log('Response:', data);
  } catch (error) {
    console.error('Error sending test email:', error);
  }
}

testEmail(); 