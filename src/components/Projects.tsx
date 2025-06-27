
import { ExternalLink, Github, BarChart3, Brain, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Real-time Fraud Detection System",
      description: "Built an ML pipeline that processes 10M+ transactions daily with 99.7% accuracy using ensemble methods and real-time feature engineering.",
      tech: ["Python", "Apache Kafka", "TensorFlow", "Redis", "AWS"],
      metrics: ["99.7% Accuracy", "< 100ms Latency", "10M+ Daily Transactions"],
      icon: <Brain className="w-6 h-6" />,
      github: "https://github.com",
      live: "https://demo.example.com",
      color: "border-l-purple-500"
    },
    {
      title: "Customer Analytics Data Platform",
      description: "Designed and implemented a scalable data platform processing customer behavior data from multiple sources with automated ML insights.",
      tech: ["Apache Spark", "Airflow", "PostgreSQL", "Docker", "Kubernetes"],
      metrics: ["500GB+ Daily Processing", "15 Data Sources", "Real-time Dashboards"],
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com",
      live: "https://analytics.example.com",
      color: "border-l-blue-500"
    },
    {
      title: "Predictive Maintenance ML Model",
      description: "Developed time-series forecasting models for industrial equipment, reducing maintenance costs by 35% through predictive analytics.",
      tech: ["PyTorch", "MLflow", "Pandas", "Plotly", "FastAPI"],
      metrics: ["35% Cost Reduction", "92% Prediction Accuracy", "200+ Sensors"],
      icon: <BarChart3 className="w-6 h-6" />,
      github: "https://github.com",
      live: "https://maintenance.example.com",
      color: "border-l-green-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Real-world applications of ML and data engineering</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${project.color} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Metrics</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
