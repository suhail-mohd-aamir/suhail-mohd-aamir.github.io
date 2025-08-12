import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "engineer@example.com",
      href: "mailto:engineer@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourprofile",
      color: "hover:text-gray-900"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:engineer@example.com",
      color: "hover:text-red-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="hero-text">Get In Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to discuss your next mechanical design project? Let's connect and explore how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-hover">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="form-field">
                        <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="mt-1"
                          placeholder="Your first name"
                        />
                      </div>
                      <div className="form-field">
                        <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          className="mt-1"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div className="form-field">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div className="form-field">
                      <Label htmlFor="company" className="text-foreground">Company (Optional)</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        className="mt-1"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="form-field">
                      <Label htmlFor="subject" className="text-foreground">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="mt-1"
                        placeholder="Project inquiry, collaboration, etc."
                      />
                    </div>
                    
                    <div className="form-field">
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="mt-1"
                        placeholder="Tell me about your project requirements, timeline, and how I can help..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-glow shadow-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="card-hover">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{info.label}</p>
                            {info.href === "#" ? (
                              <p className="text-muted-foreground">{info.value}</p>
                            ) : (
                              <a
                                href={info.href}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="card-hover">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Connect Online</h2>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-primary/20 hover:scale-110 ${social.color}`}
                          title={social.label}
                        >
                          <social.icon className="w-6 h-6" />
                        </a>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Follow me on social media for updates on latest projects and industry insights.
                    </p>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="card-hover">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Response Time</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      I typically respond to all inquiries within 24 hours during business days. 
                      For urgent project discussions, feel free to reach out via phone or LinkedIn 
                      for faster response.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="hero-text">Frequently Asked Questions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What types of projects do you work on?</h3>
                  <p className="text-muted-foreground text-sm">
                    I specialize in mechanical design across various industries including automotive, aerospace, manufacturing, and robotics. From concept development to production-ready designs.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What software do you use?</h3>
                  <p className="text-muted-foreground text-sm">
                    I'm proficient in CATIA V5, Siemens NX, SolidWorks, and other industry-standard CAD software, plus simulation tools like ANSYS and ABAQUS.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Do you provide manufacturing support?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, I design with manufacturability in mind and can provide DFM analysis, technical drawings, and support throughout the production process.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What's your typical project timeline?</h3>
                  <p className="text-muted-foreground text-sm">
                    Project timelines vary based on complexity, but typical mechanical designs range from 2-8 weeks. I'll provide a detailed timeline during our initial consultation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;