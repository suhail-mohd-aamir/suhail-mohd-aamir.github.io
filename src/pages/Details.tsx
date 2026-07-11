// pages/DetailPage.js
import GlbViewer from "@/components/GlbViewer";
import ObjViewer from "@/components/ObjViewer";
import StlViewer from "@/components/StlViewer";
import { useParams } from "react-router-dom";

export const items = [
  { id: 1, title: "Engine Assembly", description: "A nice 3D car", model: "/models/engineassembly.glb" },
  { id: 2, title: "House Model", description: "3D house structure", model: "/models/RadialAssembly.obj" },
  { id: 3, title: "Disk Brake", description: "3D house structure", model: "/models/diskbrake.glb" },
  { id: 4, title: "Screw Jack Assembly", description: "A mechanical lifting assembly demonstrating motion and load transfer.", model: "/models/Screwjackassembly.glb" },
  { id: 5, title: "Flange Part", description: "A precision flange component designed for secure mechanical connections.", model: "/models/flange_part.stl" },
  { id: 6, title: "Suspension Spring", description: "A detailed load-bearing spring used in an automotive suspension system.", model: "/models/Suspension_springoo.stl", color: "#dc2626" },
  { id: 7, title: "Vacuum Part", description: "A detailed vacuum-system component designed for mechanical fit and functional performance.", model: "/models/vaccum.stl", color: "#16a34a" },
  { id: 8, title: "Helical Gear", description: "A precision helical gear designed for smooth, quiet power transmission and improved load distribution.", model: "/models/Helical%20Gear.stl", color: "#92400e" }
];

function DetailPage() {
  const { id } = useParams();
  const item = items.find((i) => i.id === Number(id));

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
            {item.model.toLowerCase().endsWith(".stl") ? (
              <StlViewer path={item.model} color={item.color} />
            ) : item.model.toLowerCase().endsWith(".obj") ? (
              <ObjViewer path={item.model} />
            ) : (
              <GlbViewer path={item.model} color={item.color} />
            )}
          </div>
        </div>
        </section>
    </div>
  );
}

export default DetailPage;
