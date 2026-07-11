// pages/DetailPage.js
import GlbViewer from "@/components/GlbViewer";
import ObjViewer from "@/components/ObjViewer";
import { useParams, Link } from "react-router-dom";

export const items = [
  { id: 1, title: "Engine Assembly", description: "A nice 3D car", model: "/models/engineassembly.glb" },
  { id: 2, title: "House Model", description: "3D house structure", model: "/models/RadialAssembly.obj" },
  { id: 3, title: "Disk Brake", description: "3D house structure", model: "/models/diskbrake.glb" },
  { id: 4, title: "Screw jack", description: "3D house structure", model: "/models/Screwjackassembly.glb" }
];

function DetailPage() {
  const { id } = useParams();
  const item = items.find((i) => i.id === parseInt(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div className="min-h-screen pt-20">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="hero-text">{item.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {item.description}
            </p>
            <GlbViewer path={item.model} />
          </div>
        </div>
        </section>
    </div>
  );
}

export default DetailPage;