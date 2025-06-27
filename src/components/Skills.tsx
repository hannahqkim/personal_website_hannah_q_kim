
import { Code, Database, Brain, BarChart3, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLflow", "Jupyter"],
      color: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-8 h-8" />,
      skills: ["Apache Spark", "Kafka", "Airflow", "SQL", "PostgreSQL", "MongoDB"],
      color: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Git"],
      color: "bg-green-100 text-green-700 border-green-200"
    },
    {
      title: "Analytics & Viz",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Plotly", "Tableau", "Power BI"],
      color: "bg-orange-100 text-orange-700 border-orange-200"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-blue-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
