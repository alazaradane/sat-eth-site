import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CheckCircle2, Users, CreditCard, Shield, Send, ChevronDown, Star } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * SAT ETH Landing Page
 * Design Philosophy: Modern Educational Trust
 * - Deep teal (#1B5E8F) for stability and expertise
 * - Bright yellow (#FFD700) for opportunity and energy
 * - Bold typography hierarchy with Poppins font
 * - Asymmetric layouts with geometric accents
 * - Student-centric messaging and imagery
 */

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const calculateCountdown = () => {
      // Set the target date to the next SAT exam (example: August 2026)
      const targetDate = new Date("2026-08-29T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleReserveClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      const message = `Hello! I want to register for SAT. My name is ${name} and my email is ${email}.`;
      const telegramUrl = `https://t.me/azsat369?text=${encodeURIComponent(message)}`;
      window.open(telegramUrl, "_blank");
      setName("");
      setEmail("");
    }
  };

  const handleLearnMore = () => {
    window.open("https://t.me/satethie", "_blank");
  };

  const faqItems = [
    {
      question: "What is included in the 15,000 ETB registration fee?",
      answer:
        "The registration fee is all-inclusive and covers your guaranteed seat at a verified test center, registration processing, and full support from our team throughout your registration journey. There are no hidden charges.",
    },
    {
      question: "How long does the registration process take?",
      answer:
        "Once you submit your information and valid ID, our team typically processes registrations within 24-48 hours. You'll receive confirmation via Telegram with your test center details.",
    },
    {
      question: "Can I change my test date after registration?",
      answer:
        "Yes, you can request to change your test date. Please contact us on Telegram at @azsat369 and we'll help you reschedule to the next available test date.",
    },
    {
      question: "What documents do I need for registration?",
      answer:
        "You'll need a valid National ID or Passport. Make sure your ID is current and clearly readable. We'll guide you through the document submission process.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Refunds are available if you cancel before your test date. Please contact us on Telegram to discuss your specific situation and available options.",
    },
    {
      question: "Do you provide SAT preparation materials?",
      answer:
        "        While we focus on registration and test center placement, we can recommend trusted SAT preparation resources. Join our Telegram channel at https://t.me/satethie for study tips and resources.",
    },
  ];

  const testimonials = [
    {
      name: "Nathan Dawit",
      university: "University of Minnesota Twin Cities",
      text: "SAT ETH made the registration process so smooth. I got my guaranteed seat and scored 1520! Now studying at University of Minnesota Twin Cities.",
      rating: 5,
    },
    {
      name: "Christian Kenmos",
      university: "George Mason University",
      text: "The support from the team was exceptional. They answered all my questions and made sure everything was perfect for test day.",
      rating: 4,
    },
    {
      name: "Dawit Assefa",
      university: "Pomona College",
      text: "I was worried about finding a test center, but SAT ETH guaranteed my spot. Best decision I made for my SAT journey.",
      rating: 4,
    },
    {
      name: "Selam Getnet",
      university: "Virginia Tech University",
      text: "Professional, reliable, and truly invested in student success. Highly recommend SAT ETH to anyone serious about their SAT.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-primary shadow-lg" : "bg-primary"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/sat-eth-logo-new_6a41c59e.png"
              alt="SAT ETH Logo"
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold text-white">SAT ETH</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#benefits"
              className="text-white hover:text-white/70 transition-colors duration-200"
            >
              Why Us
            </a>
            <a
              href="#requirements"
              className="text-white hover:text-white/70 transition-colors duration-200"
            >
              Requirements
            </a>
            <a
              href="#register"
              className="text-white hover:text-white/70 transition-colors duration-200"
            >
              Register
            </a>
            <a
              href="#faq"
              className="text-white hover:text-white/70 transition-colors duration-200"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-white hover:text-white/70 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary via-primary to-blue-600">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
          <img
            src="/manus-storage/sat-eth-yellow-accent_1059faf1.png"
            alt="Decorative accent"
            className="w-full h-full animate-pulse"
          />
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                SAT ETH
              </h1>
              <div className="h-1 w-32 bg-accent"></div>
              <p className="text-xl md:text-2xl font-semibold">
                Official SAT Registration Support
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                Unlock your path to global recognition. Secure your seat at a verified test center with guaranteed placement and expert support.
              </p>

              {/* Pricing Card */}
              <Card className="bg-white text-foreground p-6 rounded-2xl shadow-xl border-0 max-w-sm">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Registration Fee
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-primary">15,000</span>
                    <span className="text-lg font-semibold text-foreground">ETB</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">1 TICKET</p>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-foreground">
                      All-inclusive. No hidden charges.
                    </p>
                  </div>
                </div>
              </Card>

              <Button
                onClick={handleLearnMore}
                size="lg"
                className="bg-accent hover:bg-yellow-500 text-foreground font-bold text-lg px-8 py-6 rounded-lg transition-all duration-200 hover:scale-105"
              >
                Learn More on Telegram
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative hidden md:block">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/manus-storage/sat-eth-student-studying_f7117577.png"
                  alt="Student studying at desk"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent opacity-20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">
              Next SAT Exam
            </h2>
            <p className="text-muted-foreground mb-8">August 29, 2026</p>

            <div className="grid grid-cols-4 gap-4 md:gap-6">
              {/* Days */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-2 border-primary/20">
                <div className="text-3xl md:text-4xl font-black text-primary">
                  {countdown.days}
                </div>
                <div className="text-sm font-semibold text-muted-foreground mt-2">
                  Days
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-2 border-primary/20">
                <div className="text-3xl md:text-4xl font-black text-primary">
                  {countdown.hours}
                </div>
                <div className="text-sm font-semibold text-muted-foreground mt-2">
                  Hours
                </div>
              </div>

              {/* Minutes */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-2 border-primary/20">
                <div className="text-3xl md:text-4xl font-black text-primary">
                  {countdown.minutes}
                </div>
                <div className="text-sm font-semibold text-muted-foreground mt-2">
                  Minutes
                </div>
              </div>

              {/* Seconds */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-2 border-primary/20">
                <div className="text-3xl md:text-4xl font-black text-primary">
                  {countdown.seconds}
                </div>
                <div className="text-sm font-semibold text-muted-foreground mt-2">
                  Seconds
                </div>
              </div>
            </div>

            <p className="text-primary font-bold mt-8">
              Don't miss out! Register your seat today.
            </p>
          </div>
        </div>
      </section>

      {/* Why Students Choose Us Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center">
            Why Students Choose Us
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Benefit 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Ideal for Students Applying Abroad
                </h3>
                <p className="text-muted-foreground">
                  Recognized globally for admissions worldwide. Your SAT score opens doors to top universities and international opportunities.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Scholarships & Top Universities
                </h3>
                <p className="text-muted-foreground">
                  Opens the door to scholarships, honors programs, and admission to top universities worldwide. Maximize your potential.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Guaranteed Test Center Seat
                </h3>
                <p className="text-muted-foreground">
                  Verified test center placement with no last-minute surprises. Your seat is secured from day one.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Expert Support Throughout
                </h3>
                <p className="text-muted-foreground">
                  Dedicated support from registration to test day. We're here to ensure your success every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center">
            What You Need
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* ID Requirement */}
            <Card className="p-8 border-2 border-primary/10 hover:border-primary/30 transition-colors rounded-2xl">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground">ID Required</h3>
              </div>
              <p className="text-muted-foreground">
                Valid National ID or Passport for registration. This ensures your seat is properly secured and verified.
              </p>
            </Card>

            {/* Payment Requirement */}
            <Card className="p-8 border-2 border-primary/10 hover:border-primary/30 transition-colors rounded-2xl">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                    <CreditCard className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground">Pay After Confirmation</h3>
              </div>
              <p className="text-muted-foreground">
                Payment is only due once your seat is successfully secured. No upfront payment required—peace of mind guaranteed.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center">
            Student Success Stories
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-2 border-primary/10 hover:border-primary/30 transition-all rounded-2xl shadow-md hover:shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-semibold">
                    {testimonial.university}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center">
              Reserve Your Seat
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-12"></div>

            <Card className="p-8 md:p-12 border-2 border-primary/20 rounded-2xl shadow-lg">
              <form onSubmit={handleReserveClick} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <p className="text-sm text-muted-foreground">
                  Click "Reserve" to contact us on Telegram and complete your registration.
                </p>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Reserve on Telegram
                </Button>
              </form>
            </Card>

            <p className="text-center text-muted-foreground mt-8">
              We'll send you a message on Telegram to confirm your registration.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-16"></div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="w-full">
                  <Card className="p-6 border-2 border-primary/10 hover:border-primary/30 transition-colors rounded-lg cursor-pointer hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-foreground text-left">
                        {item.question}
                      </h3>
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 ml-4" />
                    </div>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Card className="p-6 mt-2 bg-primary/5 border-2 border-primary/10 rounded-lg">
                    <p className="text-foreground leading-relaxed">{item.answer}</p>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <img
            src="/manus-storage/sat-eth-yellow-accent_1059faf1.png"
            alt="Decorative accent"
            className="w-full h-full"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              A Few Spots Left!!!
            </h2>
            <p className="text-xl opacity-90">
              August registration closes soon. Secure your seat today and take the first step toward your global success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() =>
                  document
                    .getElementById("register")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                size="lg"
                className="bg-accent hover:bg-yellow-500 text-foreground font-bold text-lg px-8 py-6 rounded-lg transition-all duration-200 hover:scale-105"
              >
                Reserve Your Seat
              </Button>
              <Button
                onClick={handleLearnMore}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Get in Touch
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-8"></div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-2xl border border-primary/10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Message us on Telegram</p>
                  <p className="text-2xl font-bold text-foreground">@azsat369</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                DM us with any questions or to reserve your spot
              </p>
              <Button
                onClick={() => window.open("https://t.me/azsat369", "_blank")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold"
              >
                Message Us on Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/manus-storage/sat-eth-logo-new_6a41c59e.png"
                  alt="SAT ETH Logo"
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold">SAT ETH</span>
              </div>
              <p className="text-white/70">
                Official SAT Registration Support for ambitious students.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a
                    href="#benefits"
                    className="hover:text-white transition-colors"
                  >
                    Why Us
                  </a>
                </li>
                <li>
                  <a
                    href="#requirements"
                    className="hover:text-white transition-colors"
                  >
                    Requirements
                  </a>
                </li>
                <li>
                  <a
                    href="#register"
                    className="hover:text-white transition-colors"
                  >
                    Register
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-white/70">
                <strong>Telegram:</strong> @azsat369
              </p>
              <p className="text-white/70 mt-2">
                <strong>Channel:</strong> https://t.me/satethie
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>&copy; 2026 SAT ETH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
