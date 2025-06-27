
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
      ],
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center" // Tech company placeholder
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
      ],
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=64&h=64&fit=crop&crop=center" // Data/analytics placeholder
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
      ],
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=64&h=64&fit=crop&crop=center" // Analytics placeholder
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">Building data-driven solutions across industries</p>
        </div>
        
        <div className="relative">
          {/* Timeline line - warm brown color */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-700/30"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.title + exp.company}
              className="relative flex items-start mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot - warm brown color */}
              <div className="absolute left-6 w-4 h-4 bg-amber-700 rounded-full border-4 border-background shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-16 bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">{exp.title}</h3>
                      <div className="flex items-center text-amber-700 font-semibold">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm mt-1 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {exp.location}
                </div>
                
                <p className="text-card-foreground/80 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-card-foreground/70">{achievement}</span>
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
