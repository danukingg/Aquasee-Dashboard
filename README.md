# Aquasee Dashboard

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Status-Frontend%20Prototype-orange?style=for-the-badge)

Aquasee-Dashboard is a web-based smart pond monitoring and automation control dashboard prototype. It focuses on visualizing water parameter data and providing a real-time IoT device control interface.

## Project Gallery

| Dashboard View | Mobile View |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/04b73224-b0bd-4f54-9e50-ce91087e413a" alt="Dashboard" height="500" /> | <img src="https://github.com/user-attachments/assets/25595df9-881a-4870-8be6-c9e4504b884a"
 alt="Mobile" height="500" /> |

## How to Start

Follow these steps to run the project on your local machine:

### Prerequisites
Make sure you have **Node.js** and **npm** installed.

### Installation & Running

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/danukingg/Aquasee-Dashboard.git](https://github.com/danukingg/Aquasee-Dashboard.git)
    cd Aquasee-Dashboard
    ```
    *(Or if you downloaded the ZIP file, extract it and open the terminal in the root folder)*

2.  **Install Dependencies**
    Run this command to install the required packages:
    ```bash
    npm install
    ```

3.  **Run the Development Server**
    Start the application using the workspace command:
    ```bash
    npm run dev --workspace=apps/dashboard
    ```

4.  **Open in Browser**
    The app will usually run at `http://localhost:5173` (check your terminal for the exact link).

---

## 🛠 Tech Stack

* **Framework:** React 19
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (Custom Theme & Dark Mode)

## Design Specifications

* **Typography:** Inter (via Google Fonts) - Light (300), Regular (400), Bold (700)
* **Color Palette:**
    * Primary: `#0d9be7`
    * Surface Dark: `#1a262d`
    * Text Primary: `#ffffff`
* **Assets:** Icons (Material Symbols / Lucide React)

## About
This project focuses on implementing precise and responsive UI/UX. It is currently in the **frontend (client-side)** phase with no backend connectivity.
