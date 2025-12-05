import { useParams } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Edit, 
  MoreVertical,
  Clock,
  MessageSquare,
  FileText,
  Activity,
  Sparkles
} from 'lucide-react';

export default function PatientProfile() {
  const { id } = useParams();

  const timelineEvents = [
    { type: 'call', date: 'Dec 1, 2025 09:00 AM', title: 'Appointment Confirmation Call', status: 'completed', details: 'Confirmed appointment for Dec 5' },
    { type: 'appointment', date: 'Nov 28, 2025 02:30 PM', title: 'Cardiology Checkup', status: 'completed', details: 'Dr. Smith - Regular checkup' },
    { type: 'call', date: 'Nov 25, 2025 10:15 AM', title: 'Follow-up Reminder', status: 'completed', details: 'Patient confirmed attendance' },
    { type: 'feedback', date: 'Nov 20, 2025', title: 'Patient Feedback', status: 'completed', details: '5-star rating - "Excellent service"' },
  ];

  const pastAppointments = [
    { date: 'Nov 28, 2025', doctor: 'Dr. Smith', department: 'Cardiology', status: 'Completed' },
    { date: 'Oct 15, 2025', doctor: 'Dr. Patel', department: 'General', status: 'Completed' },
    { date: 'Sep 10, 2025', doctor: 'Dr. Smith', department: 'Cardiology', status: 'Completed' },
  ];

  const aiInsights = [
    { type: 'behavior', text: 'High engagement - always confirms appointments on first call' },
    { type: 'preference', text: 'Prefers morning slots (9-11 AM)' },
    { type: 'risk', text: 'Low no-show risk based on history' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">
                SJ
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-gray-900">Sarah Johnson</h1>
                  <Badge>Active</Badge>
                  <Badge variant="outline">VIP</Badge>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>45 years old</span>
                  <span>•</span>
                  <span>Female</span>
                  <span>•</span>
                  <span>Patient ID: #{id}</span>
                </div>
                <div className="flex items-center gap-6 mt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    +1 234-567-8901
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    sarah.j@email.com
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    New York, NY
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <Phone className="w-4 h-4" />
                Call
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                Book
              </Button>
              <Button variant="outline" size="icon">
                <Edit className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="overview">
            <TabsList className="w-full justify-start border-b border-gray-200 bg-transparent rounded-none h-auto p-0">
              <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
                Overview
              </TabsTrigger>
              <TabsTrigger value="calls" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
                Calls
              </TabsTrigger>
              <TabsTrigger value="appointments" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
                Appointments
              </TabsTrigger>
              <TabsTrigger value="feedback" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
                Feedback
              </TabsTrigger>
              <TabsTrigger value="history" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
                Medical History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {timelineEvents.map((event, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            event.type === 'call' ? 'bg-blue-50' :
                            event.type === 'appointment' ? 'bg-green-50' :
                            'bg-yellow-50'
                          }`}>
                            {event.type === 'call' && <Phone className="w-5 h-5 text-blue-600" />}
                            {event.type === 'appointment' && <Calendar className="w-5 h-5 text-green-600" />}
                            {event.type === 'feedback' && <MessageSquare className="w-5 h-5 text-yellow-600" />}
                          </div>
                          {idx < timelineEvents.length - 1 && (
                            <div className="w-0.5 h-full bg-gray-200 mt-2" />
                          )}
                        </div>
                        <div className="flex-1 pb-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-sm text-gray-900">{event.title}</h3>
                              <p className="text-sm text-gray-500 mt-1">{event.details}</p>
                              <p className="text-xs text-gray-400 mt-2">{event.date}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {event.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calls" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Call History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center py-8">Call history content would be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appointments" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Appointment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center py-8">Appointment history content would be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="feedback" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Feedback & Ratings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center py-8">Feedback content would be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Medical History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center py-8">Medical history content would be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Patient Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Patient Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="text-xs text-gray-500">Blood Group</div>
                <div className="text-sm text-gray-900 mt-1">O+</div>
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
                <div className="text-xs text-gray-500">First Visit</div>
                <div className="text-sm text-gray-900 mt-1">Jan 15, 2023</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Total Visits</div>
                <div className="text-sm text-gray-900 mt-1">12</div>
              </div>
            </CardContent>
          </Card>

          {/* Past Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Past Appointments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pastAppointments.map((apt, idx) => (
                <div key={idx} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="text-sm text-gray-900">{apt.date}</div>
                  <div className="text-sm text-gray-600 mt-1">{apt.doctor}</div>
                  <div className="text-xs text-gray-500 mt-1">{apt.department}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <CardTitle className="text-base">AI Insights</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {aiInsights.map((insight, idx) => (
                <div key={idx} className="flex gap-2 p-3 bg-blue-50 rounded-lg">
                  <Activity className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{insight.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
