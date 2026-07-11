import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const skills = [
    { category: "CAD Software", items: ["CATIA V5", "Siemens NX", "Anyses", "AutoCAD",] },
    { category: "Analysis & Simulation", items: ["ANSYS", "Anyses Simulation", "MATLAB"] },
    { category: "Design Expertise", items: ["Mechanical Systems", "Product Development", "DFM/DFA", "GD&T"] },
    { category: "Manufacturing", items: ["CNC Machining", "Sheet Metal", "Injection Molding","Additive Manufacturing", "Welding", "Assembly"] },
  ];

  const experience = [
    {
      title: "Product Engineer",
      company: "ANAND Group https://www.anandgroupindia.com › SitesGabriel India",
      period: "2020 - 2021",
      description: "Experience in operating CNC and robotic machines within production, supporting the transition from design to manufacturing",
      achievements: [
        "Worked on the suspension system design for Hyundai Brio and Maruti Suzuki Brezza",
        "Awarded Employee of the Month for effective contributions to production efficiency in the milling process.",
        "Contributed to cross-functional teamwork, bridging design, production, and quality assurance"
      ]
    },
    {
      title: "Mechanical Design Intern",
      company: "Mahindra Automobiles",
      period: "2022 - 2023",
      description: "Developed precision mechanical components for the automotive industry, focusing Door Glass Supporter systems.",
      achievements: [
        "Designed the door glass supporter using CATIA V5, ensuring precise geometry and alignment",
        "Dimensional Accuracy: Applied GD&T standards to guarantee fit, durability, and reliability",
      ]
    },
    {
      title: "Industry-Supported Project – FAPS (FAU) with Audi",
      company: "Innovation Dynamics",
      period: "2024-2025",
      description: "Product Development Support: Assisted senior engineers in product development and design validation processes.",
      achievements: [
        "Material Study: Conducted material analysis to evaluate suitability for automotive applications",
        "Automation Design: Contributed to the design of a robotic work cell and assembly line layout for production optimization.",

      ]
    }
  ];

  const certifications = [
    "Certified Anyses Professional (CSWP)",
    "CATIA V5 Advanced Certification",
    "Siemens NX Certified Professional",
    "Autocad",

  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="hero-text">Interactive CV</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Passionate mechanical design engineer with +1 years of experience transforming innovative concepts into precision-engineered solutions
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    I'm a dedicated mechanical design engineer with a passion for creating innovative solutions that bridge the gap between conceptual ideas and real-world applications. My expertise spans across multiple industries, from automotive and aerospace to manufacturing and robotics.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    With advanced proficiency in industry-leading CAD software including CATIA V5, Siemens NX, and Anyses, I specialize in developing complex mechanical systems that meet stringent performance requirements while optimizing for manufacturability and cost-effectiveness.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    My approach combines technical excellence with creative problem-solving, ensuring that every design not only meets specifications but exceeds expectations in performance, reliability, and innovation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="hero-text">Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="hero-text">Professional Experience</span>
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                          <Badge variant="outline">{job.period}</Badge>
                        </div>
                        <p className="text-primary font-medium mb-3">{job.company}</p>
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education */}
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">Master in Elektromobilität-ACES</h4>
                      <p className="text-primary">Friedrich-Alexander-Universität Erlangen-Nürnberg</p>
                      <p className="text-sm text-muted-foreground">2022-2025</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Bachelor of Technology Automobile Engineering</h4>
                      <p className="text-primary">Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal</p>
                      <p className="text-sm text-muted-foreground">2018-2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
                  </div>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              I’m eager to apply my skills to real-world engineering projects — let’s connect and explore how I can support your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-glow shadow-glow">
                <a href="/contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;