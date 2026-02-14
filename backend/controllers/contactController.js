const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Save to database
    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    // Send email notification
    try {
      const transporter = createTransporter();

      // Email to yourself
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p><small>Sent from your portfolio website</small></p>
        `
      };

      await transporter.sendMail(mailOptions);

      // Auto-reply to sender
      const autoReply = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting me!',
        html: `
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p>${message}</p>
          <br>
          <p>Best regards,</p>
          <p><strong>Shubham Jadhav</strong></p>
          <p>MERN Stack Developer</p>
          <hr>
          <p><small>This is an automated response. Please do not reply to this email.</small></p>
        `
      };

      await transporter.sendMail(autoReply);

    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      data: contact
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: error.message
    });
  }
};

// @desc    Get all contacts (for admin)
// @route   GET /api/contact
// @access  Private (add authentication later)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
      error: error.message
    });
  }
};
