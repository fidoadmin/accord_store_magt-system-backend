Fido Inventory Management
Fido Inventory Management is a robust system designed to streamline and manage your inventory efficiently. This project includes both frontend and backend code, leveraging modern web technologies and practices.

Table of Contents
Introduction
Features
Tech Stack
Installation
Usage
Project Structure
Deployment
Contributing
Team Members
License
Introduction
Fido Inventory Management provides a comprehensive solution for tracking and managing inventory. It aims to reduce inconsistencies, prevent losses, and improve overall efficiency.

Features
Scanning and storing items in an organized manner
Generating and storing delivery notes, challans, and invoices
Viewing current inventory with notifications for low and expiring items
Searching for existing inventory for dispatch
Billing, challan, and invoice generation for intra-organization transfer or final sale
Tech Stack
Frontend: Next.js, React.js, TailwindCSS, TypeScript
Backend: Node.js, Express, PostgreSQL

Deployment: GitHub, Vercel
Installation
Prerequisites
Node.js (v14.2 or later)
npm or yarn
PostgreSQL
Steps
Clone the repository:

git clone https://github.com/your-org/inventory-management-backend.git
cd inventory-management-backend

cd ../backend
npm install
Set up environment variables:

Create a .env file in both frontend and backend directories with the necessary configurations.
Example .env file for Backend:
PORT=your_port
DB_NAME=your_database_name
DB_HOST=your_host
DB_USER=your_username
DB_PASS=your_passwprd
Start the development servers:


cd ../backend
npm start

Backend
The backend runs on http://localhost:5000.
API endpoints for inventory management and authentication are available.
Project Structure
inventory-management-backend/

│   ├── src/
│   ├── package.json
│   ├── .env
│   └── other backend files...
├── .gitignore
├── README.md
└── other-root-files
**code format
-Variables which will be sent in from the portal in the body, query, parmas pascal case example like BranchId

-Variable which will be used node  will be in the camel case example like branchId

-Variable which are used in the database function should be in the small case example like branchId

-and the table name in the database should be in the plural format  example like branches
Deployment
Vercel

For deployment, we are currently using Vercel for the frontend. To deploy, push your changes to the main branch on GitHub, and Vercel will automatically deploy the updates.
GitHub Actions
For CI/CD, configure GitHub Actions workflows to automate tests and deployments. Contributing

We welcome contributions from the team! To contribute:
    Clone the repository.
    Create a new branch (git checkout -b feature/your-feature-name).
    Make your changes.
    Commit your changes (git commit -m 'Add some feature').
    Push to the branch (git push origin feature/your-feature-name).
    Create a pull request.
Team Members
Shweta Shrestha - Team Lead, Backend Developer
Bhuwan Sharma - Backend Developer
Sujhan Ghimire - Frontend Developer
License
This project is proprietary and cannot be replicated or used for personal or other business purposes without explicit permission.
