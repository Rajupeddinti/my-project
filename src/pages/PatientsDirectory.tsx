import { useState } from 'react';
import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
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
import { Search, Filter, Download, Plus, MoreVertical, Phone, Calendar } from 'lucide-react';

export default function PatientsDirectory() {
  const patients = [
    { id: '1', name: 'Sarah Johnson', phone: '+1 234-567-8901', lastCall: '2 hours ago', lastVisit: 'Dec 1, 2025', doctor: 'Dr. Smith', status: 'active' },
    { id: '2', name: 'Michael Chen', phone: '+1 234-567-8902', lastCall: '1 day ago', lastVisit: 'Nov 28, 2025', doctor: 'Dr. Patel', status: 'active' },
    { id: '3', name: 'Emily Davis', phone: '+1 234-567-8903', lastCall: '3 days ago', lastVisit: 'Nov 25, 2025', doctor: 'Dr. Smith', status: 'follow-up' },
    { id: '4', name: 'James Wilson', phone: '+1 234-567-8904', lastCall: '1 week ago', lastVisit: 'Nov 20, 2025', doctor: 'Dr. Lee', status: 'active' },
    { id: '5', name: 'Lisa Anderson', phone: '+1 234-567-8905', lastCall: '2 weeks ago', lastVisit: 'Oct 15, 2025', doctor: 'Dr. Patel', status: 'inactive' },
    { id: '6', name: 'Robert Brown', phone: '+1 234-567-8906', lastCall: '3 hours ago', lastVisit: 'Nov 30, 2025', doctor: 'Dr. Lee', status: 'active' },
    { id: '7', name: 'Maria Garcia', phone: '+1 234-567-8907', lastCall: '1 day ago', lastVisit: 'Nov 29, 2025', doctor: 'Dr. Smith', status: 'follow-up' },
    { id: '8', name: 'David Lee', phone: '+1 234-567-8908', lastCall: '4 days ago', lastVisit: 'Nov 26, 2025', doctor: 'Dr. Patel', status: 'active' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900">Patients Directory</h1>
          <p className="text-gray-500 mt-1">Manage and view all patient records</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Patient
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search by name, phone, or ID..." 
                className="pl-9"
              />
            </div>
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
            <Select defaultValue="all-status">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="follow-up">Follow-up</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button variant="outline" size="icon">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Patients ({patients.length})</CardTitle>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Showing 1-8 of 247</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Last Call</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Primary Doctor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <Link 
                      to={`/patients/${patient.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {patient.name}
                    </Link>
                  </TableCell>
                  <TableCell className="text-gray-600">{patient.phone}</TableCell>
                  <TableCell className="text-gray-600">{patient.lastCall}</TableCell>
                  <TableCell className="text-gray-600">{patient.lastVisit}</TableCell>
                  <TableCell className="text-gray-600">{patient.doctor}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        patient.status === 'active' ? 'default' : 
                        patient.status === 'follow-up' ? 'secondary' : 
                        'outline'
                      }
                    >
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Calendar className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <Button variant="outline" disabled>Previous</Button>
            <div className="flex items-center gap-2">
              <Button variant="default" size="sm">1</Button>
              <Button variant="ghost" size="sm">2</Button>
              <Button variant="ghost" size="sm">3</Button>
              <span className="text-gray-500">...</span>
              <Button variant="ghost" size="sm">31</Button>
            </div>
            <Button variant="outline">Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
