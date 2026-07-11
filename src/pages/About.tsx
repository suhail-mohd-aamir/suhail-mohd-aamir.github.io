import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, FolderKanban, GraduationCap, Linkedin } from "lucide-react";

const skills = [
  { category: "CAD & Engineering", items: ["CATIA V5", "Siemens NX", "AutoCAD", "FreeCAD", "Ansys","Abaqus"] },
  { category: "AI & Digital Engineering Tool", items: ["Artificial Intelligence","PyTorch","Git", "CAD Atomation", "Python","NumPy","RAG","LLM", "AI-driven Design"] },
  
];

type ExperienceItem = {
  title: string;
  organization?: string;
  period?: string;
  highlights: string[];
};

const experience: ExperienceItem[] = [
  {
    title: "Data Analytics Intern — Erasmus+",
    organization: "Vision Factory, Barcelona, Spain",
    period: "April 2025 – October 2025",
    highlights: [
      "Cleaned, processed, and analyzed client datasets using Python, Pandas, and Excel.",
      "Prepared structured datasets for machine-learning applications and maintained accurate database records."
    ],
  },
  {
    title: "Design Engineer Intern (R&D)",
    organization: "Mahindra & Mahindra (India)",
    period: "1 Aug 2017 – 5 Sep 2018",
    highlights: [
      "Designed product ranges using CATIA and created model prototypes.",
      "Supported testing and performance evaluation of vehicle systems.",
    ],
  },
  {
    title: "Manufacturing Engineering Trainee",
    organization: "Gabriel India Pvt. Ltd.",
    period: "July 2016 – August 2016",
    highlights: [
      "Gained practical exposure to automotive components, manufacturing processes, and production machinery.",
      "Supported shop-floor activities involving CNC machining, component inspection, and automotive production operations.",
    ],
  },
];

const projects = [
  {
    title: "LCA of Fully Automated Spray Coating System of Wireharness",
    organization: "Institute FAPS, FAU Erlangen-Nürnberg",
    highlights: [
      "Conducted an LCA of a fully automated spray-coating system and evaluated its environmental impact.",
      "Compared the automated process with traditional wire-harness taping through literature research..",
      "Modified the robot gripper in Siemens NX to improve wire-harness handling..",
    ],
  },
  {
    title: "AI-Based Ride Recommendation System",
    organization: "uRyde, Nürnberg",
    highlights: [
      "Developed a machine learning-based recommendation engine to improve ride allocation and match users with suitable rides.",
      "Analyzed user and journey data to enhance matching accuracy, response rate and overall ride-sharing efficiency..",
    ],
  },
  {
    title: "ECO-Cart Design",
    organization: "National ECO-Kart Competition, India",
    highlights: [
      "Designed and analyzed structural components using CATIA V5.",
      "Supported frame fabrication and transmission-system assembly.",
      "Applied vehicle dynamics, design validation, and team-based manufacturing practices.",
    ],
  },
];

const About = () => (
  <div className="min-h-screen pt-20">
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl"><span className="hero-text">Profile & Experience</span></h1>
        <p className="text-xl text-muted-foreground">Mechanical engineer combining AI-driven design, product development, and sustainable manufacturing.</p>
      </div>
    </section>

    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <Card className="card-hover mx-auto max-w-4xl">
        <CardContent className="space-y-5 p-8 text-lg leading-relaxed">
          <p>I am a mechanical engineer based in Nürnberg with a focus on AI-driven design, product development, and sustainable manufacturing. I enjoy turning engineering challenges into practical, production-aware solutions.</p>
          <p>At Institute FAPS, FAU Erlangen-Nürnberg, I worked on automated spray coating for automotive wire harnesses—combining CATIA V5 and AutoCAD design with robotic work-cell planning and Life Cycle Assessment.</p>
          <p>My broader interests include artificial intelligence, CAD automation, electromobility, IoT, carbon-footprint analysis, and sustainable production technology.</p>
        </CardContent>
      </Card>
    </section>

    <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold"><span className="hero-text">Technical Expertise</span></h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <Card key={group.category} className="card-hover"><CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold">{group.category}</h3>
              <div className="flex flex-wrap gap-2">{group.items.map((item) => <Badge key={item} variant="secondary">{item}</Badge>)}</div>
            </CardContent></Card>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold"><span className="hero-text">Professional Experience</span></h2>
        <div className="space-y-8">
          {experience.map((job) => (
            <Card key={job.title} className="card-hover"><CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"><Briefcase className="h-6 w-6 text-primary" /></div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    {job.period && <Badge variant="outline">{job.period}</Badge>}
                  </div>
                  {job.organization && <p className="mb-4 font-medium text-primary">{job.organization}</p>}
                  <ul className="space-y-2">{job.highlights.map((item) => <li key={item} className="flex gap-2 text-sm"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul>
                </div>
              </div>
            </CardContent></Card>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold"><span className="hero-text">Projects</span></h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.title} className="card-hover"><CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"><FolderKanban className="h-6 w-6 text-primary" /></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 font-medium text-primary">{project.organization}</p>
                  <ul className="space-y-2">{project.highlights.map((item) => <li key={item} className="flex gap-2 text-sm"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul>
                </div>
              </div>
            </CardContent></Card>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="card-hover mx-auto max-w-4xl"><CardContent className="p-8">
        <div className="mb-6 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><GraduationCap className="h-6 w-6 text-primary" /></div><h2 className="text-2xl font-bold">Education</h2></div>
        <h3 className="font-semibold">Master's Studies — Electromobility (ACES)</h3>
        <p className="text-primary">Friedrich-Alexander-Universität Erlangen-Nürnberg</p>
        <p className="text-sm text-muted-foreground">2022–2025 · Majors: Artificial Intelligence and Sustainability in Production Technology</p>

        <div className="mt-6 border-t border-border pt-6">
          <h3 className="font-semibold">Bachelor of Technology in Automobile Engineering</h3>
          <p className="text-primary">Rustam Ji Institute of Technology</p>
          <p className="text-sm text-muted-foreground">10 July 2018 – 7 May 2021</p>
          <p className="mt-1 text-sm text-muted-foreground">Border Security Force Academy, Tekanpur, Gwalior (MP), 475005 Gwalior, India</p>
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <h3 className="font-semibold">Diploma in Automobile Engineering</h3>
          <p className="text-primary">BSF Polytechnic, CSMT, Tekanpur</p>
          <p className="text-sm text-muted-foreground">9 July 2014 – 8 December 2017</p>
          <p className="mt-1 text-sm text-muted-foreground">BSF Academy, Tekanpur, Gwalior (MP), 475005 Gwalior, India</p>
        </div>
        </CardContent>
      </Card>
    </section>

    <section className="px-4 py-12 text-center sm:px-6 lg:px-8">
      <h2 className="mb-6 text-3xl font-bold">Let's Connect</h2>
      <p className="mb-8 text-xl text-muted-foreground">Open to opportunities in mechanical design, AI-enabled engineering, and sustainable product development.</p>
      <Button asChild className="btn-glow shadow-glow"><a href="https://www.linkedin.com/in/mohd-aamir-suhail/" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" />View LinkedIn Profile</a></Button>
    </section>
  </div>
);

export default About;
