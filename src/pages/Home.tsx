import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Eye, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="hero-text">Mechanical Design Engineer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transforming innovative concepts into precision-engineered solutions using 
                CATIA V5, Siemens NX, and SolidWorks. Explore my interactive 3D portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-glow shadow-glow">
                  <Link to="/portfolio">
                    <Eye className="mr-2 h-4 w-4" />
                    View Portfolio
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="w-8 h-8 bg-primary/30 rounded group-hover:bg-primary/50 transition-colors"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">CATIA V5</h3>
                  <p className="text-muted-foreground">
                    Advanced surface modeling, assembly design, and product lifecycle management
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="w-8 h-8 bg-primary/30 rounded group-hover:bg-primary/50 transition-colors"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Siemens NX</h3>
                  <p className="text-muted-foreground">
                    Parametric modeling, simulation, and integrated CAE solutions
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="w-8 h-8 bg-primary/30 rounded group-hover:bg-primary/50 transition-colors"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">SolidWorks</h3>
                  <p className="text-muted-foreground">
                    Rapid prototyping, sheet metal design, and design validation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="hero-text">Featured Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore interactive 3D models of my latest mechanical design projects
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="card-hover">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 bg-primary/40 rounded"></div>
                      </div>
                      <p className="text-muted-foreground">3D Model Preview</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Precision Gearbox Assembly</h3>
                    <p className="text-muted-foreground mb-4">
                      Multi-stage reduction gearbox designed for high-torque applications
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/portfolio">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 bg-primary/40 rounded"></div>
                      </div>
                      <p className="text-muted-foreground">3D Model Preview</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Hydraulic Actuator System</h3>
                    <p className="text-muted-foreground mb-4">
                      Compact hydraulic system with integrated pressure control
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/portfolio">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your next mechanical design project and bring innovative solutions to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-glow shadow-glow">
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Start a Project
                </Link>
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

export default Home;