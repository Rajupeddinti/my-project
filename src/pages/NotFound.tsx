import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="text-center">
        <h1 className="text-6xl text-gray-900">404</h1>
        <p className="text-xl text-gray-500 mt-4">Page not found</p>
        <p className="text-sm text-gray-400 mt-2">
          The page you're looking for doesn't exist.
        </p>
        <Button asChild className="mt-8 gap-2">
          <a href="/">
            <Home className="w-4 h-4" />
            Back to Dashboard
          </a>
        </Button>
      </div>
    </div>
  );
}
