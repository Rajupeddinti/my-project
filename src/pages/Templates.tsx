import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { 
  Phone, 
  MessageSquare, 
  Send,
  Plus,
  Copy,
  Edit,
  Trash2,
  Play,
  Zap
} from 'lucide-react';

export default function Templates() {
  const voiceTemplates = [
    {
      id: 1,
      name: 'Appointment Reminder',
      category: 'Reminders',
      status: 'active',
      usage: 1247,
      script: 'Hello [Patient Name], this is City Hospital. We\'re calling to remind you about your appointment with [Doctor Name] scheduled for [Date] at [Time]. Please reply with 1 to confirm, or 2 to reschedule.'
    },
    {
      id: 2,
      name: 'Follow-up Call',
      category: 'Follow-ups',
      status: 'active',
      usage: 423,
      script: 'Good day [Patient Name], this is City Hospital. We\'re following up on your recent visit with [Doctor Name]. How are you feeling today?'
    },
    {
      id: 3,
      name: 'Lab Results Ready',
      category: 'Notifications',
      status: 'draft',
      usage: 0,
      script: 'Hello [Patient Name], your lab results from your recent visit are now ready. Please call us back at your convenience to discuss the results with your doctor.'
    },
  ];

  const smsTemplates = [
    {
      id: 1,
      name: 'Appointment Confirmation',
      category: 'Reminders',
      status: 'active',
      usage: 892,
      message: 'Hi [Name], your appointment with [Doctor] is confirmed for [Date] at [Time]. Reply YES to confirm. - City Hospital'
    },
    {
      id: 2,
      name: 'Prescription Ready',
      category: 'Notifications',
      status: 'active',
      usage: 234,
      message: 'Your prescription is ready for pickup at City Hospital pharmacy. Bring your ID. Hours: 9AM-6PM.'
    },
  ];

  const automationRules = [
    {
      id: 1,
      name: 'Auto-confirm 24h before',
      trigger: 'Appointment scheduled',
      condition: '24 hours before',
      action: 'Send voice reminder',
      status: 'active'
    },
    {
      id: 2,
      name: 'Follow-up post-visit',
      trigger: 'Appointment completed',
      condition: '48 hours after',
      action: 'Send SMS survey',
      status: 'active'
    },
    {
      id: 3,
      name: 'No-show follow-up',
      trigger: 'Appointment missed',
      condition: 'Immediately',
      action: 'Call to reschedule',
      status: 'paused'
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900">Templates & Automation</h1>
          <p className="text-gray-500 mt-1">Manage call scripts, messages, and automated workflows</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Template
        </Button>
      </div>

      <Tabs defaultValue="voice">
        <TabsList>
          <TabsTrigger value="voice" className="gap-2">
            <Phone className="w-4 h-4" />
            Voice Scripts
          </TabsTrigger>
          <TabsTrigger value="sms" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            SMS Templates
          </TabsTrigger>
          <TabsTrigger value="whatsapp" className="gap-2">
            <Send className="w-4 h-4" />
            WhatsApp
          </TabsTrigger>
          <TabsTrigger value="automation" className="gap-2">
            <Zap className="w-4 h-4" />
            Automation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="voice" className="mt-6 space-y-6">
          {/* Voice Script Editor */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Voice Call Scripts</CardTitle>
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="reminders">Reminders</SelectItem>
                    <SelectItem value="follow-ups">Follow-ups</SelectItem>
                    <SelectItem value="notifications">Notifications</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {voiceTemplates.map((template) => (
                <div key={template.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-gray-900">{template.name}</h3>
                        <Badge variant={template.status === 'active' ? 'default' : 'outline'}>
                          {template.status}
                        </Badge>
                        <Badge variant="outline">{template.category}</Badge>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Used in {template.usage} calls
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{template.script}</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500">
                      Variables: [Patient Name], [Doctor Name], [Date], [Time]
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Create New Script */}
          <Card>
            <CardHeader>
              <CardTitle>Create New Voice Script</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-gray-700">Template Name</label>
                <Input placeholder="e.g., Appointment Reminder" className="mt-2" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Category</label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reminders">Reminders</SelectItem>
                    <SelectItem value="follow-ups">Follow-ups</SelectItem>
                    <SelectItem value="notifications">Notifications</SelectItem>
                    <SelectItem value="surveys">Surveys</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-gray-700">Voice Script</label>
                <Textarea 
                  placeholder="Write your voice script here... Use [Variable] for dynamic content."
                  className="mt-2 min-h-32"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button>Save Template</Button>
                <Button variant="outline">Test Script</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sms" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>SMS Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {smsTemplates.map((template) => (
                <div key={template.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-gray-900">{template.name}</h3>
                        <Badge variant={template.status === 'active' ? 'default' : 'outline'}>
                          {template.status}
                        </Badge>
                        <Badge variant="outline">{template.category}</Badge>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Used {template.usage} times
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{template.message}</p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-200">
                      <span className="text-xs text-gray-500">
                        {template.message.length} characters
                      </span>
                      <span className="text-xs text-gray-500">
                        ~1 SMS
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="whatsapp" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-center py-8">
                WhatsApp templates would be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Automation Rules</CardTitle>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Create Rule
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {automationRules.map((rule) => (
                <div key={rule.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-gray-900">{rule.name}</h3>
                        <Badge variant={rule.status === 'active' ? 'default' : 'secondary'}>
                          {rule.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                          <div className="text-xs text-gray-500">Trigger</div>
                          <div className="text-sm text-gray-900 mt-1">{rule.trigger}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Condition</div>
                          <div className="text-sm text-gray-900 mt-1">{rule.condition}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Action</div>
                          <div className="text-sm text-gray-900 mt-1">{rule.action}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Automation Builder */}
          <Card>
            <CardHeader>
              <CardTitle>Create Automation Rule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm text-gray-700">Rule Name</label>
                <Input placeholder="e.g., Auto-confirm appointments" className="mt-2" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm text-gray-700">Trigger</label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select trigger" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="appointment-scheduled">Appointment Scheduled</SelectItem>
                      <SelectItem value="appointment-completed">Appointment Completed</SelectItem>
                      <SelectItem value="appointment-missed">Appointment Missed</SelectItem>
                      <SelectItem value="patient-created">Patient Created</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-gray-700">Condition</label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediately">Immediately</SelectItem>
                      <SelectItem value="24h-before">24 hours before</SelectItem>
                      <SelectItem value="48h-after">48 hours after</SelectItem>
                      <SelectItem value="1-week-after">1 week after</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-gray-700">Action</label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select action" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="voice-call">Make Voice Call</SelectItem>
                      <SelectItem value="send-sms">Send SMS</SelectItem>
                      <SelectItem value="send-whatsapp">Send WhatsApp</SelectItem>
                      <SelectItem value="send-email">Send Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button>Create Rule</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
