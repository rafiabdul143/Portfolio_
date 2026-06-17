import React from "react";
import { useParams, Link } from "react-router-dom";
import architecture from "../assets/skillnet architecture.png";
import { projects } from "../data/Projects";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";

const ProjectPage = () => {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
     <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-6">
  <div className="max-w-xl text-center">

    {/* Error Code */}
    <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0f6dc5] via-[#4fa0f1] to-[#033f78]">
      404
    </h1>

    {/* Title */}
    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
      Project Not Found
    </h2>

    {/* Description */}
    <p className="mt-4 text-neutral-400 leading-relaxed">
      The project you are looking for could not be found.
      It may have been removed, renamed, or the URL entered is incorrect.
      Explore other projects or return to the homepage.
    </p>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
      <Link
        to="/projects"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0f6dc5] via-[#4fa0f1] to-[#033f78] text-white font-medium hover:opacity-90 transition-all duration-200 shadow-lg shadow-blue-900/30"
      >
        Browse Projects
      </Link>

      <Link
        to="/"
        className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-[#4fa0f1] hover:bg-neutral-900 text-neutral-300 transition-all duration-200"
      >
        Return Home
      </Link>
    </div>

    {/* Decorative Line */}
    <div className="mt-12 flex justify-center">
      <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#4fa0f1] to-transparent" />
    </div>

  </div>
</div>
    );
  }

  const isCompleted = project.status === "completed";

  return (
<div className="min-h-screen bg-[#09090b] text-neutral-100 pt-20">      {/* Header */}
     <header className="border-b border-neutral-800 sticky top-0 bg-[#09090b] z-40">
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

    <Link
      to="/projects"
      className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition"
    >
      <ArrowLeft size={16} />
      Back to Projects
    </Link>

    <div className="flex flex-wrap gap-3">

      {project.github &&
        project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-neutral-700 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-800/60 transition-all duration-200"
          >
            <Github size={16} />
            Source Code
          </a>
        )}

      {project.live &&
        project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#0f6dc5]  to-[#033f78] hover:shadow-lg
             hover:shadow-blue-500/20 transition-all duration-200"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}

    </div>

  </div>
</header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-14">

        {/* Hero */}
        <section className="mb-12">

          <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4fa0f1]">
  Status
</span>

            <span className="text-neutral-700">•</span>

            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                isCompleted
                  ? "bg-green-500/10 text-green-400 ring-1 ring-green-500/20"
                  : "bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20"
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 size={12} />
              ) : (
                <Clock size={12} />
              )}
              {isCompleted ? "Completed" : "Ongoing"}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl leading-relaxed">
            {project.longDescription ||
              project.shortDescription}
          </p>

        </section>

        {/* Banner Image */}
        <section className="mb-14">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-800 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60 pointer-events-none" />
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => {
                e.currentTarget.src = "/placeholder-project.png";
              }}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </section>

        {/* Grid */}
        <section className="grid lg:grid-cols-3 gap-12">

          {/* Left Sidebar */}
          <aside className="space-y-6 lg:order-1 order-2">

            {/* Technologies */}
            <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/40 hover:border-neutral-700 transition-colors duration-200">
              <h3 className="flex items-center gap-2 text-sm uppercase tracking-wider text-neutral-500 mb-4">
                <Layers size={14} className="text-[#4fa0f1]" />
                Technologies
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech?.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:border-blue-400/40 transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Metadata */}
            <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/40 hover:border-neutral-700 transition-colors duration-200">
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
                Project Metadata
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Status</span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      isCompleted
                        ? "bg-green-500/10 text-green-400 ring-1 ring-green-500/20"
                        : "bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Tech Count</span>
                  <span className="text-neutral-300 font-medium">
                    {project.tech?.length || 0}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Project Type</span>
                  <span className="text-neutral-300 font-medium">
                    {project.category }
                  </span>
                </div>
              </div>
            </div>

            {/* Links (sidebar fallback for smaller screens / quick access) */}
            {((project.github && project.github !== "#") ||
              (project.live && project.live !== "#")) && (
              <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/40">
                <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
                  Project Links
                </h3>

                <div className="flex flex-col gap-3">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      <Github size={15} />
                      View Source
                    </a>
                  )}

                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#0f6dc5] via-[#4fa0f1] to-[#033f78] hover:opacity-80 transition-opacity duration-200"
                    >
                      <ExternalLink size={15} className="text-[#4fa0f1]" />
                      Visit Live Site
                    </a>
                  )}
                </div>
              </div>
            )}
            
   {/* Stats */}
{project.stats && (
  <section>
    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
      <span className="w-1 h-6 rounded-full bg-gradient-to-b from-[#0f6dc5] via-[#4fa0f1] to-[#033f78]" />
      Project Statistics
    </h2>

    <div className="flex flex-col gap-4">
      {project.stats.frontend && (
        <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900/30">
          <p className="text-neutral-500 text-sm">Frontend</p>
          <h3 className="text-2xl font-bold mt-2">
            {project.stats.frontend}
          </h3>
        </div>
      )}

      {project.stats.backend && (
        <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900/30">
          <p className="text-neutral-500 text-sm">Backend</p>
          <h3 className="text-2xl font-bold mt-2">
            {project.stats.backend}
          </h3>
        </div>
      )}

      {project.stats.database && (
        <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900/30">
          <p className="text-neutral-500 text-sm">Database</p>
          <h3 className="text-2xl font-bold mt-2">
            {project.stats.database}
          </h3>
        </div>
      )}
    </div>
  </section>
)}

          </aside>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-14 lg:order-2 order-1">

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-semibold mb-5 flex items-center gap-3">
                <span className="w-1 h-6 rounded-full bg-gradient-to-b from-[#0f6dc5] via-[#4fa0f1] to-[#033f78]" />
                Project Overview
              </h2>

              <p className="text-neutral-400 leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            {/* Features */}
            {project.features &&
              project.features.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <span className="w-1 h-6 rounded-full bg-gradient-to-b from-[#0f6dc5] via-[#4fa0f1] to-[#033f78]" />
                    Key Features
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 border border-neutral-800 rounded-lg p-5 bg-neutral-900/30 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-200"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-[#4fa0f1] mt-0.5 shrink-0"
                          />
                          <span className="text-neutral-300">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

        
              {/* Architecture */}
              {project.architecture && (
               <section>
  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
    <span className="w-1 h-6 rounded-full bg-gradient-to-b from-[#0f6dc5] via-[#4fa0f1] to-[#033f78]" />
    Architecture Overview
  </h2>

  <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/30">
    <img
      src={architecture}
      alt="Project Architecture"
      className="w-full rounded-lg object-contain"
    />
  </div>
</section>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
  <section>
    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
      <span className="w-1 h-6 rounded-full bg-gradient-to-b from-[#0f6dc5] via-[#4fa0f1] to-[#033f78]" />
      Challenges & Solutions
    </h2>

    <div className="space-y-4">
      {project.challenges.map((challenge, index) => (
        <div
          key={index}
          className="border border-neutral-800 rounded-xl p-5 bg-neutral-900/30 hover:border-neutral-700 transition-all duration-200"
        >
          <h3 className="font-semibold text-white mb-2">
            {challenge.title}
          </h3>

          <p className="text-neutral-400">
            {challenge.solution}
          </p>
        </div>
      ))}
    </div>
  </section>
)}

              {/* Future Enhancements */}
              {project.futureEnhancements &&
                project.futureEnhancements.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                      <span className="w-1 h-6 rounded-full bg-gradient-to-b from-[#0f6dc5] via-[#4fa0f1] to-[#033f78]" />
                      Future Enhancements
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      {project.futureEnhancements.map((item, index) => (
                        <div
                          key={index}
                          className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/30"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

              

            {/* System Logs */}
            {project.terminalLogs &&
              project.terminalLogs.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <span className="w-1 h-6 rounded-full bg-gradient-to-b from-[#0f6dc5] via-[#4fa0f1] to-[#033f78]" />
                    Development Logs
                  </h2>

                  <div className="bg-black border border-neutral-800 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                    {project.terminalLogs.map(
                      (log, index) => (
                        <div
                          key={index}
                          className="flex gap-3 text-green-400 mb-2 last:mb-0"
                        >
                          <span className="text-neutral-600 select-none">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{log}</span>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

          </div>
        </section>

      </main>

      

    </div>
  );
};

export default ProjectPage;