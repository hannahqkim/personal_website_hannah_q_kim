
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer II (NLP Engineer)",
      company: "Bank of America Network Automation & Analytics Team",
      location: "New York, NY",
      period: "Oct 2022 - Present",
      description: "Skills: NLP, Search Systems, Databases, Model Deployement, Internal Tools",
      achievements: [
        "Internal Recommendation & Search System: Ask Network – (1) A “Google” search for Splunk dashboards. NLP models use tokenization, embedding, and classification models, and returns a ranked list. (2) English to SQL conversion, leveraging Macros Classifier, Seq2Seq and Multi-head attention to apply the generated SQL commands on Splunk databases.",
        "Led the creation of a data architecture blueprint, streamlining data management and supporting automation initiatives across the bank's Core Technology Infrastructure's Network Services."
      ],
      logo: "company-logos/Bank_of_America_Logo.png"
    },
    {
      title: "Part-Time ML/Data Science Consultant",
      company: "Health Tech/Biotech Labs",
      location: "Remote",
      period: "Mar 2024 - Dec 2024",
      description: "Skills: LLMs/LLM Evals, Data Visualization, Data Engineering, Computer Vision/Image Processing",
      achievements: [
        "Stealth mode startup - Health Tech, Pre-seed (Jun 2024 - Dec 2024) -- Established LLM evaluation standards, implemented ROUGE scores, adopted hallucination detection models, and built image cleaning data pipelines for microscopy images.", 
        "Sonder Research X - Cornell University Lab (Mar 2024 - May 2024): Built image cleaning data pipelines that extracted target areas of a microscopy image of a proprietary chip for cancer detection and chips that simulates the human eye which reduced manual data entry work by the scientists and efficiently pushed data into the multi-class classification computer vision model (ResNet-18)"
      ],
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=64&h=64&fit=crop&crop=center"
    },
    {
      title: "Machine Learning Scientist Summer Associate",
      company: "Tempus AI Pathology Imaging Team (former Google Brain Team)",
      location: "Redwood City, CA",
      period: "Jul 2022 – Sep 2022",
      description: "Skills: PHIs(Patient Health Information), Model evaluation, Explainability",
      achievements: [
        "De-identified patient health information from histopathological images", 
        "Achieved 15x increase in precision for PHI detection model",
        "Maintained 100% recall while maximizing precision",
        "Increased explainability of convolutional features using activation forward hooks"
      ],
      logo: "company-logos/Tempus_Logo.png"
    },
    {
      title: "Graduate Research Assistant",
      company: "New York University Dept. of Systems Biology",
      location: "New York, NY",
      period: "May 2021 – Sep 2022",
      description: "Skills: HPC, Slurm, Scientific Computing, Bioinformatics",
      achievements: [
        "Studied how pressure affects malignant pancreatic cancer cell growth and its correlation to downstream/upstream genetic pathways.", 
        "Developed novel CNN (UNET+cell type classifier) for cancer analysis",
        "Found significant area & perimeter differences between normal vs. tumor samples",
        "Achieved Wasserstein distance >1 in statistical analysis"
      ],
      logo: "company-logos/New_York_University_Logo.png"
    },
    {
      title: "Undergraduate Research Assistant",
      company: "University of Georgia Dept. of Neurobiology",
      location: "Athens, GA", 
      period: "Oct 2017 – May 2021",
      description: "Skills: Image Processing, Publication-Ready Figure Building, Data Engineerings",
      achievements: [
        "Studied biophysical mechanisms that played a role in foveal formation in the retina.", 
        "Analyzed 400k+ retinal histological and immunohistological images",
        "Predicted lizard age & mutation of world's first CRISPR lizards (97% accuracy)",
        "Published 3 papers and was featured in The New York Times"
      ],
      logo: "company-logos/Unversity_of_Georgia_logo.png"
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
