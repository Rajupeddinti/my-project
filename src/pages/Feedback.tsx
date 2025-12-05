import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
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
import { Progress } from '../components/ui/progress';
import { 
  Star, 
  Search, 
  Filter,
  TrendingUp,
  TrendingDown,
  Smile,
  Meh,
  Frown
} from 'lucide-react';

export default function Feedback() {
  const feedbackList = [
    {
      id: 1,
      patient: 'Sarah Johnson',
      rating: 5,
      comment: 'Very helpful and professional call. The AI was understanding and scheduled my appointment perfectly.',
      sentiment: 'positive',
      date: '2 hours ago',
      category: 'AI Call Quality'
    },
    {
      id: 2,
      patient: 'Michael Chen',
      rating: 4,
      comment: 'Quick and efficient service. Appreciated the reminder call.',
      sentiment: 'positive',
      date: '3 hours ago',
      category: 'Service Quality'
    },
    {
      id: 3,
      patient: 'Emily Davis',
      rating: 5,
      comment: 'AI was very understanding and patient with my questions. Excellent experience!',
      sentiment: 'positive',
      date: '5 hours ago',
      category: 'AI Call Quality'
    },
    {
      id: 4,
      patient: 'James Wilson',
      rating: 3,
      comment: 'Service was okay, but the call was a bit robotic at times.',
      sentiment: 'neutral',
      date: '1 day ago',
      category: 'AI Call Quality'
    },
    {
      id: 5,
      patient: 'Lisa Anderson',
      rating: 2,
      comment: 'Had to repeat myself several times. Could be improved.',
      sentiment: 'negative',
      date: '1 day ago',
      category: 'Communication'
    },
  ];

  const categories = [
    { name: 'AI Call Quality', count: 89, avgRating: 4.6, trend: 'up' },
    { name: 'Service Quality', count: 76, avgRating: 4.5, trend: 'up' },
    { name: 'Communication', count: 45, avgRating: 4.2, trend: 'down' },
    { name: 'Appointment Booking', count: 123, avgRating: 4.8, trend: 'up' },
    { name: 'Response Time', count: 67, avgRating: 4.4, trend: 'up' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900">Feedback & Ratings</h1>
        <p className="text-gray-500 mt-1">Monitor patient satisfaction and feedback</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Avg Rating</p>
                <p className="text-2xl text-gray-900 mt-1">4.7</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <Smile className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">CSAT Score</p>
                <p className="text-2xl text-gray-900 mt-1">94%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">NPS Score</p>
                <p className="text-2xl text-gray-900 mt-1">72</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Responses</p>
                <p className="text-2xl text-gray-900 mt-1">1,247</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rating Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Rating Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => {
              const percentage = rating === 5 ? 68 : rating === 4 ? 22 : rating === 3 ? 7 : rating === 2 ? 2 : 1;
              return (
                <div key={rating} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm text-gray-900">{rating}</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <Progress value={percentage} className="flex-1" />
                  <div className="text-sm text-gray-600 w-12 text-right">{percentage}%</div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Feedback by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div key={category.name} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">{category.name}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-lg text-gray-900">{category.avgRating}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">{category.count} responses</div>
                  </div>
                  {category.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search feedback..." className="pl-9" />
            </div>
            <Select defaultValue="all-ratings">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-ratings">All Ratings</SelectItem>
                <SelectItem value="5-star">5 Stars</SelectItem>
                <SelectItem value="4-star">4 Stars</SelectItem>
                <SelectItem value="3-star">3 Stars</SelectItem>
                <SelectItem value="2-star">2 Stars</SelectItem>
                <SelectItem value="1-star">1 Star</SelectItem>
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
            <Select defaultValue="all-categories">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-categories">All Categories</SelectItem>
                <SelectItem value="ai-quality">AI Call Quality</SelectItem>
                <SelectItem value="service">Service Quality</SelectItem>
                <SelectItem value="communication">Communication</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Feedback List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Comment</TableHead>
                <TableHead>Sentiment</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feedbackList.map((feedback) => (
                <TableRow key={feedback.id}>
                  <TableCell className="text-gray-900">{feedback.patient}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < feedback.rating 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="max-w-md">
                    <p className="text-sm text-gray-600 truncate">{feedback.comment}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {feedback.sentiment === 'positive' && <Smile className="w-4 h-4 text-green-600" />}
                      {feedback.sentiment === 'neutral' && <Meh className="w-4 h-4 text-gray-600" />}
                      {feedback.sentiment === 'negative' && <Frown className="w-4 h-4 text-red-600" />}
                      <span className="text-sm capitalize">{feedback.sentiment}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{feedback.category}</Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">{feedback.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
