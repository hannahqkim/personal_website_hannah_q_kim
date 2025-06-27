
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hey, I'm Hannah
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
          ML/Data Engineer
        </h2>
        
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            I turn complex data into intelligent solutions <em>(quickly)</em> full-stack, 
            shipping-first, metrics-driven.
          </p>
          <p className="text-gray-700 mb-4">
            Currently I am working on transforming data into actionable insights using 
            machine learning and data engineering best practices.
          </p>
          <p className="text-gray-700">
            My Go-to stack is <strong>Python, TensorFlow, PyTorch, Apache Spark, AWS, Docker, 
            PostgreSQL, React, and Tailwind CSS</strong>.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-gray-700 mb-2">
            You can talk to me about <strong>ML, data engineering, life, or anything else</strong>.
          </p>
          <p className="text-gray-700">Say a Hi on LinkedIn</p>
        </div>

        <div className="flex gap-4">
          <Button 
            className="bg-gray-900 hover:bg-gray-800 text-white"
            onClick={() => window.open('https://drive.google.com/file/d/1dQ4jBEKX1V4IXzc0vDtUk85j8YUddDqi/view?usp=sharing', '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
          <Button variant="outline" className="border-gray-300">
            <Mail className="w-4 h-4 mr-2" />
            E-Mail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
