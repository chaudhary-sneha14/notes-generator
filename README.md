# 📚 AI Notes Generator

An AI-powered learning platform that generates structured, exam-focused notes for any topic and difficulty level. The application creates detailed notes, diagrams, charts, and important exam questions using AI, helping students learn faster and prepare more effectively.

---

## 🚀 Features

✨ Generate AI-powered notes for any topic

📚 Choose different difficulty levels (Beginner, Intermediate, Advanced)

📊 Automatic diagrams, flowcharts, and visual explanations

❓ Important exam questions with priority ratings (⭐⭐⭐, ⭐⭐⭐⭐, ⭐⭐⭐⭐⭐)

🕘 Notes history and saved notes access

📄 Download generated notes as PDF

🔐 Secure Google Authentication

💳 Credit-based system with Stripe payment integration

🎁 50 free credits for every new user

📱 Fully responsive design for mobile, tablet, and desktop

⚡ Fast and intuitive user experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

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

* PDFKit / jsPDF

---

## 📌 How It Works

### Step 1: Login

Users sign in securely using Google Authentication.

### Step 2: Free Credits

Every new user receives 50 free credits.

### Step 3: Generate Notes

Enter:

* Topic Name
* Difficulty Level

### Step 4: AI Processing

The Gemini AI generates:

✅ Structured Notes

✅ Key Concepts

✅ Diagrams & Charts

✅ Visual Explanations

✅ Important Exam Questions

### Step 5: Save & Download

Users can:

* Save notes permanently
* View previous notes anytime
* Download notes as PDF

### Step 6: Purchase Credits

When credits run low, users can purchase additional credits through Stripe.

---

## 💳 Credit System

| Action                  | Credits Used |
| ----------------------- | ------------ |
| Generate Basic Notes    | 1 Credit     |
| Generate Detailed Notes | 2 Credits    |
| Download PDF            | Free         |

### Free Plan

* 50 Free Credits

### Paid Plan

* Purchase additional credits through Stripe

---

## 📂 Project Structure

```bash
AI-Notes-Generator/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── assets/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   └── utils/
│
├── uploads/
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/AI-Notes-Generator.git
```

### 2. Navigate to Project Folder

```bash
cd AI-Notes-Generator
```

### 3. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

### 4. Configure Environment Variables

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

### 5. Start Backend Server

```bash
npm run server
```

### 6. Start Frontend

```bash
npm run dev
```

---

## 🎯 Future Improvements

* Personalized study recommendations
* AI-generated flashcards
* AI-generated quizzes and MCQs
* Dark mode support
* Notes sharing with friends
* Voice-to-notes generation
* Multi-language support
* Study progress analytics

---

## 🔒 Security Features

* Google OAuth Authentication
* JWT Token Authorization
* Protected Routes
* Secure Stripe Payments
* Encrypted User Sessions

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Create a Pull Request

---

## 📬 Contact

For suggestions, feedback, or collaboration opportunities, feel free to connect.

### Developer

**Sneha Chaudhary**

📧 Email: [your-email@example.com](mailto:snehachaudhary1411@gmail.com)

💼 LinkedIn: your-[linkedin-profile](https://www.linkedin.com/in/sneha-chaudhary-a0a4652b4)



---

⭐ If you found this project useful, don't forget to give it a star on GitHub!
