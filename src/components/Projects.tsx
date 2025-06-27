
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Partygraph",
      date: "May 2025",
      description: "Meta Llama 4 Hackathon Top 6 Finalist: AI/backend lead - a graph-based event discovery platform using LLaMA 4 to semantically parse text/images into structured event data and contextual tags - integrating natural language queries and visual graph navigation to connect users with events by \"vibe\" and interest, enhancing access to niche communities often missed by traditional platforms.",
      github: "https://github.com/tinglu12/partygraph-front",
      tech: ["LLaMA 4", "Graph Databases", "NLP", "React", "Python"]
    },
    {
      title: "Grammarly4SMILES",
      date: "Jan 2023", 
      description: "Schrodinger Hackathon Best Developer Tool Award: Science and backend lead – created a molecule validation chatbox using RDKit that provided information about properties of a valid molecule when inputting a SMILES string.",
      github: "https://github.com/hannahqkim/hacking-the-gender-stack-green",
      tech: ["RDKit", "Python", "Molecular Chemistry", "API Development"]
    },
    {
      title: "Image Captioning Model from Scratch",
      date: "Nov 2021",
      description: "Recreated various multi-modal learning models with encoder-decoder architectures where CNNs are the encoder, and the RNNs are the decoder. BLEU scores: B1 scores came out in the 40s, B2 came out in the mid 20s, and B3 was around 6-8 – where adding an attention layer and multiple LSTM layers increased performance.",
      github: "https://drive.google.com/file/d/1XwWzviK4RR9Bpc_FtyrnFjab4JIYpQD6/view?usp=sharing",
      tech: ["CNN", "RNN", "LSTM", "Attention Mechanisms", "PyTorch", "Computer Vision"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Real-world applications of ML and data engineering</p>
        </div>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="hover:shadow-lg transition-all duration-300 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl text-card-foreground">{project.title}</CardTitle>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    <CardDescription className="text-card-foreground/70 leading-relaxed text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                  
                  <div className="flex gap-3 flex-shrink-0">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-border hover:bg-accent"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      {project.github.includes('drive.google.com') ? 'View' : 'Code'}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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
