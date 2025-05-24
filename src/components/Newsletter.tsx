
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-foundation-light to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-16 h-16 text-foundation-dark mx-auto mb-6" />
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foundation-dark mb-6">
            Stay Connected
          </h2>
          
          <p className="text-xl text-foundation-dark/80 mb-8">
            Subscribe to our newsletter for updates on our projects, success stories, and ways you can make a difference in our community.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-foundation-dark/20 text-foundation-dark placeholder:text-foundation-dark/60"
              required
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-foundation-blue hover:bg-foundation-blue/90 text-white px-8"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-sm text-foundation-dark/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
