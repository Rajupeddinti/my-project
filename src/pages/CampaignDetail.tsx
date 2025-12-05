import { useParams } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  Edit, 
  MoreVertical,
  TrendingUp,
  Users,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

export default function CampaignDetail() {
  const { id } = useParams();

  const recipients = [
    { id: 1, name: 'Sarah Johnson', phone: '+1 234-567-8901', status: 'completed', outcome: 'Confirmed', attempts: 1, lastCall: '2h ago' },
    { id: 2, name: 'Michael Chen', phone: '+1 234-567-8902', status: 'completed', outcome: 'Rescheduled', attempts: 1, lastCall: '3h ago' },
    { id: 3, name: 'Emily Davis', phone: '+1 234-567-8903', status: 'in-progress', outcome: 'Calling...', attempts: 1, lastCall: 'Now' },
    { id: 4, name: 'James Wilson', phone: '+1 234-567-8904', status: 'pending', outcome: 'Scheduled', attempts: 0, lastCall: '-' },
    { id: 5, name: 'Lisa Anderson', phone: '+1 234-567-8905', status: 'failed', outcome: 'No Answer', attempts: 3, lastCall: '1d ago' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <a href="/campaigns">
              <ArrowLeft className="w-4 h-4" />
            </a>
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-gray-900">Appointment Reminders - December</h1>
              <Badge>Active</Badge>
              <Badge variant="outline">Voice</Badge>
            </div>
            <p className="text-gray-500 mt-1">Campaign ID: #{id}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Pause className="w-4 h-4" />
            Pause
          </Button>
          <Button variant="outline" className="gap-2">
            <Edit className="w-4 h-4" />
            Edit
          </Button>
          <Button variant="outline" size="icon">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Progress */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-gray-500">Campaign Progress</div>
              <div className="text-2xl text-gray-900 mt-1">340 / 500 completed</div>
            </div>
            <div className="text-3xl text-gray-900">68%</div>
          </div>
          <Progress value={68} className="h-2" />
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl text-green-600">312</div>
              <div className="text-sm text-gray-600 mt-1">Successful</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl text-yellow-600">28</div>
              <div className="text-sm text-gray-600 mt-1">Rescheduled</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl text-red-600">14</div>
              <div className="text-sm text-gray-600 mt-1">Failed</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl text-gray-600">160</div>
              <div className="text-sm text-gray-600 mt-1">Pending</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Success Rate</p>
                <p className="text-xl text-gray-900 mt-1">92%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Avg Duration</p>
                <p className="text-xl text-gray-900 mt-1">2:15</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Recipients</p>
                <p className="text-xl text-gray-900 mt-1">500</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Est. Completion</p>
                <p className="text-xl text-gray-900 mt-1">Dec 3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="recipients">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recipients">Recipients</TabsTrigger>
          <TabsTrigger value="live">Live Activity</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">Campaign Type</div>
                  <div className="text-sm text-gray-900 mt-1">Voice Call Campaign</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Purpose</div>
                  <div className="text-sm text-gray-900 mt-1">Appointment reminders for upcoming December appointments</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Schedule</div>
                  <div className="text-sm text-gray-900 mt-1">Started: Dec 1, 2025 09:00 AM</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Script</div>
                  <div className="text-sm text-gray-900 mt-1 p-3 bg-gray-50 rounded-lg">
                    "Hello [Patient Name], this is City Hospital calling to remind you about your appointment with [Doctor Name] on [Date] at [Time]..."
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recipients" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recipients ({recipients.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Outcome</TableHead>
                    <TableHead>Attempts</TableHead>
                    <TableHead>Last Call</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recipients.map((recipient) => (
                    <TableRow key={recipient.id}>
                      <TableCell className="text-gray-900">{recipient.name}</TableCell>
                      <TableCell className="text-gray-600">{recipient.phone}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            recipient.status === 'completed' ? 'default' :
                            recipient.status === 'in-progress' ? 'secondary' :
                            recipient.status === 'failed' ? 'destructive' :
                            'outline'
                          }
                        >
                          {recipient.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">{recipient.outcome}</TableCell>
                      <TableCell className="text-gray-600">{recipient.attempts}</TableCell>
                      <TableCell className="text-gray-600">{recipient.lastCall}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="live" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-center py-8">Live activity monitoring would be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-center py-8">Detailed results and analytics would be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-center py-8">Campaign settings would be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
