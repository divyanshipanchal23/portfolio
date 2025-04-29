import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Define the expected request shape
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Function to validate the contact form data
function validateContactForm(data: any): data is ContactFormData {
  return (
    typeof data.name === 'string' &&
    typeof data.email === 'string' &&
    typeof data.message === 'string' &&
    data.name.trim() !== '' &&
    data.email.trim() !== '' &&
    data.message.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) // Basic email validation
  );
}

// POST handler for the contact form
export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the form data
    if (!validateContactForm(body)) {
      return NextResponse.json(
        { error: 'Invalid form data. Please check your inputs.' },
        { status: 400 }
      );
    }
    
    // Create email content
    const { name, email, message } = body;
    
    // Initialize Resend with API key from environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
      // In development or when API key isn't available, just log the submission
      if (!process.env.RESEND_API_KEY) {
        console.log('RESEND_API_KEY not found, would send:', { name, email, message });
        return NextResponse.json(
          { success: true, message: 'Your message has been received (Development Mode).' },
          { status: 200 }
        );
      }
      
      // Send email with Resend
      const emailData = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>', // You can customize this once verified with Resend
        to: 'divyanshi23.work@gmail.com', // Your email address
        subject: `New contact form submission from ${name}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #06b6d4;">New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 4px;">
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        `,
      });
      
      console.log('Email sent successfully:', emailData);
      
      // Return a successful response
      return NextResponse.json(
        { success: true, message: 'Your message has been sent successfully!' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { error: 'There was an error sending your message. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: 'There was an error processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}