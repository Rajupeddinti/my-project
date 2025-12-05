import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Switch } from '../components/ui/switch';
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
  PhoneIncoming, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Calendar,
  MapPin,
  Clock,
  User,
  Activity,
  Sparkles,
  PhoneForwarded,
  UserCog,
  Smile,
  Meh,
  Frown
} from 'lucide-react';

export default function SmartFrontDesk() {
  const incomingCall = {
    patient: 'Sarah Johnson',
    phone: '+1 234-567-8901',
    callerId: 'Recognized',
    lastVisit: 'Nov 28, 2025',
    doctor: 'Dr. Smith',
  };

  const transcript = [
    { speaker: 'ai', text: 'Good morning! Thank you for calling City Hospital. How may I help you today?', time: '00:05' },
    { speaker: 'patient', text: 'Hi, I need to book an appointment with Dr. Smith.', time: '00:12' },
    { speaker: 'ai', text: 'Of course! I can help you schedule an appointment with Dr. Smith. May I have your name please?', time: '00:18' },
    { speaker: 'patient', text: 'Yes, it\'s Sarah Johnson.', time: '00:24' },
    { speaker: 'ai', text: 'Thank you Sarah! I see you\'re a returning patient. What works best for you - this week or next week?', time: '00:28' },
  ];

  const aiSuggestions = [
    { type: 'action', text: 'Book appointment for Dec 5, 9:00 AM', confidence: 95 },
    { type: 'info', text: 'Patient prefers morning slots', confidence: 88 },
    { type: 'alert', text: 'Follow-up needed from last visit', confidence: 72 },
  ];

  const patientHistory = [
    { date: 'Nov 28, 2025', type: 'Visit', details: 'Cardiology Checkup - Dr. Smith' },
    { date: 'Nov 25, 2025', type: 'Call', details: 'Appointment confirmation' },
    { date: 'Oct 15, 2025', type: 'Visit', details: 'General Checkup - Dr. Patel' },
  ];

  const callHistory = [
    { id: 1, patient: 'Michael Chen', intent: 'Book Appointment', outcome: 'Scheduled', sentiment: 'positive', duration: '2:15', time: '2h ago' },
    { id: 2, patient: 'Emily Davis', intent: 'Query Directions', outcome: 'Provided Info', sentiment: 'neutral', duration: '1:42', time: '3h ago' },
    { id: 3, patient: 'James Wilson', intent: 'Check Availability', outcome: 'No Slots', sentiment: 'negative', duration: '3:12', time: '5h ago' },
    { id: 4, patient: 'Lisa Anderson', intent: 'Reschedule', outcome: 'Updated', sentiment: 'positive', duration: '2:38', time: '1d ago' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900">Smart Front Desk</h1>
          <p className="text-gray-500 mt-1">AI-powered call handling and reception automation</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Switch defaultChecked />
            <span className="text-sm text-gray-700">AI Mode Active</span>
          </div>
          <Badge variant="secondary" className="gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Online
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="live" className="space-y-6">
        <TabsList>
          <TabsTrigger value="live">Live Call</TabsTrigger>
          <TabsTrigger value="history">Call History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Call Interface */}
            <div className="lg:col-span-2 space-y-6">
              {/* Incoming Call Card */}
              <Card className="border-blue-600 border-2">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                        <PhoneIncoming className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg text-gray-900">{incomingCall.patient}</h3>
                          <Badge variant="default">Recognized</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{incomingCall.phone}</p>
                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                          <span>Last visit: {incomingCall.lastVisit}</span>
                          <span>•</span>
                          <span>Primary: {incomingCall.doctor}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <PhoneForwarded className="w-4 h-4" />
                        Transfer
                      </Button>
                      <Button size="sm" className="gap-2">
                        <UserCog className="w-4 h-4" />
                        Take Over
                      </Button>
                    </div>
                  </div>

                  {/* Call Controls */}
                  <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-200">
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                      <Mic className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                      <Volume2 className="w-5 h-5" />
                    </Button>
                    <Button variant="destructive" size="icon" className="h-14 w-14 rounded-full">
                      <Phone className="w-6 h-6" />
                    </Button>
                  </div>

                  {/* Call Timer */}
                  <div className="text-center mt-4">
                    <div className="text-2xl text-gray-900">02:34</div>
                    <div className="text-sm text-gray-500">Call duration</div>
                  </div>
                </CardContent>
              </Card>

              {/* Live Transcript */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Live Transcript</CardTitle>
                    <Badge variant="secondary" className="gap-2">
                      <Activity className="w-3 h-3" />
                      Analyzing...
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {transcript.map((msg, idx) => (
                      <div key={idx} className={`flex gap-3 ${msg.speaker === 'ai' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-[80%] ${msg.speaker === 'ai' ? 'order-2' : 'order-1'}`}>
                          <div className={`p-3 rounded-lg ${
                            msg.speaker === 'ai' 
                              ? 'bg-blue-50 text-gray-900' 
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            <p className="text-sm">{msg.text}</p>
                          </div>
                          <div className="flex items-center gap-2 mt-1 px-1">
                            <span className="text-xs text-gray-500">{msg.time}</span>
                            {msg.speaker === 'patient' && (
                              <Smile className="w-3 h-3 text-green-600" />
                            )}
                          </div>
                        </div>
                        <div className={`${msg.speaker === 'ai' ? 'order-1' : 'order-2'}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                            msg.speaker === 'ai' 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-300 text-gray-700'
                          }`}>
                            {msg.speaker === 'ai' ? 'AI' : 'P'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Suggestions */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    <CardTitle>AI Suggestions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {aiSuggestions.map((suggestion, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={suggestion.type === 'action' ? 'default' : suggestion.type === 'alert' ? 'destructive' : 'secondary'}
                              className="text-xs"
                            >
                              {suggestion.type}
                            </Badge>
                            <span className="text-xs text-gray-500">{suggestion.confidence}% confident</span>
                          </div>
                          <p className="text-sm text-gray-900 mt-2">{suggestion.text}</p>
                        </div>
                        {suggestion.type === 'action' && (
                          <Button variant="outline" size="sm">Apply</Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <MapPin className="w-4 h-4" />
                    Send Directions
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Clock className="w-4 h-4" />
                    Check Availability
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <User className="w-4 h-4" />
                    Transfer to Doctor
                  </Button>
                </CardContent>
              </Card>

              {/* Patient Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Patient Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-500">Patient ID</div>
                    <div className="text-sm text-gray-900 mt-1">#12847</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Primary Doctor</div>
                    <div className="text-sm text-gray-900 mt-1">Dr. Sarah Smith</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Department</div>
                    <div className="text-sm text-gray-900 mt-1">Cardiology</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Last Visit</div>
                    <div className="text-sm text-gray-900 mt-1">Nov 28, 2025</div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent History */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Recent History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {patientHistory.map((item, idx) => (
                    <div key={idx} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">{item.type}</Badge>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                      <p className="text-sm text-gray-900 mt-1">{item.details}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-900">Dec 5, 2025</div>
                    <div className="text-sm text-gray-600 mt-1">09:00 AM - Dr. Smith</div>
                    <div className="text-xs text-gray-500 mt-1">Cardiology Checkup</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Call History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Intent</TableHead>
                    <TableHead>Outcome</TableHead>
                    <TableHead>Sentiment</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {callHistory.map((call) => (
                    <TableRow key={call.id}>
                      <TableCell className="text-gray-900">{call.patient}</TableCell>
                      <TableCell className="text-gray-600">{call.intent}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{call.outcome}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {call.sentiment === 'positive' && <Smile className="w-4 h-4 text-green-600" />}
                          {call.sentiment === 'neutral' && <Meh className="w-4 h-4 text-gray-600" />}
                          {call.sentiment === 'negative' && <Frown className="w-4 h-4 text-red-600" />}
                          <span className="text-sm capitalize">{call.sentiment}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-600">{call.duration}</TableCell>
                      <TableCell className="text-gray-600">{call.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-900">Enable AI Mode</div>
                    <div className="text-xs text-gray-500 mt-1">Let AI handle incoming calls automatically</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-900">Auto-book Appointments</div>
                    <div className="text-xs text-gray-500 mt-1">AI can schedule without confirmation</div>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-900">Sentiment Analysis</div>
                    <div className="text-xs text-gray-500 mt-1">Track caller emotions in real-time</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Call Routing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-900">Emergency Calls</div>
                    <div className="text-xs text-gray-500 mt-1">Immediately transfer to staff</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-900">VIP Patients</div>
                    <div className="text-xs text-gray-500 mt-1">Priority routing for VIP patients</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-900">After Hours</div>
                    <div className="text-xs text-gray-500 mt-1">Handle calls outside business hours</div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
