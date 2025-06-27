
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior ML Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead machine learning initiatives for fraud detection and customer analytics. Built scalable ML pipelines processing millions of transactions daily.",
      achievements: [
        "Reduced fraud losses by 40% through advanced ML models",
        "Scaled ML infrastructure to handle 10x traffic growth",
        "Mentored team of 5 junior engineers"
      ]
    },
    {
      title: "Data Engineer",
      company: "DataFlow Solutions",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Designed and implemented data pipelines and ETL processes for large-scale analytics platforms serving enterprise clients.",
      achievements: [
        "Built real-time data pipelines processing 1TB+ daily",
        "Improved data quality and reduced processing time by 60%",
        "Implemented automated monitoring and alerting systems"
      ]
    },
    {
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Remote",
      period: "2019 - 2020",
      description: "Developed predictive models and data-driven insights for retail and e-commerce clients. Specialized in customer behavior analysis.",
      achievements: [
        "Increased customer retention by 25% through predictive modeling",
        "Deployed 15+ ML models to production",
        "Created automated reporting dashboards"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">Building data-driven solutions across industries</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.title + exp.company}
              className="relative flex items-start mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-16 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mt-1 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                  <div className="flex items-center text-blue-600 font-semibold">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {exp.company}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
