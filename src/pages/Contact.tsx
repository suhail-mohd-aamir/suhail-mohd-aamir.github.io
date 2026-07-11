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
      value: "aamir.ms.suhail@fau.de",
      href: "mailto:aamir.ms.suhail@fau.de.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+49 15510015428",
      href: "tel:+4915510015428"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nürnberg, Bavaria, Germany",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "http://linkedin.com/in/mohd-aamir-suhail",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://https://github.com/suhail-mohd-aamir",
      color: "hover:text-gray-900"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:aamir.ms.suhai@fau.de",
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
              I’m open to exciting opportunities in mechanical design. Let’s connect and discuss how I can contribute to your organization
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              

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

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
