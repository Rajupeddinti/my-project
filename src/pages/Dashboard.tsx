import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Phone, 
  CheckCircle, 
  Calendar, 
  AlertCircle, 
  Star,
  ArrowUp,
  ArrowDown,
  Activity,
  Clock,
  MoreVertical,
  DollarSign,
  TrendingUp
} from 'lucide-react';

export default function Dashboard() {
  const kpis = [
    {
      title: 'Calls Today',
      value: '247',
      change: '+12%',
      trend: 'up',
      icon: Phone,
      color: 'blue'
    },
    {
      title: 'Success Rate',
      value: '94.2%',
      change: '+3.1%',
      trend: 'up',
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Confirmed Appts',
      value: '189',
      change: '+8%',
      trend: 'up',
      icon: Calendar,
      color: 'blue'
    },
    {
      title: 'Follow-ups Needed',
      value: '23',
      change: '-5%',
      trend: 'down',
      icon: AlertCircle,
      color: 'orange'
    },
    {
      title: 'Avg Feedback Score',
      value: '4.7',
      change: '+0.2',
      trend: 'up',
      icon: Star,
      color: 'yellow'
    },
  ];

  const timeline = [
    { time: '09:00', type: 'call', patient: 'Sarah Johnson', status: 'completed', outcome: 'Appointment confirmed' },
    { time: '09:15', type: 'call', patient: 'Michael Chen', status: 'completed', outcome: 'Rescheduled' },
    { time: '09:30', type: 'appointment', patient: 'Emily Davis', status: 'ongoing', outcome: 'Dr. Smith - Cardiology' },
    { time: '10:00', type: 'call', patient: 'James Wilson', status: 'scheduled', outcome: 'Follow-up reminder' },
    { time: '10:15', type: 'appointment', patient: 'Lisa Anderson', status: 'scheduled', outcome: 'Dr. Patel - General' },
  ];

  const followUps = [
    { patient: 'Robert Brown', reason: 'Post-surgery check', due: '2 hours', priority: 'high' },
    { patient: 'Maria Garcia', reason: 'Lab results discussion', due: '4 hours', priority: 'medium' },
    { patient: 'David Lee', reason: 'Prescription renewal', due: 'Tomorrow', priority: 'low' },
  ];

  const recentFeedback = [
    { patient: 'Sarah Johnson', rating: 5, comment: 'Very helpful and professional call', time: '1h ago' },
    { patient: 'Michael Chen', rating: 4, comment: 'Quick and efficient service', time: '2h ago' },
    { patient: 'Emily Davis', rating: 5, comment: 'AI was very understanding', time: '3h ago' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">{kpi.title}</p>
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
                  <div className={`w-10 h-10 rounded-lg bg-${kpi.color}-50 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 text-${kpi.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Revenue Widget */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Revenue Generated</CardTitle>
            <Badge variant="secondary">Today</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Total Revenue */}
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Revenue</p>
                    <p className="text-3xl text-gray-900 mt-1">$18,450</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+15.3%</span>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="pt-4 border-t border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Successful Calls</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Confirmed appointments</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-900">189 calls</p>
                  <p className="text-xs text-gray-500 mt-1">$14,175</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">Follow-up Calls</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Completed follow-ups</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-900">58 calls</p>
                  <p className="text-xs text-gray-500 mt-1">$4,275</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Avg Revenue/Call</p>
                  <p className="text-lg text-gray-900 mt-1">$75</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Conversion Rate</p>
                  <p className="text-lg text-gray-900 mt-1">76.5%</p>
                </div>
              </div>

              {/* Monthly Comparison */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Month to Date</span>
                  <span className="text-gray-900">$487,250</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-500">Last Month</span>
                  <span className="text-gray-600">$423,100</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <ArrowUp className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-green-600">+15.2% vs last month</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Timeline */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Today's Timeline</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="text-sm text-gray-500 w-14">{item.time}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">{item.patient}</span>
                      <Badge variant={item.status === 'completed' ? 'default' : item.status === 'ongoing' ? 'secondary' : 'outline'} className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{item.outcome}</p>
                  </div>
                  {item.type === 'call' ? (
                    <Phone className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Calendar className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Agent Status */}
        <Card>
          <CardHeader>
            <CardTitle>AI Agent Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Active</div>
                  <div className="text-xs text-gray-500">All systems operational</div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Current Queue</span>
                  <span className="text-gray-900">4 calls</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Avg Response Time</span>
                  <span className="text-gray-900">1.2s</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Success Rate</span>
                  <span className="text-gray-900">94.2%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Uptime Today</span>
                  <span className="text-gray-900">100%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Follow-up Tasks */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Follow-up Tasks</CardTitle>
              <Badge variant="secondary">{followUps.length} pending</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {followUps.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">{item.patient}</span>
                      <Badge 
                        variant={item.priority === 'high' ? 'destructive' : item.priority === 'medium' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {item.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{item.reason}</p>
                    <p className="text-xs text-gray-400 mt-1">Due in {item.due}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Feedback */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Feedback</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentFeedback.map((item, idx) => (
                <div key={idx} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900">{item.patient}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">"{item.comment}"</p>
                  <p className="text-xs text-gray-400 mt-2">{item.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
