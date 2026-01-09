import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Download, TrendingUp, TrendingDown } from 'lucide-react'
import './Analytics.css'

const Analytics = () => {
  const revenueData = [
    { month: 'Jul', revenue: 1200000, orders: 4500 },
    { month: 'Aug', revenue: 1500000, orders: 5200 },
    { month: 'Sep', revenue: 1800000, orders: 6100 },
    { month: 'Oct', revenue: 2100000, orders: 6800 },
    { month: 'Nov', revenue: 2300000, orders: 7200 },
    { month: 'Dec', revenue: 2450000, orders: 7800 },
  ]

  const cityData = [
    { name: 'Mumbai', revenue: 2450000, orders: 7800, growth: 12.5 },
    { name: 'Delhi', revenue: 1890000, orders: 6200, growth: 8.3 },
    { name: 'Bangalore', revenue: 1650000, orders: 5400, growth: 15.2 },
    { name: 'Pune', revenue: 980000, orders: 3200, growth: 10.8 },
  ]

  const categoryData = [
    { name: 'Pizza', value: 35, revenue: 875000 },
    { name: 'North Indian', value: 25, revenue: 625000 },
    { name: 'Chinese', value: 20, revenue: 500000 },
    { name: 'Biryani', value: 15, revenue: 375000 },
    { name: 'Others', value: 5, revenue: 125000 },
  ]

  const COLORS = ['#2E7D32', '#4CAF50', '#66BB6A', '#81C784', '#A5D6A7']

  const funnelData = [
    { stage: 'App Opens', count: 50000, percentage: 100 },
    { stage: 'Browse', count: 35000, percentage: 70 },
    { stage: 'Add to Cart', count: 15000, percentage: 30 },
    { stage: 'Checkout', count: 8500, percentage: 17 },
    { stage: 'Payment', count: 7800, percentage: 15.6 },
  ]

  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1>Analytics & Reports</h1>
        <button className="export-btn">
          <Download size={18} />
          Export Report
        </button>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Revenue</h3>
          <p className="metric-value">₹{(2450000).toLocaleString()}</p>
          <div className="metric-change positive">
            <TrendingUp size={16} />
            +15.2% vs last month
          </div>
        </div>
        <div className="metric-card">
          <h3>Total Orders</h3>
          <p className="metric-value">7,800</p>
          <div className="metric-change positive">
            <TrendingUp size={16} />
            +12.5% vs last month
          </div>
        </div>
        <div className="metric-card">
          <h3>Avg Order Value</h3>
          <p className="metric-value">₹314</p>
          <div className="metric-change positive">
            <TrendingUp size={16} />
            +3.2% vs last month
          </div>
        </div>
        <div className="metric-card">
          <h3>Customer Retention</h3>
          <p className="metric-value">68%</p>
          <div className="metric-change positive">
            <TrendingUp size={16} />
            +5.1% vs last month
          </div>
        </div>
      </div>

      <div className="charts-row">
        <div className="chart-card">
          <h3>Revenue & Orders Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#2E7D32" strokeWidth={2} name="Revenue (₹)" />
              <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#4CAF50" strokeWidth={2} name="Orders" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="charts-row">
        <div className="chart-card">
          <h3>Revenue by City</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#2E7D32" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Revenue by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="tables-row">
        <div className="table-card">
          <h3>City Performance</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Revenue</th>
                <th>Orders</th>
                <th>Growth</th>
              </tr>
            </thead>
            <tbody>
              {cityData.map((city) => (
                <tr key={city.name}>
                  <td><strong>{city.name}</strong></td>
                  <td>₹{city.revenue.toLocaleString()}</td>
                  <td>{city.orders.toLocaleString()}</td>
                  <td>
                    <span className="growth-badge positive">
                      <TrendingUp size={14} />
                      +{city.growth}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-card">
          <h3>Conversion Funnel</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Count</th>
                <th>Conversion %</th>
              </tr>
            </thead>
            <tbody>
              {funnelData.map((stage) => (
                <tr key={stage.stage}>
                  <td><strong>{stage.stage}</strong></td>
                  <td>{stage.count.toLocaleString()}</td>
                  <td>
                    <div className="conversion-bar">
                      <div className="conversion-fill" style={{ width: `${stage.percentage}%` }} />
                      <span>{stage.percentage}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Analytics
