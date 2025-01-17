const express = require('express');
const cors = require('cors');
const axios = require('axios');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File Upload Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowedTypes = /pdf|docx|txt/;
        const isAllowed =
            allowedTypes.test(path.extname(file.originalname).toLowerCase()) &&
            allowedTypes.test(file.mimetype);
        return isAllowed ? cb(null, true) : cb(new Error('Only PDF, DOCX, and TXT files are allowed.'));
    },
}).single('file');

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
    host: 'mail.t-talents.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Helper Functions
const verifyRecaptcha = async (token) => {
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
        params: {
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: token,
        },
    });
    return response.data.success;
};

const sendEmail = async (mailOptions) => {
    await transporter.sendMail(mailOptions);
};

// Route general
app.post('/send-general', async (req, res) => {
    const { firstName, lastName, email, phone, subject, message, recaptchaToken } = req.body;

    if (!firstName || !lastName || !email || !phone || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
        if (!isRecaptchaValid) {
            return res.status(400).json({ error: 'Invalid reCAPTCHA token.' });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Inquiry from ${firstName} ${lastName}`,
            text: `
                Name: ${firstName} ${lastName}
                Email: ${email}
                Phone: ${phone}
                Subject: ${subject}
                Message: ${message}
            `,
        };

        await sendEmail(mailOptions);
        res.status(200).json({ message: 'Inquiry sent successfully!' });
    } catch (error) {
        console.error('Error:', error.message || error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Route CV
app.post('/send-cv', (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('File upload error:', err.message || err);
            return res.status(400).json({ error: err.message });
        }

        const { firstName, lastName, email, phone, jobTitle, country, recaptchaToken } = req.body;

        if (!firstName || !lastName || !email || !phone || !jobTitle || !country || !req.file) {
            return res.status(400).json({ error: 'All fields and file upload are required.' });
        }

        try {
            const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
            if (!isRecaptchaValid) {
                return res.status(400).json({ error: 'Invalid reCAPTCHA token.' });
            }

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.RECIPIENT_EMAIL,
                subject: `CV Submission from ${firstName} ${lastName}`,
                text: `
                    Name: ${firstName} ${lastName}
                    Email: ${email}
                    Phone: ${phone}
                    Job Title: ${jobTitle}
                    Country: ${country}
                `,
                attachments: [
                    {
                        filename: req.file.originalname,
                        path: req.file.path,
                    },
                ],
            };

            await sendEmail(mailOptions);

            // Clean up uploaded file
            fs.unlinkSync(req.file.path);
            res.status(200).json({ message: 'CV submitted successfully!' });
        } catch (error) {
            console.error('Error:', error.message || error);
            res.status(500).json({ error: 'Internal server error.' });

            // Attempt to clean up file if an error occurs
            if (req.file && req.file.path) {
                try {
                    fs.unlinkSync(req.file.path);
                } catch (cleanupError) {
                    console.error('Cleanup error:', cleanupError.message || cleanupError);
                }
            }
        }
    });
});

// Route jd
app.post('/send-jd', (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('File upload error:', err.message || err);
            return res.status(400).json({ error: err.message });
        }

        const { firstName, lastName, email, phone, jobTitle, country, company, service, message, recaptchaToken } = req.body;

        if (!firstName || !lastName || !email || !phone || !jobTitle || !country || !company || !service || !message || !req.file) {
            return res.status(400).json({ error: 'All fields and file upload are required.' });
        }

        try {
            const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
            if (!isRecaptchaValid) {
                return res.status(400).json({ error: 'Invalid reCAPTCHA token.' });
            }

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.RECIPIENT_EMAIL,
                subject: `New Job Request from ${company} `,
                text: `
                    Name: ${firstName} ${lastName}
                    Email: ${email}
                    Phone: ${phone}
                    Job Title: ${jobTitle}
                    Country: ${country}
                    Company: ${company}
                    Service: ${service}
                `,
                attachments: [
                    {
                        filename: req.file.originalname,
                        path: req.file.path,
                    },
                ],
            };

            await sendEmail(mailOptions);

            // Clean up uploaded file
            fs.unlinkSync(req.file.path);
            res.status(200).json({ message: 'Job Description submitted successfully!' });
        } catch (error) {
            console.error('Error:', error.message || error);
            res.status(500).json({ error: 'Internal server error.' });

            // Attempt to clean up file if an error occurs
            if (req.file && req.file.path) {
                try {
                    fs.unlinkSync(req.file.path);
                } catch (cleanupError) {
                    console.error('Cleanup error:', cleanupError.message || cleanupError);
                }
            }
        }
    });

});
// Default Route
app.get('/', (req, res) => {
    res.status(200).send('Backend Server is Running!');
});

// Start Server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://api.t-talents.com`);
});