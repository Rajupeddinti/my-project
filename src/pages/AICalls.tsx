import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { 
  Phone, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Activity, 
  Search,
  Play,
  FileText,
  TrendingUp
} from 'lucide-react';

export default function AICalls() {
  const liveCallQueue = [
    { id: 1, patient: 'Sarah Johnson', purpose: 'Appointment Reminder', waitTime: '2 min', priority: 'high' },
    { id: 2, patient: 'Michael Chen', purpose: 'Follow-up Call', waitTime: '5 min', priority: 'medium' },
    { id: 3, patient: 'Emily Davis', purpose: 'Lab Results', waitTime: '8 min', priority: 'low' },
  ];

  const activeCalls = [
    { id: 1, patient: 'James Wilson', purpose: 'Appointment Confirmation', duration: '1:23', status: 'In progress' },
    { id: 2, patient: 'Lisa Anderson', purpose: 'Prescription Renewal', duration: '0:45', status: 'In progress' },
  ];

  const callHistory = [
    { id: 1, patient: 'Sarah Johnson', purpose: 'Appointment Reminder', outcome: 'Confirmed', duration: '2:15', timestamp: '2 hours ago', sentiment: 'positive' },
    { id: 2, patient: 'Michael Chen', purpose: 'Follow-up Call', outcome: 'Rescheduled', duration: '3:42', timestamp: '3 hours ago', sentiment: 'neutral' },
    { id: 3, patient: 'Emily Davis', purpose: 'Lab Results', outcome: 'Completed', duration: '4:18', timestamp: '5 hours ago', sentiment: 'positive' },
    { id: 4, patient: 'Robert Brown', purpose: 'Appointment Reminder', outcome: 'No Answer', duration: '0:30', timestamp: '1 day ago', sentiment: 'neutral' },
    { id: 5, patient: 'Maria Garcia', purpose: 'Follow-up Call', outcome: 'Voicemail', duration: '1:05', timestamp: '1 day ago', sentiment: 'neutral' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900">AI Calls</h1>
        <p className="text-gray-500 mt-1">Monitor live calls and review call history</p>
      </div>

      <Tabs defaultValue="live" className="space-y-6">
        <TabsList>
          <TabsTrigger value="live">Live Calls</TabsTrigger>
          <TabsTrigger value="history">Call History</TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-6">
          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Active Calls</p>
                    <p className="text-2xl text-gray-900 mt-1">2</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">In Queue</p>
                    <p className="text-2xl text-gray-900 mt-1">3</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Success Rate</p>
                    <p className="text-2xl text-gray-900 mt-1">94.2%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Avg Duration</p>
                    <p className="text-2xl text-gray-900 mt-1">2:34</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Active Calls */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active Calls</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-600">Live</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activeCalls.map((call) => (
                  <div key={call.id} className="flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">{call.patient}</span>
                        <Badge variant="secondary">{call.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{call.purpose}</p>
                    </div>
                    <div className="text-sm text-gray-900">{call.duration}</div>
                    <Button variant="outline" size="sm">Monitor</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call Queue */}
          <Card>
            <CardHeader>
              <CardTitle>Call Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {liveCallQueue.map((call) => (
                  <div key={call.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-yellow-50 border border-yellow-200 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">{call.patient}</span>
                        <Badge 
                          variant={call.priority === 'high' ? 'destructive' : call.priority === 'medium' ? 'secondary' : 'outline'}
                        >
                          {call.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{call.purpose}</p>
                    </div>
                    <div className="text-sm text-gray-600">Wait: {call.waitTime}</div>
                    <Button variant="outline" size="sm">Start Call</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search calls..." className="pl-9" />
                </div>
                <Select defaultValue="all-outcomes">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-outcomes">All Outcomes</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="rescheduled">Rescheduled</SelectItem>
                    <SelectItem value="no-answer">No Answer</SelectItem>
                    <SelectItem value="voicemail">Voicemail</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-sentiment">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-sentiment">All Sentiment</SelectItem>
                    <SelectItem value="positive">Positive</SelectItem>
                    <SelectItem value="neutral">Neutral</SelectItem>
                    <SelectItem value="negative">Negative</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="today">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Call History Table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Calls</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Outcome</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Sentiment</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {callHistory.map((call) => (
                    <TableRow key={call.id}>
                      <TableCell className="text-gray-900">{call.patient}</TableCell>
                      <TableCell className="text-gray-600">{call.purpose}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            call.outcome === 'Confirmed' || call.outcome === 'Completed' ? 'default' :
                            call.outcome === 'Rescheduled' ? 'secondary' :
                            'outline'
                          }
                        >
                          {call.outcome}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">{call.duration}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            call.sentiment === 'positive' ? 'default' :
                            call.sentiment === 'neutral' ? 'secondary' :
                            'destructive'
                          }
                        >
                          {call.sentiment}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">{call.timestamp}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Play className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <FileText className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
