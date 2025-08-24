// pages/DetailPage.js
import ObjViewer from "@/components/ObjViewer";
import React from "react";
import { useParams, Link } from "react-router-dom";

export const items = [
  { id: 1, title: "Car Model", description: "A nice 3D car", model: "/models/airboat.obj" },
  { id: 2, title: "House Model", description: "3D house structure", model: "/models/house.obj" },
  { id: 3, title: "Chair Model", description: "Simple chair object", model: "/models/chair.obj" },
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
              <span className="hero-text">Get In Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              I’m open to exciting opportunities in mechanical design. Let’s connect and discuss how I can contribute to your organization
            </p>
            <ObjViewer path={item.model} />
          </div>
        </div>
        </section>
    </div>
  );
}

export default DetailPage;