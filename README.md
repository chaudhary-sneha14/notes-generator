# 📚 AI Notes Generator

An AI-powered study companion that generates structured, exam-focused notes for any topic and difficulty level. The platform creates detailed notes, diagrams, flowcharts, visual explanations, and important exam questions to help students learn faster and prepare more effectively.

---

## 🚀 Features

✨ Generate detailed AI-powered notes for any topic

📚 Multiple difficulty levels (Beginner, Intermediate, Advanced)

📊 AI-generated diagrams, flowcharts, and charts

❓ Exam-focused questions with priority ratings (⭐⭐⭐, ⭐⭐⭐⭐, ⭐⭐⭐⭐⭐)

🕘 Save notes and access them anytime

📄 Download notes as PDF

🔐 Secure Google Authentication

💳 Credit-based system with Stripe integration

🎁 50 Free Credits for every new user

📱 Fully responsive design for mobile, tablet, and desktop

⚡ Fast and user-friendly interface

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### AI Integration

* Gemini API

### Authentication

* Google OAuth
* JWT Authentication

### Payments

* Stripe Payment Gateway

### PDF Generation

* jsPDF / PDFKit

---

## 🌟 How It Works

### Step 1: Sign In

Users securely log in using Google Authentication.

### Step 2: Get Free Credits

Every new user receives **50 free credits** upon registration.

### Step 3: Generate Notes

Enter:

* Topic Name
* Difficulty Level

### Step 4: AI Processing

The Gemini AI generates:

✅ Structured Notes

✅ Key Concepts

✅ Diagrams & Flowcharts

✅ Visual Explanations

✅ Exam-Oriented Questions

✅ Priority-Based Questions (⭐⭐⭐ to ⭐⭐⭐⭐⭐)

### Step 5: Save & Download

Users can:

* Save generated notes
* Access notes history
* Download notes as PDF

### Step 6: Buy More Credits

Users can purchase additional credits using Stripe when their free credits are exhausted.

---

## 💳 Credit System

| Action                  | Credits Used |
| ----------------------- | ------------ |
| Generate Basic Notes    | 1 Credit     |
| Generate Advanced Notes | 2 Credits    |
| Download PDF            | Free         |

### Free Plan

* 50 Free Credits

### Premium Plan

* Purchase additional credits anytime using Stripe

---

## 📂 Project Structure

```bash
AI-Notes-Generator/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── context/
│   ├── services/
│   └── utils/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   ├── services/
│   └── utils/
│
├── uploads/
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/AI-Notes-Generator.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd AI-Notes-Generator
```

### 3️⃣ Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

### 4️⃣ Configure Environment Variables

Create a `.env` file inside the server directory:

```env
PORT=5000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

STRIPE_WEBHOOK_SECRET=your_webhook_secret

CLIENT_URL=http://localhost:5173
```

### 5️⃣ Start the Backend Server

```bash
npm run server
```

### 6️⃣ Start the Frontend

```bash
npm run dev
```

---

## 📸 Screenshots

### Login Page

<img width="1919" height="879" alt="Login" src="https://github.com/user-attachments/assets/3554a884-2bfe-4363-ac56-dbd228397c9e" />

---

### Home Page

<img width="1915" height="874" alt="Home" src="https://github.com/user-attachments/assets/f6411024-b589-4820-b10b-1c213b89494e" />

---

### Notes Generator Input

<img width="1919" height="843" alt="Notes Generator" src="https://github.com/user-attachments/assets/60819930-f321-454a-91a2-70506630a987" />

---

### Generated Notes

<img width="1919" height="890" alt="Generated Notes" src="https://github.com/user-attachments/assets/ef832404-18d5-4fa0-b2f1-eeeabb6d5102" />

---

### Notes History

<img width="1919" height="870" alt="History" src="https://github.com/user-attachments/assets/4281171e-a800-452f-8e88-1c10ce7dfe64" />

---

### Pricing Page

<img width="1916" height="867" alt="Pricing" src="https://github.com/user-attachments/assets/901686f9-c85b-466e-a686-4d3cd5fc49ab" />

---

## 🔒 Security Features

* Google OAuth Authentication
* JWT-Based Authorization
* Protected Routes
* Secure Stripe Payment Processing
* Environment Variable Protection
* User Session Management

---

## 🎯 Future Improvements

* AI-generated Flashcards
* AI Quiz Generator
* Personalized Study Recommendations
* Dark Mode Support
* Voice-to-Notes Generation
* Notes Sharing Feature
* Multi-Language Support
* Learning Analytics Dashboard
* AI Study Planner
* Collaborative Study Rooms

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developer

### Sneha Chaudhary

🎓 B.Tech Computer Science Student

💻 Full Stack Developer

🤖 AI & MERN Stack Enthusiast

📧 Email: [snehachaudhary1411@gmail.com](mailto:snehachaudhary1411@gmail.com)

💼 LinkedIn: [Sneha Chaudhary](https://www.linkedin.com/in/sneha-chaudhary-a0a4652b4)

🌐 Live: https://notes-generator-client.onrender.com

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

Your support motivates further development and improvements.

Happy Learning! 🚀
