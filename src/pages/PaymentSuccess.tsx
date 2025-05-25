
import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount');
  const purpose = searchParams.get('purpose');
  
  const [confettiVisible, setConfettiVisible] = useState(true);

  useEffect(() => {
    // Hide confetti effect after 3 seconds
    const timer = setTimeout(() => {
      setConfettiVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Success Icon */}
            <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            {/* Thank You Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-foundation-dark mb-6">
              Thank You for Your <span className="text-green-600">Donation!</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your generous contribution will make a real difference in the lives of those we serve. 
              We are incredibly grateful for your support.
            </p>

            {/* Donation Details */}
            {amount && (
              <div className="bg-foundation-blue/5 rounded-lg p-6 mb-8 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-foundation-dark mb-4">Donation Details</h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold">₦{parseInt(amount).toLocaleString()}</span>
                  </div>
                  {purpose && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Purpose:</span>
                      <span className="font-semibold">{decodeURIComponent(purpose)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600 font-semibold">Completed</span>
                  </div>
                </div>
              </div>
            )}

            {/* What's Next */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-foundation-dark mb-4">What happens next?</h3>
              <div className="text-left space-y-3 text-gray-600">
                <p>• You will receive a confirmation email shortly</p>
                <p>• Your donation will be allocated to the specified program</p>
                <p>• We'll keep you updated on the impact of your contribution</p>
                <p>• You can track our progress through our impact dashboard</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-foundation-blue hover:bg-foundation-blue/90 text-white px-8 py-3">
                  <Home className="w-5 h-5 mr-2" />
                  Return Home
                </Button>
              </Link>
              
              <Link to="/donate">
                <Button variant="outline" className="border-foundation-blue text-foundation-blue hover:bg-foundation-blue hover:text-white px-8 py-3">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Again
                </Button>
              </Link>
            </div>

            {/* Social Sharing */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Share your impact with others:</p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const text = `I just donated to Firdausi Ringim Foundation! Join me in making a difference. #MakeADifference #Charity`;
                    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin)}`;
                    window.open(url, '_blank');
                  }}
                  className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  Share on Twitter
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}`;
                    window.open(url, '_blank');
                  }}
                  className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Share on Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
