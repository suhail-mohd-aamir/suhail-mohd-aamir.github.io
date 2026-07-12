import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Disk Brake",
      description: "A detailed disk-brake component modeled for accurate geometry, fit, and manufacturability.",
      software: ["CATIA V5", "ANSYS"],
      category: "Assembly",
      image: '/images/diskbrake.jpg',
      modelUrl: "/detail/3", // Would contain actual .obj file path
    },
    {
      id: 2,
      title: "4 Cylinder Engine",
      description: "A complete four-cylinder engine assembly demonstrating component integration, packaging, and mechanical design.",
      software: ["CATIA V5", "ANSYS"],
      category: "Assembly",
      image: '/images/engineassembly.jpg',
      modelUrl: "/detail/1", // Would contain actual .obj file path
    },
    {
      id: 3,
      title: "Screw Jack Assembly",
      description: "A screw-jack assembly designed to demonstrate mechanical motion, load transfer, and part integration.",
      software: ["CATIA V5", "ANSYS"],
      category: "Assembly",
      image: '/images/Screwjack.jpg',
      modelUrl: "/detail/4", // Would contain actual .obj file path
    },
    {
      id: 5,
      title: "Suspension Spring",
      description: "A detailed suspension spring model demonstrating the geometry of a load-bearing automotive suspension component.",
      software: ["FreeCAD"],
      category: "Mechanical Part",
      modelUrl: "/detail/6",
      model: "/models/Suspension_springoo.stl",
      image: "/models/Suspension%20Spring.png",
      color: "#dc2626",
    },
    {
      id: 6,
      title: "Flange Part",
      description: "A precision flange component with a central bore and mounting-hole pattern designed for secure mechanical connections.",
      software: ["FreeCAD"],
      category: "Mechanical Part",
      modelUrl: "/detail/5",
      model: "/models/flange_part.stl",
      image: "/images/flange-part.svg",
    },
    {
      id: 7,
      title: "Vacuum Part",
      description: "A detailed vacuum-system component modeled for mechanical fit, functional geometry, and manufacturing visualization.",
      software: ["FreeCAD"],
      category: "Mechanical Part",
      modelUrl: "/detail/7",
      model: "/models/vaccum.stl",
      image: "/models/Vaccum.png",
      color: "#16a34a",
    },
    {
      id: 8,
      title: "Helical Gear",
      description: "A precision helical gear featuring angled teeth for smooth power transmission, reduced noise, and improved load distribution.",
      software: ["FreeCAD"],
      category: "Mechanical Part",
      modelUrl: "/detail/8",
      model: "/models/Helical%20Gear.stl",
      image: "/models/helical%20gear.png",
      color: "#92400e",
    }
  ];

  const sections = ["Assembly", "Mechanical Part"];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="hero-text">3D Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Interactive CAD models showcasing mechanical design, product development, and manufacturing-focused engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Mechanical Design Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto space-y-16">
            {sections.map((section) => (
              <div key={section}>
                <div className="mb-8 text-center">
                  <Badge variant="secondary" className="mb-3 px-4 py-2">Mechanical Design</Badge>
                  <h2 className="text-3xl font-bold hero-text">{section}</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter((project) => project.category === section).map((project) => (
                <Card key={project.id} className="card-hover overflow-hidden">
                  <CardContent className="p-0">
                    {/* 3D Model Viewer */}
                    <div className="relative">
                      {project.image ? (
                        <div className="flex justify-center">
                          <img
                            className="h-[300px] w-full object-contain"
                            src={project.image}
                            alt={`${project.title} preview`}
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="h-[300px] flex items-center justify-center bg-gradient-to-br from-muted to-muted/40">
                          <div className="text-center">
                            <div className="mx-auto mb-4 h-24 w-24 rounded-full border-[14px] border-primary/30 shadow-inner" />
                            <p className="font-medium text-foreground">{project.title} 3D Model</p>
                            <p className="text-sm text-muted-foreground">Open the interactive model below</p>
                          </div>
                        </div>
                      )}
                      <p className="text-muted-foreground text-center mt-2">Mohd Aamir Suhail • Interactive 3D Model • Click and drag to rotate • Scroll to zoom</p>
                      {/* <Image width='300px' height='300px' src={project.image} /> */}
                      {/* <PlaceholderModel 
                        title={project.title}
                        description="Mohd Aamir Suhail • Interactive 3D Model • Click and drag to rotate • Scroll to zoom"
                      /> */}
                    </div>
                    
                    {/* Project Details */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="ml-2">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.software.map((software) => (
                          <Badge key={software} variant="secondary" className="text-xs">
                            {software}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap mt-10">
                        <Link className="btn bg-blue-500 rounded p-5 text-white w-full text-center" to={project.modelUrl}>View in 3D</Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
                </div>
              </div>
            ))}
            </div>
          </div>
      </section>

      {/* Instructions Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">
              <span className="hero-text">How to Interact with 3D Models</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary/30 rounded"></div>
                </div>
                <h3 className="font-semibold mb-2">Rotate</h3>
                <p className="text-sm text-muted-foreground">Click and drag to rotate the 3D model</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary/30 rounded"></div>
                </div>
                <h3 className="font-semibold mb-2">Zoom</h3>
                <p className="text-sm text-muted-foreground">Scroll or pinch to zoom in and out</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary/30 rounded"></div>
                </div>
                <h3 className="font-semibold mb-2">Pan</h3>
                <p className="text-sm text-muted-foreground">Right-click and drag to pan around</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
