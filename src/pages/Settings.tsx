import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Switch } from '../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Building2, 
  Palette, 
  Bell, 
  CreditCard,
  Upload
} from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your hospital profile and preferences</p>
      </div>

      <Tabs defaultValue="hospital">
        <TabsList>
          <TabsTrigger value="hospital" className="gap-2">
            <Building2 className="w-4 h-4" />
            Hospital Profile
          </TabsTrigger>
          <TabsTrigger value="branding" className="gap-2">
            <Palette className="w-4 h-4" />
            Branding
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="billing" className="gap-2">
            <CreditCard className="w-4 h-4" />
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hospital" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Hospital Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-700">Hospital Name</label>
                  <Input defaultValue="City Hospital" className="mt-2" />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Registration Number</label>
                  <Input defaultValue="HSP-2024-12847" className="mt-2" />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-700">Address</label>
                <Textarea 
                  defaultValue="123 Medical Center Drive, New York, NY 10001"
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-700">Phone Number</label>
                  <Input defaultValue="+1 (555) 123-4567" className="mt-2" />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Email</label>
                  <Input defaultValue="contact@cityhospital.com" className="mt-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-700">Website</label>
                  <Input defaultValue="https://cityhospital.com" className="mt-2" />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Timezone</label>
                  <select className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg">
                    <option>EST (UTC-5)</option>
                    <option>PST (UTC-8)</option>
                    <option>CST (UTC-6)</option>
                    <option>MST (UTC-7)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-700">Business Hours</label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <Input defaultValue="09:00 AM" />
                  <Input defaultValue="06:00 PM" />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Brand Customization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm text-gray-700">Hospital Logo</label>
                <div className="mt-2 flex items-center gap-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-gray-400" />
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Logo
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Recommended: 512x512px, PNG or JPG</p>
              </div>

              <div>
                <label className="text-sm text-gray-700">Primary Color</label>
                <div className="flex items-center gap-4 mt-2">
                  <Input type="color" defaultValue="#3b82f6" className="w-20 h-10" />
                  <Input defaultValue="#3b82f6" className="flex-1" />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-700">AI Voice Name</label>
                <Input defaultValue="Nyra" className="mt-2" />
                <p className="text-xs text-gray-500 mt-1">The name patients will hear during AI calls</p>
              </div>

              <div>
                <label className="text-sm text-gray-700">Voice Gender</label>
                <select className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg">
                  <option>Female</option>
                  <option>Male</option>
                  <option>Neutral</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-700">Voice Accent</label>
                <select className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg">
                  <option>American English</option>
                  <option>British English</option>
                  <option>Australian English</option>
                  <option>Indian English</option>
                </select>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button>Save Branding</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm text-gray-900 mb-4">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">Daily Summary</div>
                      <div className="text-xs text-gray-500">Receive daily reports of AI call activity</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">Failed Calls</div>
                      <div className="text-xs text-gray-500">Get notified when calls fail</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">New Feedback</div>
                      <div className="text-xs text-gray-500">Alert when patients leave feedback</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">Weekly Analytics</div>
                      <div className="text-xs text-gray-500">Weekly performance summary</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm text-gray-900 mb-4">SMS Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">Urgent Alerts</div>
                      <div className="text-xs text-gray-500">Critical system notifications</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">System Downtime</div>
                      <div className="text-xs text-gray-500">AI agent unavailability alerts</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm text-gray-900 mb-4">In-App Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">Real-time Updates</div>
                      <div className="text-xs text-gray-500">Live call status updates</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">Campaign Completion</div>
                      <div className="text-xs text-gray-500">Notify when campaigns finish</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg text-gray-900">Professional Plan</h3>
                    <p className="text-sm text-gray-500 mt-1">Up to 5,000 calls per month</p>
                    <p className="text-2xl text-gray-900 mt-4">$499<span className="text-sm text-gray-500">/month</span></p>
                  </div>
                  <Button variant="outline">Upgrade Plan</Button>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-gray-500">Calls Used</div>
                    <div className="text-lg text-gray-900 mt-1">2,847 / 5,000</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Billing Cycle</div>
                    <div className="text-lg text-gray-900 mt-1">Dec 1 - 31</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Next Billing</div>
                    <div className="text-lg text-gray-900 mt-1">Jan 1, 2026</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gray-900 rounded flex items-center justify-center text-white text-xs">
                      VISA
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">•••• •••• •••• 4242</div>
                      <div className="text-xs text-gray-500 mt-1">Expires 12/2026</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: 'Dec 1, 2025', amount: '$499.00', status: 'Paid' },
                    { date: 'Nov 1, 2025', amount: '$499.00', status: 'Paid' },
                    { date: 'Oct 1, 2025', amount: '$499.00', status: 'Paid' },
                  ].map((invoice, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-900">{invoice.date}</div>
                        <div className="text-xs text-gray-500 mt-1">{invoice.status}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-900">{invoice.amount}</span>
                        <Button variant="ghost" size="sm">Download</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
