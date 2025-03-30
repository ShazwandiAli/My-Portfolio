const projects = [
    {
      title: "This Portfolio Website",
      description: "Built with Next.js, Tailwind CSS, and deployed on Vercel. Serves as both my portfolio and a personal discipline tool.",
      link: "https://your-vercel-deployment.vercel.app", // replace this later
    },
    // Add more projects here in the future
  ];
  
  export default function ProjectsPage() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }