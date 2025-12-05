import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { 
  Phone, 
  CheckCircle, 
  XCircle, 
  Clock,
  Download,
  TrendingUp,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Analytics() {
  const kpis = [
    { label: 'Total Calls', value: '2,847', change: '+18%', trend: 'up', icon: Phone },
    { label: 'Success Rate', value: '91.5%', change: '+2.3%', trend: 'up', icon: CheckCircle },
    { label: 'Avg Call Duration', value: '2:34', change: '-12s', trend: 'up', icon: Clock },
    { label: 'Failed Calls', value: '243', change: '-8%', trend: 'down', icon: XCircle },
  ];

  const volumeData = [
    { day: 'Mon', calls: 320 },
    { day: 'Tue', calls: 380 },
    { day: 'Wed', calls: 420 },
    { day: 'Thu', calls: 390 },
    { day: 'Fri', calls: 450 },
    { day: 'Sat', calls: 280 },
    { day: 'Sun', calls: 190 },
  ];

  const funnelData = [
    { stage: 'Total Calls', value: 2847 },
    { stage: 'Connected', value: 2604 },
    { stage: 'Engaged', value: 2392 },
    { stage: 'Successful', value: 2145 },
  ];

  const outcomeData = [
    { name: 'Confirmed', value: 1847, color: '#10b981' },
    { name: 'Rescheduled', value: 298, color: '#f59e0b' },
    { name: 'No Answer', value: 243, color: '#6b7280' },
    { name: 'Voicemail', value: 189, color: '#8b5cf6' },
    { name: 'Declined', value: 124, color: '#ef4444' },
  ];

  const feedbackTrend = [
    { month: 'Jul', rating: 4.2 },
    { month: 'Aug', rating: 4.3 },
    { month: 'Sep', rating: 4.5 },
    { month: 'Oct', rating: 4.6 },
    { month: 'Nov', rating: 4.7 },
    { month: 'Dec', rating: 4.7 },
  ];

  const noShowData = [
    { department: 'Cardiology', rate: 8 },
    { department: 'General', rate: 12 },
    { department: 'Orthopedics', rate: 6 },
    { department: 'Neurology', rate: 10 },
    { department: 'Pediatrics', rate: 5 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900">Analytics</h1>
          <p className="text-gray-500 mt-1">Performance insights and metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="last-30">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-7">Last 7 days</SelectItem>
              <SelectItem value="last-30">Last 30 days</SelectItem>
              <SelectItem value="last-90">Last 90 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <Card key={idx}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{kpi.label}</p>
                    <p className="text-2xl text-gray-900 mt-2">{kpi.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {kpi.trend === 'up' ? (
                        <ArrowUp className="w-3 h-3 text-green-600" />
                      ) : (
                        <ArrowDown className="w-3 h-3 text-green-600" />
                      )}
                      <span className="text-xs text-green-600">{kpi.change}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call Volume */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Call Volume Trend</CardTitle>
            <Select defaultValue="week">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={volumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="calls" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Call Funnel */}
        <Card>
          <CardHeader>
            <CardTitle>Call Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {funnelData.map((stage, idx) => {
                const percentage = (stage.value / funnelData[0].value) * 100;
                return (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-700">{stage.stage}</span>
                      <span className="text-sm text-gray-900">{stage.value.toLocaleString()}</span>
                    </div>
                    <div className="h-12 bg-gray-100 rounded-lg overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 flex items-center justify-end px-4 text-white text-sm transition-all"
                        style={{ width: `${percentage}%` }}
                      >
                        {percentage.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Call Outcomes */}
        <Card>
          <CardHeader>
            <CardTitle>Call Outcomes Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={outcomeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                //   label={({ name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {outcomeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {outcomeData.map((outcome, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: outcome.color }} />
                  <span className="text-sm text-gray-700">{outcome.name}: {outcome.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feedback Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Feedback Rating Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={feedbackTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis domain={[0, 5]} stroke="#9ca3af" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="rating" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* No-Show Rate */}
        <Card>
          <CardHeader>
            <CardTitle>No-Show Rate by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={noShowData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#9ca3af" />
                <YAxis dataKey="department" type="category" stroke="#9ca3af" width={100} />
                <Tooltip />
                <Bar dataKey="rate" fill="#ef4444" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
