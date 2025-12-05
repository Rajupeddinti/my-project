import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { 
  MessageCircle, 
  Send, 
  Mail, 
  Phone, 
  Clock,
  Book,
  FileText,
  Video,
  Search,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export default function Support() {
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');

  const supportTickets = [
    {
      id: 'TKT-10247',
      subject: 'AI agent not responding to patient calls',
      status: 'in-progress',
      priority: 'high',
      created: '2 hours ago',
      updated: '30 min ago',
      assignedTo: 'Support Team'
    },
    {
      id: 'TKT-10246',
      subject: 'Integration with HMS - data sync issue',
      status: 'resolved',
      priority: 'medium',
      created: '1 day ago',
      updated: '5 hours ago',
      assignedTo: 'Tech Support'
    },
    {
      id: 'TKT-10245',
      subject: 'Question about billing and usage limits',
      status: 'resolved',
      priority: 'low',
      created: '3 days ago',
      updated: '2 days ago',
      assignedTo: 'Billing Team'
    },
  ];

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I set up my first AI calling campaign?',
          a: 'Navigate to the Campaigns section, click "Create Campaign", select your campaign type (Voice/SMS/WhatsApp), upload your recipient list or select a patient segment, customize your script, and set the schedule. Our AI will handle the rest!'
        },
        {
          q: 'How do I integrate Nyra AI with my existing Hospital Management System?',
          a: 'Go to Integrations > HMS Integration, enter your HMS API credentials, configure field mappings, and test the connection. Our system supports most major HMS platforms including Epic, Cerner, and Meditech.'
        },
        {
          q: 'Can I customize the AI voice and personality?',
          a: 'Yes! Go to Settings > Branding to customize the AI voice name, gender, accent, and speaking style to match your hospital\'s brand and patient preferences.'
        }
      ]
    },
    {
      category: 'AI Calling Features',
      questions: [
        {
          q: 'What languages does the AI support?',
          a: 'Our AI currently supports English (US, UK, Australian), Spanish, French, German, Hindi, and Mandarin. Additional languages can be enabled upon request.'
        },
        {
          q: 'How does the AI handle complex patient queries?',
          a: 'The AI is trained on medical terminology and common patient queries. For complex medical questions, it can seamlessly transfer to a live staff member or schedule a callback with appropriate personnel.'
        },
        {
          q: 'Can the AI schedule appointments automatically?',
          a: 'Yes! The AI can check doctor availability in real-time, book appointments, send confirmations, and handle rescheduling requests based on your configured business rules.'
        }
      ]
    },
    {
      category: 'Billing & Pricing',
      questions: [
        {
          q: 'How is usage calculated?',
          a: 'Usage is calculated based on successful call completions. Each connected call counts as one unit, regardless of duration. SMS and WhatsApp messages are billed separately.'
        },
        {
          q: 'What happens if I exceed my plan limits?',
          a: 'You\'ll receive notifications at 80% and 100% of your limit. Calls beyond your limit are charged at standard overage rates. You can upgrade your plan anytime to avoid overages.'
        },
        {
          q: 'Can I get a refund if I\'m not satisfied?',
          a: 'Yes! We offer a 30-day money-back guarantee for new customers. Contact our billing team to process your refund request.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          q: 'What are the system requirements?',
          a: 'Nyra AI is a cloud-based platform requiring only a modern web browser (Chrome, Firefox, Safari, Edge). No software installation needed. For integrations, we require REST API access to your HMS/CRM systems.'
        },
        {
          q: 'How secure is patient data?',
          a: 'We are HIPAA compliant and use end-to-end encryption for all data transmission. Patient data is stored in secure, encrypted databases with regular security audits and compliance certifications.'
        },
        {
          q: 'What is your uptime guarantee?',
          a: 'We guarantee 99.9% uptime with 24/7 monitoring. In the rare event of downtime, our team is notified immediately and works to resolve issues within our SLA commitments.'
        }
      ]
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Complete walkthrough for setting up Nyra AI',
      icon: Book,
      link: '#',
      type: 'Documentation'
    },
    {
      title: 'API Documentation',
      description: 'Technical reference for developers',
      icon: FileText,
      link: '#',
      type: 'Documentation'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      link: '#',
      type: 'Video'
    },
    {
      title: 'Integration Guide',
      description: 'Connect with HMS and CRM systems',
      icon: Book,
      link: '#',
      type: 'Documentation'
    },
    {
      title: 'Best Practices',
      description: 'Optimize your AI calling campaigns',
      icon: FileText,
      link: '#',
      type: 'Guide'
    },
    {
      title: 'Webinar Recordings',
      description: 'Watch past training sessions',
      icon: Video,
      link: '#',
      type: 'Video'
    }
  ];

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ticket submission
    console.log('Ticket submitted:', { ticketSubject, ticketMessage });
    setTicketSubject('');
    setTicketMessage('');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900">Support & Help</h1>
        <p className="text-gray-500 mt-1">Get help and support from our team</p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900">Live Chat</h3>
                <p className="text-sm text-gray-500 mt-1">Get instant help from our team</p>
                <Button className="mt-4 w-full" size="sm">
                  Start Chat
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900">Email Support</h3>
                <p className="text-sm text-gray-500 mt-1">support@nyraai.com</p>
                <Button variant="outline" className="mt-4 w-full" size="sm">
                  Send Email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900">Phone Support</h3>
                <p className="text-sm text-gray-500 mt-1">+1 (800) 555-NYRA</p>
                <Button variant="outline" className="mt-4 w-full" size="sm">
                  Call Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Support Hours */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-gray-600" />
            <div>
              <span className="text-sm text-gray-700">Support Hours:</span>
              <span className="text-sm text-gray-900 ml-2">24/7 for Critical Issues</span>
              <span className="text-sm text-gray-500 ml-2">•</span>
              <span className="text-sm text-gray-900 ml-2">Mon-Fri 9AM-6PM EST for General Support</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="tickets">
        <TabsList>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          <TabsTrigger value="new-ticket">Submit Ticket</TabsTrigger>
          <TabsTrigger value="faq">FAQs</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        {/* My Tickets Tab */}
        <TabsContent value="tickets" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Support Tickets</CardTitle>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supportTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="text-gray-900">{ticket.id}</TableCell>
                      <TableCell className="text-gray-900">{ticket.subject}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            ticket.status === 'resolved' ? 'default' :
                            ticket.status === 'in-progress' ? 'secondary' :
                            'outline'
                          }
                        >
                          {ticket.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            ticket.priority === 'high' ? 'destructive' :
                            ticket.priority === 'medium' ? 'secondary' :
                            'outline'
                          }
                        >
                          {ticket.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">{ticket.created}</TableCell>
                      <TableCell className="text-gray-600">{ticket.updated}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Submit Ticket Tab */}
        <TabsContent value="new-ticket" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Submit Support Ticket</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitTicket} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-700">Category</label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="integration">Integration Support</SelectItem>
                        <SelectItem value="training">Training Request</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Priority</label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-700">Subject</label>
                  <Input
                    placeholder="Brief description of your issue"
                    className="mt-2"
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700">Description</label>
                  <Textarea
                    placeholder="Please provide detailed information about your issue or question..."
                    className="mt-2 min-h-40"
                    value={ticketMessage}
                    onChange={(e) => setTicketMessage(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700">Attachments (Optional)</label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                    <p className="text-sm text-gray-600 mt-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button type="submit" className="gap-2">
                    <Send className="w-4 h-4" />
                    Submit Ticket
                  </Button>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FAQs Tab */}
        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Frequently Asked Questions</CardTitle>
                <div className="relative w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search FAQs..." className="pl-9" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqs.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg text-gray-900 mb-4">{category.category}</h3>
                    <Accordion type="single" collapsible className="space-y-2">
                      {category.questions.map((faq, qIdx) => (
                        <AccordionItem
                          key={qIdx}
                          value={`${idx}-${qIdx}`}
                          className="border border-gray-200 rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-sm text-gray-900 hover:no-underline">
                            <div className="flex items-start gap-2">
                              <HelpCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span className="text-left">{faq.q}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-gray-600 pl-6">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm text-gray-900">Can't find what you're looking for?</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Contact our support team or submit a ticket for personalized assistance.
                    </p>
                    <Button variant="outline" size="sm" className="mt-3">
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Help Resources & Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, idx) => {
                  const Icon = resource.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50/50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                      <h3 className="text-gray-900 mt-4">{resource.title}</h3>
                      <p className="text-sm text-gray-500 mt-2">{resource.description}</p>
                      <Badge variant="outline" className="mt-4">
                        {resource.type}
                      </Badge>
                    </div>
                  );
                })}
              </div>

              {/* Additional Resources */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">System Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm text-gray-900">All Systems Operational</span>
                      </div>
                      <Button variant="link" size="sm" className="ml-auto">
                        View Status Page
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">What's New</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">New: Multi-language support</p>
                          <p className="text-xs text-gray-500">Released Dec 1, 2025</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="link" size="sm" className="mt-3 p-0">
                      View Changelog
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Upload({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
