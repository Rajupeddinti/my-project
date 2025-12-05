import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { 
  UserPlus, 
  Search,
  Shield,
  Users as UsersIcon,
  Edit,
  Trash2
} from 'lucide-react';

export default function Users() {
  const users = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      email: 'sarah.smith@cityhospital.com',
      role: 'Admin',
      department: 'Cardiology',
      status: 'active',
      lastLogin: '2 hours ago'
    },
    {
      id: 2,
      name: 'Dr. Michael Patel',
      email: 'michael.patel@cityhospital.com',
      role: 'Doctor',
      department: 'General Medicine',
      status: 'active',
      lastLogin: '1 day ago'
    },
    {
      id: 3,
      name: 'Jessica Martinez',
      email: 'jessica.m@cityhospital.com',
      role: 'Receptionist',
      department: 'Front Desk',
      status: 'active',
      lastLogin: '30 minutes ago'
    },
    {
      id: 4,
      name: 'Dr. Robert Lee',
      email: 'robert.lee@cityhospital.com',
      role: 'Doctor',
      department: 'Orthopedics',
      status: 'active',
      lastLogin: '3 hours ago'
    },
    {
      id: 5,
      name: 'Emily Johnson',
      email: 'emily.j@cityhospital.com',
      role: 'Manager',
      department: 'Operations',
      status: 'inactive',
      lastLogin: '2 weeks ago'
    },
  ];

  const roles = [
    { name: 'Admin', users: 2, color: 'red' },
    { name: 'Doctor', users: 8, color: 'blue' },
    { name: 'Manager', users: 3, color: 'purple' },
    { name: 'Receptionist', users: 5, color: 'green' },
  ];

  const permissions = [
    { module: 'Dashboard', view: true, edit: true, delete: false },
    { module: 'Patients', view: true, edit: true, delete: true },
    { module: 'Appointments', view: true, edit: true, delete: true },
    { module: 'AI Calls', view: true, edit: true, delete: false },
    { module: 'Campaigns', view: true, edit: false, delete: false },
    { module: 'Analytics', view: true, edit: false, delete: false },
    { module: 'Integrations', view: false, edit: false, delete: false },
    { module: 'Users & Roles', view: false, edit: false, delete: false },
    { module: 'Settings', view: false, edit: false, delete: false },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900">Users & Roles</h1>
          <p className="text-gray-500 mt-1">Manage team members and access permissions</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <UserPlus className="w-4 h-4" />
              Invite User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite New User</DialogTitle>
              <DialogDescription>
                Send an invitation to join your hospital's Nyra AI workspace
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <label className="text-sm text-gray-700">Email Address</label>
                <Input type="email" placeholder="user@cityhospital.com" className="mt-2" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Full Name</label>
                <Input placeholder="John Doe" className="mt-2" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Role</label>
                <select className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg">
                  <option>Admin</option>
                  <option>Doctor</option>
                  <option>Manager</option>
                  <option>Receptionist</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-700">Department</label>
                <Input placeholder="e.g., Cardiology" className="mt-2" />
              </div>
              <div className="flex items-center gap-2 pt-4">
                <Button className="flex-1">Send Invitation</Button>
                <Button variant="outline" className="flex-1">Cancel</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {roles.map((role, idx) => (
          <Card key={idx}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{role.name}</p>
                  <p className="text-xl text-gray-900 mt-1">{role.users}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search users..." className="pl-9" />
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Doctor</option>
              <option>Manager</option>
              <option>Receptionist</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Users ({users.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="text-gray-900">{user.name}</TableCell>
                  <TableCell className="text-gray-600">{user.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.role}</Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">{user.department}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">{user.lastLogin}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Permissions Matrix */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Role Permissions - Admin</CardTitle>
            <select className="px-3 py-2 border border-gray-300 rounded-lg">
              <option>Admin</option>
              <option>Doctor</option>
              <option>Manager</option>
              <option>Receptionist</option>
            </select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Module</TableHead>
                <TableHead className="text-center">View</TableHead>
                <TableHead className="text-center">Edit</TableHead>
                <TableHead className="text-center">Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {permissions.map((permission, idx) => (
                <TableRow key={idx}>
                  <TableCell className="text-gray-900">{permission.module}</TableCell>
                  <TableCell className="text-center">
                    <Checkbox checked={permission.view} />
                  </TableCell>
                  <TableCell className="text-center">
                    <Checkbox checked={permission.edit} />
                  </TableCell>
                  <TableCell className="text-center">
                    <Checkbox checked={permission.delete} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-6">
            <Button>Save Permissions</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
