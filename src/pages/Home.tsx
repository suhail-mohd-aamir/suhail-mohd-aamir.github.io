import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Box,
  BrainCircuit,
  Eye,
  ExternalLink,
  Github,
  Leaf,
  Mail,
  Sparkles,
} from "lucide-react";
import ThreeDName from "@/components/ThreeDName";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in">
              
              <ThreeDName />
              <h2 className="text-4xl sm:text-5xl lg:text-3xl font-extrabold mb-6 hero-text text-center">
                Artificial Intelligence + Mechanical Engineering
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                
                Mechanical engineer focused on AI-driven design, product development, CAD automation, and sustainable manufacturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-glow shadow-glow">
                  <Link to="/portfolio">
                    <Eye className="mr-2 h-4 w-4" />
                    Mechanical Design
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="hero-text">Core Expertise</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "CATIA V5",
                "Siemens NX",
                "AutoCAD",
                "FreeCAD",
                "Artificial Intelligence",
                "Life Cycle Assessment",
                "Sustainable Manufacturing",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-slate-900 text-white text-sm px-4 py-2 rounded shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="relative mb-14 text-center">
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 px-4 py-1 text-primary">
                Selected Work
              </Badge>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                <span className="hero-text">Engineering Intelligence in Action</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Two projects connecting artificial intelligence with practical
                engineering, CAD automation, and sustainable product design.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="group overflow-hidden border-cyan-400/20 bg-card/70 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_24px_70px_-24px_rgba(34,211,238,0.45)]">
                <CardContent className="p-0">
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.28),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.24),transparent_42%)]" />
                    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(34,211,238,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.3)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                    <div className="relative flex items-center gap-5">
                      <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-5 shadow-[0_0_40px_rgba(34,211,238,.25)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <BrainCircuit className="h-14 w-14 text-cyan-300" />
                      </div>
                      <ArrowRight className="h-7 w-7 text-indigo-300" />
                      <div className="rounded-2xl border border-indigo-300/30 bg-indigo-400/10 p-5 shadow-[0_0_40px_rgba(99,102,241,.25)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                        <Box className="h-14 w-14 text-indigo-300" />
                      </div>
                    </div>
                    <span className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/70">
                      Prompt → Engineering Output
                    </span>
                  </div>
                  <div className="space-y-5 p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          <Badge className="bg-cyan-500/10 text-cyan-600 hover:bg-cyan-500/15 dark:text-cyan-300">AI / CAD</Badge>
                          <Badge variant="outline"><Sparkles className="mr-1 h-3 w-3" /> Featured</Badge>
                        </div>
                        <h3 className="text-2xl font-bold transition-colors group-hover:text-cyan-500">FAUgen-AI</h3>
                      </div>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      A generative engineering project exploring how artificial
                      intelligence can accelerate design workflows and transform
                      engineering intent into useful CAD-oriented outputs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Artificial Intelligence", "CAD", "Automation", "Engineering"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal">{tech}</Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-cyan-600 text-white hover:bg-cyan-500" asChild>
                      <a href="https://github.com/suhail-mohd-aamir/FAUgen-AI" target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-emerald-400/20 bg-card/70 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-[0_24px_70px_-24px_rgba(52,211,153,0.45)]">
                <CardContent className="p-0">
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(52,211,153,0.3),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(132,204,22,0.2),transparent_42%)]" />
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/20" />
                    <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/30" />
                    <div className="relative rounded-full border border-emerald-300/30 bg-emerald-400/10 p-7 shadow-[0_0_60px_rgba(52,211,153,.3)] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                      <Leaf className="h-16 w-16 text-emerald-300" />
                    </div>
                    <div className="absolute right-5 top-5 rounded-lg border border-emerald-300/20 bg-black/25 px-3 py-2 font-mono text-xs text-emerald-200 backdrop-blur-sm">
                      CO₂ analysis
                      <div className="mt-1 h-1.5 w-20 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-emerald-400 to-lime-300" />
                      </div>
                    </div>
                    <span className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-[0.28em] text-emerald-200/70">
                      CAD → Environmental Insight
                    </span>
                  </div>
                  <div className="space-y-5 p-7">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/15 dark:text-emerald-300">Sustainable Engineering</Badge>
                      <Badge variant="outline"><Sparkles className="mr-1 h-3 w-3" /> Featured</Badge>
                    </div>
                    <h3 className="text-2xl font-bold transition-colors group-hover:text-emerald-500">Carbon Footprint Analyzer from 3D CAD Model</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      An AI-powered Python tool that extracts engineering data
                      from 3D CAD models and estimates component emissions,
                      helping designers make lower-impact decisions earlier.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "3D CAD", "AI / LLM", "Sustainability"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal">{tech}</Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-500" asChild>
                      <a href="https://github.com/suhail-mohd-aamir/Carbon_footprint" target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
