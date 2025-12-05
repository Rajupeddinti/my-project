import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Switch } from '../components/ui/switch';
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
  Database, 
  Users, 
  Link2, 
  CheckCircle,
  AlertCircle,
  Settings,
  Copy,
  Eye,
  EyeOff
} from 'lucide-react';
import { useState } from 'react';

export default function Integrations() {
  const [showApiKey, setShowApiKey] = useState(false);

  const integrations = [
    {
      id: 1,
      name: 'Hospital Management System',
      type: 'HMS',
      status: 'connected',
      description: 'Sync patient data, appointments, and medical records',
      icon: Database,
      lastSync: '5 minutes ago'
    },
    {
      id: 2,
      name: 'CRM Platform',
      type: 'CRM',
      status: 'connected',
      description: 'Manage patient relationships and communication',
      icon: Users,
      lastSync: '2 hours ago'
    },
    {
      id: 3,
      name: 'WhatsApp Business API',
      type: 'Messaging',
      status: 'not-connected',
      description: 'Send appointment reminders via WhatsApp',
      icon: Link2,
      lastSync: '-'
    },
    {
      id: 4,
      name: 'Twilio SMS',
      type: 'Messaging',
      status: 'not-connected',
      description: 'SMS notifications and reminders',
      icon: Link2,
      lastSync: '-'
    },
  ];

  const fieldMappings = [
    { hmsField: 'patient_id', nyraField: 'patientId', status: 'mapped' },
    { hmsField: 'patient_name', nyraField: 'patientName', status: 'mapped' },
    { hmsField: 'phone_number', nyraField: 'phone', status: 'mapped' },
    { hmsField: 'appointment_date', nyraField: 'appointmentDate', status: 'mapped' },
    { hmsField: 'doctor_name', nyraField: 'doctorName', status: 'mapped' },
    { hmsField: 'department', nyraField: 'department', status: 'mapped' },
  ];

  const syncLogs = [
    { id: 1, timestamp: '2 hours ago', action: 'Patient data sync', status: 'success', records: '247 records' },
    { id: 2, timestamp: '5 hours ago', action: 'Appointment sync', status: 'success', records: '89 records' },
    { id: 3, timestamp: '1 day ago', action: 'Patient data sync', status: 'success', records: '312 records' },
    { id: 4, timestamp: '1 day ago', action: 'Doctor schedule sync', status: 'failed', records: 'Connection timeout' },
    { id: 5, timestamp: '2 days ago', action: 'Patient data sync', status: 'success', records: '198 records' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900">Integrations</h1>
        <p className="text-gray-500 mt-1">Connect with your existing systems and platforms</p>
      </div>

      {/* Integration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <Card key={integration.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      integration.status === 'connected' ? 'bg-green-50' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        integration.status === 'connected' ? 'text-green-600' : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-gray-900">{integration.name}</h3>
                        {integration.status === 'connected' ? (
                          <Badge variant="default" className="gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Connected
                          </Badge>
                        ) : (
                          <Badge variant="outline">Not Connected</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{integration.description}</p>
                      {integration.status === 'connected' && (
                        <p className="text-xs text-gray-400 mt-2">
                          Last sync: {integration.lastSync}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  {integration.status === 'connected' ? (
                    <>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Settings className="w-4 h-4" />
                        Configure
                      </Button>
                      <Button variant="outline" size="sm">Sync Now</Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <Button size="sm">Connect</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="field-mapping">
        <TabsList>
          <TabsTrigger value="field-mapping">Field Mapping</TabsTrigger>
          <TabsTrigger value="sync-logs">Sync Logs</TabsTrigger>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        </TabsList>

        <TabsContent value="field-mapping" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>HMS Field Mapping</CardTitle>
                <Button variant="outline" size="sm">Auto-Map Fields</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>HMS Field</TableHead>
                    <TableHead>Nyra AI Field</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fieldMappings.map((mapping, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="text-gray-900">{mapping.hmsField}</TableCell>
                      <TableCell className="text-gray-900">{mapping.nyraField}</TableCell>
                      <TableCell>
                        <Badge variant="default" className="gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {mapping.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-6">
                <Button variant="outline" className="w-full">+ Add Field Mapping</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sync-logs" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Sync Activity Logs</CardTitle>
                <Button variant="outline" size="sm">Refresh</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {syncLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="text-gray-600">{log.timestamp}</TableCell>
                      <TableCell className="text-gray-900">{log.action}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={log.status === 'success' ? 'default' : 'destructive'}
                          className="gap-1"
                        >
                          {log.status === 'success' ? (
                            <CheckCircle className="w-3 h-3" />
                          ) : (
                            <AlertCircle className="w-3 h-3" />
                          )}
                          {log.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">{log.records}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api-keys" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>API Keys & Authentication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm text-gray-700">API Key</label>
                <div className="flex gap-2 mt-2">
                  <div className="relative flex-1">
                    <Input 
                      type={showApiKey ? 'text' : 'password'}
                      value="sk_live_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"
                      readOnly
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                  <Button variant="outline" size="icon">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Keep this key secure. Do not share it publicly.</p>
              </div>

              <div>
                <label className="text-sm text-gray-700">API Secret</label>
                <div className="flex gap-2 mt-2">
                  <Input type="password" value="••••••••••••••••••••" readOnly className="flex-1" />
                  <Button variant="outline" size="icon">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button variant="destructive">Regenerate API Keys</Button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm text-gray-900 mb-3">API Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">Enable API Access</div>
                      <div className="text-xs text-gray-500">Allow external systems to access your data</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">Rate Limiting</div>
                      <div className="text-xs text-gray-500">1000 requests per hour</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">IP Whitelisting</div>
                      <div className="text-xs text-gray-500">Restrict access to specific IP addresses</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Webhook Endpoints</CardTitle>
                <Button size="sm">Add Webhook</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm text-gray-900">Patient Created</h3>
                        <Badge variant="default">Active</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        https://api.yourdomain.com/webhooks/patient-created
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Last triggered: 2 hours ago • 247 total calls
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm" className="text-red-600">Delete</Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm text-gray-900">Appointment Scheduled</h3>
                        <Badge variant="default">Active</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        https://api.yourdomain.com/webhooks/appointment-scheduled
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Last triggered: 1 hour ago • 89 total calls
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm" className="text-red-600">Delete</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
