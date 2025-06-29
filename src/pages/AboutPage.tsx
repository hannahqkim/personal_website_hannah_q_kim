import React from 'react';

const AboutPage = () => (
  <section className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-4xl font-bold mb-6">About Me</h1>
    <div className="flex flex-col gap-8 items-start">
      <div className="flex-1">
        <p className="mb-4">
          Hi, I'm Hannah Q. Kim — a machine learning engineer, data scientist, and creative technologist based in New York City (born and raised in Atlanta, Georgia). I specialize in building intelligent systems at the intersection of data engineering, AI research, and user-centric product design.
        </p>
        <p className="mb-4">
          Currently, I work at Bank of America on the Network Automation & Analytics team, where I've led the development of an internal semantic search engine and a natural language–to–SQL tool—empowering non-technical employees to query and discover insights from complex Splunk datasets using plain English. My background spans both large-scale infrastructure and rapid LLM prototyping, making me comfortable working across the stack and across disciplines.
        </p>
        <p className="mb-4">
          Before fully pivoting into tech, I studied <strong>cell biology and bioinformatics</strong>, developing image analysis pipelines that contributed to <strong>three scientific publications</strong> and even a feature in <strong>The New York Times</strong>. I later earned a master's in computer science, driven by a desire to harness the full power of machine learning in real-world systems.
        </p>
        <p className="mb-4">
          Outside of my 9-to-5, I've worked as a part-time consultant for health tech and biotech startups—most recently helping a stealth pre-seed company evaluate hallucinations in LLM outputs using open-source tools like Patronus AI's Lynx model.
        </p>
        <p className="mb-4">
          I'm passionate about building tools that feel magical but are grounded in rigorous engineering. Whether it's search, recommendation, or LLM-powered workflows, I thrive in zero-to-one environments where ambiguity is high, stakes are real, and innovation matters.
        </p>
        <p className="mb-4">
          When I'm not coding, you'll probably find me producing music on Logic Pro, vlogging my travels and editing them in Final Cut Pro, or hanging out with my clingy British Shorthair cat, <strong>Adam</strong>. I'm endlessly curious, occasionally restless, and always looking for what's next—whether that's a new startup opportunity, a creative side project, or a winter escape from NYC's freezing temperatures.
        </p>
        <p className="mb-4">
          If you're building something that bridges human creativity and machine intelligence, let's talk.
        </p>
      </div>
      <img
        src="/adam.png"
        alt="Adam the British Shorthair cat"
        className="w-64 h-64 object-cover rounded-xl shadow-lg mx-auto"
      />
    </div>
  </section>
);

export default AboutPage; 