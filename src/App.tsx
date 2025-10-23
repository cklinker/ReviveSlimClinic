import { Check, ChevronRight, Star, Shield, Clock, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-teal-700">ReviveSlim</span>
              <span className="text-2xl font-light text-gray-700">Clinic</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-teal-700 transition">How It Works</a>
              <a href="#packages" className="text-gray-700 hover:text-teal-700 transition">Packages</a>
              <a href="#about" className="text-gray-700 hover:text-teal-700 transition">About</a>
            </nav>
            <button className="bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition font-medium">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                FDA-Approved GLP-1 Program
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Lose Weight Naturally with Medical Support
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Personalized weight loss treatment with prescription GLP-1 medications. Board-certified providers. Results in as little as 12 weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-teal-700 text-white px-8 py-4 rounded-md hover:bg-teal-800 transition font-semibold text-lg flex items-center justify-center">
                  Start Your Journey
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-md hover:bg-teal-50 transition font-semibold text-lg">
                  Learn More
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal-600" />
                  <span>No office visits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal-600" />
                  <span>Fast approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal-600" />
                  <span>Delivered to you</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl h-96 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">15-20%</div>
                    <div className="text-xl">Average Weight Loss</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50k+</div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Star className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-gray-600">Patient Rating</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Clock className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">24-48h</div>
              <div className="text-gray-600">To Approval</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-gray-600">HIPAA Compliant</div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with medical weight loss in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-teal-100 text-teal-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Answer a few questions about your health history and weight loss goals. Takes less than 5 minutes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-teal-100 text-teal-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Provider Review</h3>
              <p className="text-gray-600 leading-relaxed">
                A board-certified provider reviews your information and creates a personalized treatment plan.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-teal-100 text-teal-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Receive Medication</h3>
              <p className="text-gray-600 leading-relaxed">
                Your prescription is sent to your door with free shipping. Start seeing results within weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to fit your weight loss journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 transition">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-gray-900">$297</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Semaglutide or Tirzepatide</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly provider check-ins</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Free shipping</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Access to support team</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition font-semibold">
                Get Started
              </button>
            </div>

            <div className="border-2 border-teal-600 rounded-xl p-8 relative shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Advanced</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-gray-900">$397</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">Best value for serious results</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Starter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Higher dosage options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Weekly support messages</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Nutrition & exercise guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Progress tracking tools</span>
                </li>
              </ul>
              <button className="w-full bg-teal-700 text-white py-3 rounded-md hover:bg-teal-800 transition font-semibold">
                Get Started
              </button>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 transition">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-gray-900">$497</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">Complete transformation package</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Advanced</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority provider access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1-on-1 health coaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom meal planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lab work included</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">FDA-Approved Medications</h2>
              <p className="text-xl text-teal-50 mb-6 leading-relaxed">
                We prescribe Semaglutide and Tirzepatide, proven GLP-1 medications that help regulate appetite, improve blood sugar control, and promote sustainable weight loss.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Clinically proven to reduce body weight by 15-20%</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Improves cardiovascular health markers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Reduces cravings and appetite naturally</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Safe & Effective</h3>
              <p className="text-teal-50 mb-6">
                Our medications are FDA-approved and have been extensively studied in clinical trials. Each prescription is carefully reviewed by board-certified healthcare providers.
              </p>
              <button className="bg-white text-teal-700 px-6 py-3 rounded-md hover:bg-gray-100 transition font-semibold">
                Learn About Safety
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ReviveSlim Clinic</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of weight loss medicine
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Board-Certified Providers</h3>
              <p className="text-gray-600">
                Every patient is reviewed by licensed healthcare professionals with expertise in weight management.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Convenient</h3>
              <p className="text-gray-600">
                No waiting rooms or office visits. Get approved and start treatment from the comfort of home.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Our care team is available to answer questions and adjust your treatment as needed.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Join thousands of patients who have achieved their weight loss goals with our program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step toward achieving your weight loss goals with medical support.
          </p>
          <button className="bg-teal-700 text-white px-10 py-4 rounded-md hover:bg-teal-800 transition font-semibold text-lg inline-flex items-center">
            Get Started Today
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold text-teal-400">ReviveSlim</span>
                <span className="text-xl font-light">Clinic</span>
              </div>
              <p className="text-gray-400 text-sm">
                Modern weight loss solutions with personalized medical care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">Providers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>support@reviveslimclinic.com</li>
                <li>1-800-REVIVE-1</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 ReviveSlim Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
