# NVX JS Shop


<h3 align="center">🛒 A Modern E-commerce Application with Vanilla JavaScript 🛒</h3>

<p align="center">
  A feature-complete e-commerce web application built with a focus on core JavaScript, demonstrating best practices for building dynamic and interactive user experiences.
</p>

<p align="center">
  <!-- Badges/Shields -->
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-4.x-black?logo=express" alt="Express.js">
  <img src="https://img.shields.io/badge/CSS3-3-blue?logo=css3&logoColor=white" alt="CSS3">
</p>


---

## About The Project

`nvx-js-shop-svc` is a modern e-commerce application designed to showcase a full-featured online store built primarily with **vanilla JavaScript**. It serves as an excellent learning resource and a solid foundation for developers wanting to understand the core mechanics of a web application, from product listings and shopping cart management to user authentication, all without relying on a large frontend framework.

## ✨ Key Features

-   ✅ **Dynamic Product Catalog:** Browse product listings and view detailed information for each item.
-   ✅ **Shopping Cart Functionality:** Add, remove, and update quantities of products in the cart.
-   ✅ **User Authentication:** Secure user registration and login system.
-   ✅ **Order Management:** Users can view their order history and manage their account.
-   ✅ **Fully Responsive Design:** A clean and modern interface that works seamlessly on all devices.
-   ✅ **RESTful Backend:** A solid backend built with Node.js and Express to handle all business logic.

## 🛠️ Tech Stack

-   **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3
-   **Backend:** [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/)
-   **Database:** (Specify your database, e.g., MongoDB, PostgreSQL, or state it's file-based)
-   **Templating Engine:** (Specify if you use one, e.g., EJS, Pug)
-   **Package Manager:** [pnpm](https://pnpm.io/) (or `npm`/`yarn`)

## 🚀 Getting Started

Follow these instructions to get the project set up and running on your local machine.

### 1. Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18.x or later)
-   [pnpm](https://pnpm.io/installation) (or `npm`/`yarn`)

### 2. Installation & Setup

1.  **Clone the repository:**
    ```
    git clone [this project]
    cd project
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up Environment Variables:**
    -   Create a `.env` file in the project's root directory.
    -   Add the necessary configuration (e.g., database connection string, session secret).
        ```env
        # .env
        DATABASE_URL="your_database_connection_string"
        SESSION_SECRET="a_strong_random_secret_key"
        PORT="3000"
        ```

### 3. Running the Application

-   **Development Mode:**
    ```bash
    pnpm dev
    ```
-   **Production Mode:**
    ```bash
    pnpm start
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the shop.

## 📂 Project Structure

```
nvx-js-shop/
├── public/                 # Static assets (CSS, images, client-side JS)
├── src/
│   ├── controllers/      # Request handling logic
│   ├── models/           # Data models/schemas
│   ├── routes/           # API and web routes
│   ├── views/            # Server-side templates (e.g., EJS files)
│   └── app.js            # Main application entry point
├── .env.example
├── package.json
└── ...
```

## 🤝 Contributing

Contributions are welcome and greatly appreciated! If you have suggestions or want to improve the project, please feel free to:

1.  **Fork** the repository.
2.  Create your **Feature Branch** (`git checkout -b feature/AmazingFeature`).
3.  **Commit** your changes (`git commit -m 'feat: Add some AmazingFeature'`).
4.  **Push** to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/license/mit). See the `LICENSE` file for more details.

## 📬 Contact

**Satria Nur Saputro**

-   Email: [satrianursaputro06@gmail.com](mailto:satrianursaputro06@gmail.com)
