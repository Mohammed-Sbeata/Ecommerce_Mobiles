# 📱 Ecommerce-Mobiles

**Ecommerce-Mobiles** is a backend Node.js + Express application for managing an online store that sells mobile phones. It provides RESTful API endpoints for product management, user login (if applicable), and order processing (optional).

---

## 🎯 Project Purpose

This project simulates the backend of an e-commerce platform focused on mobile devices. It is designed to:
- Manage mobile phone listings (CRUD operations)
- Handle HTTP requests through RESTful APIs
- Serve as the foundation for a full-stack or headless e-commerce application

---

## 🛠️ Technologies Used

- **Node.js** – Server runtime
- **Express.js** – Web framework
- **MongoDB** (optional) – NoSQL database for storing products/users/orders
- **Mongoose** (optional) – MongoDB ODM
- **dotenv** – Environment variable configuration
- **nodemon** – Auto-restart server during development
- **Postman** – For API testing

---


---

## ⚙️ Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/Mohammed-Sbeata/Ecommerce-Mobiles.git
   cd Ecommerce-Mobiles

2. **Install dependencies:**
```
npm install
```

3. **Set up environment variables in .env**

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce-mobiles
```

4. **Run the server:**
```
npm run dev
```

## 🔐 Optional Features
- User authentication (JWT)

- Order placement and tracking

- Admin panel for managing inventory

- Image upload for mobile products

## 👨‍💻 Author
Developed by [MohammedSbeata]
For questions or suggestions, feel free to open an issue or pull request.