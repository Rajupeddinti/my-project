import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
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
import { Calendar as CalendarIcon, List, ChevronLeft, ChevronRight, Plus, Filter, Edit, X } from 'lucide-react';

export default function Appointments() {
  const [view, setView] = useState<'calendar' | 'list'>('calendar');

  const appointments = [
    { id: 1, time: '09:00 AM', patient: 'Sarah Johnson', doctor: 'Dr. Smith', department: 'Cardiology', status: 'confirmed', duration: '30 min' },
    { id: 2, time: '10:00 AM', patient: 'Michael Chen', doctor: 'Dr. Patel', department: 'General', status: 'confirmed', duration: '45 min' },
    { id: 3, time: '11:30 AM', patient: 'Emily Davis', doctor: 'Dr. Lee', department: 'Orthopedics', status: 'pending', duration: '30 min' },
    { id: 4, time: '02:00 PM', patient: 'James Wilson', doctor: 'Dr. Smith', department: 'Cardiology', status: 'confirmed', duration: '30 min' },
    { id: 5, time: '03:00 PM', patient: 'Lisa Anderson', doctor: 'Dr. Patel', department: 'General', status: 'cancelled', duration: '30 min' },
  ];

  const calendarDays = [
    { day: 'Mon', date: 27, isToday: false, appointments: 3 },
    { day: 'Tue', date: 28, isToday: false, appointments: 5 },
    { day: 'Wed', date: 29, isToday: false, appointments: 4 },
    { day: 'Thu', date: 30, isToday: false, appointments: 6 },
    { day: 'Fri', date: 1, isToday: false, appointments: 8 },
    { day: 'Sat', date: 2, isToday: true, appointments: 5 },
    { day: 'Sun', date: 3, isToday: false, appointments: 2 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900">Appointments</h1>
          <p className="text-gray-500 mt-1">Manage and schedule patient appointments</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg">
            <Button
              variant={view === 'calendar' ? 'default' : 'ghost'}
              size="sm"
              className="gap-2"
              onClick={() => setView('calendar')}
            >
              <CalendarIcon className="w-4 h-4" />
              Calendar
            </Button>
            <Button
              variant={view === 'list' ? 'default' : 'ghost'}
              size="sm"
              className="gap-2"
              onClick={() => setView('list')}
            >
              <List className="w-4 h-4" />
              List
            </Button>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Appointment
          </Button>
        </div>
      </div>

      {view === 'calendar' ? (
        <>
          {/* Calendar Controls */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <h2 className="text-lg text-gray-900">December 2025</h2>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">Today</Button>
                </div>
                <div className="flex items-center gap-3">
                  <Select defaultValue="all-doctors">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-doctors">All Doctors</SelectItem>
                      <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                      <SelectItem value="dr-patel">Dr. Patel</SelectItem>
                      <SelectItem value="dr-lee">Dr. Lee</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Week View */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-4">
                {calendarDays.map((day, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-2 ${
                      day.isToday 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="text-center mb-3">
                      <div className="text-xs text-gray-500">{day.day}</div>
                      <div className={`text-xl mt-1 ${day.isToday ? 'text-blue-600' : 'text-gray-900'}`}>
                        {day.date}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-center text-gray-500">
                        {day.appointments} appointments
                      </div>
                      {day.isToday && (
                        <div className="space-y-1">
                          <div className="p-2 bg-green-50 border border-green-200 rounded text-xs">
                            <div className="text-green-900">09:00</div>
                            <div className="text-green-700 truncate">S. Johnson</div>
                          </div>
                          <div className="p-2 bg-green-50 border border-green-200 rounded text-xs">
                            <div className="text-green-900">10:00</div>
                            <div className="text-green-700 truncate">M. Chen</div>
                          </div>
                          <div className="p-2 bg-yellow-50 border border-yellow-200 rounded text-xs">
                            <div className="text-yellow-900">11:30</div>
                            <div className="text-yellow-700 truncate">E. Davis</div>
                          </div>
                          <div className="text-xs text-center text-gray-500 pt-1">
                            +2 more
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule - December 2, 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {appointments.map((apt) => (
                  <div key={apt.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-900 w-20">{apt.time}</div>
                    <div className="flex-1 grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-900">{apt.patient}</div>
                        <div className="text-xs text-gray-500 mt-1">{apt.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-900">{apt.doctor}</div>
                        <div className="text-xs text-gray-500 mt-1">{apt.department}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            apt.status === 'confirmed' ? 'default' :
                            apt.status === 'pending' ? 'secondary' :
                            'outline'
                          }
                        >
                          {apt.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          {/* List View Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select defaultValue="all-status">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-status">All Status</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-doctors">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-doctors">All Doctors</SelectItem>
                    <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                    <SelectItem value="dr-patel">Dr. Patel</SelectItem>
                    <SelectItem value="dr-lee">Dr. Lee</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-dept">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-dept">All Departments</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
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

          {/* List View Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Doctor</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((apt) => (
                    <TableRow key={apt.id}>
                      <TableCell className="text-gray-900">{apt.time}</TableCell>
                      <TableCell className="text-gray-900">{apt.patient}</TableCell>
                      <TableCell className="text-gray-600">{apt.doctor}</TableCell>
                      <TableCell className="text-gray-600">{apt.department}</TableCell>
                      <TableCell className="text-gray-600">{apt.duration}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            apt.status === 'confirmed' ? 'default' :
                            apt.status === 'pending' ? 'secondary' :
                            'outline'
                          }
                        >
                          {apt.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button variant="outline" size="sm" className="text-red-600">Cancel</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
