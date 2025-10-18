import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceholderModel } from "@/components/ModelViewer";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Disk Brake",
      description: "Multi-stage planetary gearbox designed for high-torque industrial applications. Features optimized gear ratios and integrated lubrication system.",
      software: ["CATIA V5", "SolidWorks"],
      category: "Mechanical Systems",
      image: 'public/images/diskbrake.jpg',
      modelUrl: "/detail/3", // Would contain actual .obj file path
    },
    {
      id: 2,
      title: "4 Cylinder Engine",
      description: "Multi-stage planetary gearbox designed for high-torque industrial applications. Features optimized gear ratios and integrated lubrication system.",
      software: ["CATIA V5", "SolidWorks"],
      category: "Mechanical Systems",
      image: 'public/images/engineassembly.jpg',
      modelUrl: "/detail/1", // Would contain actual .obj file path
    }
  ];

  const categories = ["All", "Mechanical Systems", "Fluid Systems", "Automotive", "Robotics", "Thermal Systems", "Manufacturing"];

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
              Interactive 3D models showcasing mechanical design expertise across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="card-hover overflow-hidden">
                  <CardContent className="p-0">
                    {/* 3D Model Viewer */}
                    <div className="relative">
                      <center>
                      <img height={300} src={project.image} />
                      </center>
                      {/* <Image width='300px' height='300px' src={project.image} /> */}
                      {/* <PlaceholderModel 
                        title={project.title}
                        description="Interactive 3D model - Click and drag to rotate, scroll to zoom"
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