import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Plus, Play, Pause, MoreVertical } from 'lucide-react';

export default function Campaigns() {
  const campaigns = [
    {
      id: '1',
      name: 'Appointment Reminders - December',
      type: 'Voice',
      status: 'active',
      progress: 68,
      total: 500,
      completed: 340,
      scheduled: '160 pending',
      successRate: '92%',
      createdAt: 'Dec 1, 2025'
    },
    {
      id: '2',
      name: 'Follow-up Calls - Cardiology',
      type: 'Voice',
      status: 'active',
      progress: 45,
      total: 150,
      completed: 67,
      scheduled: '83 pending',
      successRate: '88%',
      createdAt: 'Nov 28, 2025'
    },
    {
      id: '3',
      name: 'Health Checkup Reminders',
      type: 'SMS',
      status: 'scheduled',
      progress: 0,
      total: 800,
      completed: 0,
      scheduled: 'Starts Dec 5',
      successRate: '-',
      createdAt: 'Nov 25, 2025'
    },
    {
      id: '4',
      name: 'Patient Satisfaction Survey',
      type: 'WhatsApp',
      status: 'completed',
      progress: 100,
      total: 250,
      completed: 250,
      scheduled: 'Completed',
      successRate: '95%',
      createdAt: 'Nov 15, 2025'
    },
    {
      id: '5',
      name: 'Lab Results Notification',
      type: 'Voice',
      status: 'paused',
      progress: 22,
      total: 120,
      completed: 26,
      scheduled: 'Paused',
      successRate: '91%',
      createdAt: 'Nov 20, 2025'
    },
  ];

  const stats = [
    { label: 'Active Campaigns', value: '2', change: '+1' },
    { label: 'Total Calls This Month', value: '1,247', change: '+18%' },
    { label: 'Avg Success Rate', value: '91.5%', change: '+2.3%' },
    { label: 'Scheduled', value: '243', change: '-' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900">Campaigns</h1>
          <p className="text-gray-500 mt-1">Create and manage outbound call campaigns</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Campaign
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx}>
            <CardContent className="p-6">
              <div className="text-sm text-gray-500">{stat.label}</div>
              <div className="flex items-baseline gap-2 mt-2">
                <div className="text-2xl text-gray-900">{stat.value}</div>
                {stat.change !== '-' && (
                  <div className="text-sm text-green-600">{stat.change}</div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Campaigns List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Campaigns</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">Filter</Button>
              <Button variant="outline" size="sm">Sort</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <Link key={campaign.id} to={`/campaigns/${campaign.id}`}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50/50 transition-all cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-gray-900">{campaign.name}</h3>
                        <Badge 
                          variant={
                            campaign.status === 'active' ? 'default' :
                            campaign.status === 'scheduled' ? 'secondary' :
                            campaign.status === 'completed' ? 'outline' :
                            'destructive'
                          }
                        >
                          {campaign.status}
                        </Badge>
                        <Badge variant="outline">{campaign.type}</Badge>
                      </div>
                      <div className="flex items-center gap-6 mt-3 text-sm text-gray-600">
                        <span>{campaign.completed} / {campaign.total} completed</span>
                        <span>•</span>
                        <span>{campaign.scheduled}</span>
                        <span>•</span>
                        <span>Success: {campaign.successRate}</span>
                        <span>•</span>
                        <span>Created {campaign.createdAt}</span>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center gap-2">
                          <Progress value={campaign.progress} className="flex-1" />
                          <span className="text-sm text-gray-500">{campaign.progress}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {campaign.status === 'active' && (
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Pause className="w-4 h-4" />
                        </Button>
                      )}
                      {campaign.status === 'paused' && (
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
