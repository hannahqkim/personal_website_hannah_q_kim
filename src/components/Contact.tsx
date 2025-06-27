
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactMethods = [
    {
      name: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      icon: <Mail className="w-5 h-5" />,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/hannahqkim",
      href: "https://www.linkedin.com/in/hannahqkim/",
      icon: <Linkedin className="w-5 h-5" />,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      name: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
      icon: <Github className="w-5 h-5" />,
      color: "bg-gray-50 text-gray-600 border-gray-200"
    },
    {
      name: "Location",
      value: "San Francisco, CA",
      href: "#",
      icon: <MapPin className="w-5 h-5" />,
      color: "bg-green-50 text-green-600 border-green-200"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600">
            Interested in collaborating on ML/Data projects? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.name}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-full mb-4 border ${method.color}`}>
                  {method.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{method.name}</h3>
                <a 
                  href={method.href}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 break-all"
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {method.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
