
import { Archive as ArchiveIcon, Construction } from 'lucide-react';

const Archive = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <ArchiveIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Archive</h2>
          <p className="text-xl text-muted-foreground mb-8">
            A collection of writings, thoughts, and projects throughout the years
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-12">
          <Construction className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-card-foreground mb-2">Under Construction</h3>
          <p className="text-card-foreground/70">
            This space will soon be filled with articles, insights, and reflections. 
            Check back soon for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Archive;
