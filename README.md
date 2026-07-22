# FarmDirect - Farmer Marketplace Platform

A React-based marketplace dashboard that connects farmers directly with consumers, enabling product management, order tracking, and real-time farm business analytics.

## Features

- **Role-based Authentication** — Sign-up and login flows for both farmers and consumers with role-specific forms and data
- **Dashboard Analytics** — Track total revenue, active products, total orders, and pending orders with visual stats cards
- **Product Management** — Full CRUD operations with image upload, category selection, stock tracking, and search/filter
- **Order Management** — View, filter, and confirm incoming orders with status badges (pending / confirmed / completed)
- **Low Stock Alerts** — Automatically highlights products running low on inventory
- **Responsive Design** — Mobile-first layout with a slide-out navigation drawer on small screens and a fixed sidebar on desktop
- **Local Storage Persistence** — Products and orders persist across sessions using `localStorage`
- **Toast Notifications** — Success and error feedback for all user actions

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Build | Vite |
| Linting | ESLint |

## Project Structure

```
src/
├── components/
│   ├── dashboard/          # DashboardPage, StatsCard, RecentOrders, LowStockAlert
│   ├── layout/             # Layout, Sidebar, Header
│   ├── orders/             # OrdersPage, OrderCard, OrderFilters
│   ├── products/           # ProductsPage, ProductCard, ProductModal
│   └── ui/                 # Badge, Button, Toast
├── data/
│   └── mockData.js         # Sample products, orders, and categories
├── hooks/
│   ├── useLocalStorage.js  # localStorage persistence hook
│   └── Toasthook.js        # Toast notification state hook
├── pages/
│   ├── login.jsx           # Authentication login page
│   └── signup.jsx          # Registration page
├── App.jsx                 # Root component with routing and context
├── main.jsx                # Application entry point
└── index.css               # Tailwind CSS import
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Usage

1. Create an account as a **Farmer** or **Consumer** via the sign-up page
2. Log in to access the dashboard
3. **Dashboard** — View revenue, product count, order stats, recent orders, and low stock alerts
4. **Products** — Add, edit, search, and delete products with images and stock tracking
5. **Orders** — View incoming orders, filter by status, and confirm pending orders
