# Taste Exprez Admin Panel

Admin panel for Taste Exprez food delivery platform built with React and Vite.

## Features

✅ **Dashboard** - Real-time metrics, live orders, alerts, charts with mock data
✅ **User Management** - Customers, Delivery Partners, Admin Roles with full tables and mock data
✅ **Restaurant Management** - Restaurant listings with stats, commission, status management
✅ **Order Management** - Order tracking table with status filters and live updates
✅ **Payments & Finance** - Transaction history, restaurant settlements, delivery payouts with charts
✅ **Pricing & Commission** - Commission rules, delivery fees, packaging charges, convenience fees
✅ **Offers & Coupons** - Coupon management with usage analytics and campaign tracking
✅ **Reviews & Ratings** - Review moderation with approve/hide actions, ratings analysis
✅ **Customer Support** - Ticket management system with status tracking and priority levels
✅ **Logistics & Delivery** - Zone management, delivery partner tracking, configuration
✅ **Analytics & Reports** - Revenue charts, city performance, conversion funnel, category breakdown
✅ **System Settings** - App version control, feature toggles, notification templates
✅ **Security & Compliance** - Audit logs, fraud detection alerts, GDPR data requests
✅ **CMS** - Banner management, collections, city-specific content

All pages now include comprehensive mock data and fully functional UI components!

## UI Theme

- **Primary Color**: Green (#2E7D32)
- **Light Green**: #4CAF50
- **White**: #FFFFFF
- **Off-white background**: #FAFAFA
- Clean, modern design matching the Flutter app

## Installation

```bash
cd admin-panel
npm install
```

## Development

```bash
npm run dev
```

The app will open at `http://localhost:3001`

## Login

Use any email and password to login (mock authentication for now).

## Build

```bash
npm run build
```

## Deployment to Vercel

The project is configured for Vercel deployment with proper routing support.

### Steps to Deploy:

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository: `kartik18012006/fooddelivery`
   - Vercel will auto-detect Vite framework

2. **Build Settings (Auto-detected):**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically deploy on every push to `main` branch

4. **Access Your App:**
   - After deployment, visit the provided Vercel URL
   - Login with: `test@gmail.com` / `123456`

### Important Notes:

- The `vercel.json` file is configured to handle client-side routing
- All routes are rewritten to `/index.html` so React Router works correctly
- Static assets are cached for optimal performance
- The app will automatically redeploy when you push to GitHub

## Project Structure

```
admin-panel/
├── src/
│   ├── components/
│   │   └── Layout/        # Sidebar, Header, Layout
│   ├── pages/
│   │   ├── Auth/          # Login
│   │   ├── Dashboard/     # Main dashboard
│   │   ├── UserManagement/
│   │   ├── RestaurantManagement/
│   │   ├── OrderManagement/
│   │   ├── Payments/
│   │   ├── Pricing/
│   │   ├── Offers/
│   │   ├── Reviews/
│   │   ├── Support/
│   │   ├── Logistics/
│   │   ├── Analytics/
│   │   ├── Settings/
│   │   ├── Security/
│   │   └── CMS/
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## Tech Stack

- **React 18** - UI library
- **React Router DOM** - Routing
- **Vite** - Build tool
- **Recharts** - Charts and graphs
- **Lucide React** - Icons
- **Date-fns** - Date utilities

## Next Steps

Each page is currently a placeholder. To fully implement:

1. Connect to backend API
2. Add data tables with sorting/filtering
3. Implement CRUD operations
4. Add form validations
5. Add real-time updates (WebSocket)
6. Implement authentication with JWT
7. Add role-based access control
8. Add export functionality for reports

## Notes

- All pages are set up with routing
- Dashboard has sample data and charts
- UI theme matches Flutter app (green/white)
- Responsive design
- Clean, professional interface

