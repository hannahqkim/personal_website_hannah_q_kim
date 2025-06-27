
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/91097503-d60d-4a06-921e-9c88d99a67f5.png" 
              alt="Hannah Kim - ML/Data Engineer"
              className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-white"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
            ML/Data Engineer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Transforming data into intelligent solutions that drive business impact
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://drive.google.com/file/d/1dQ4jBEKX1V4IXzc0vDtUk85j8YUddDqi/view?usp=sharing', '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
            View Projects
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 animate-fade-in">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/hannahqkim/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
