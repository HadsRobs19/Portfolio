function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-medium text-earth-700">Portfolio</span>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-earth-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-earth-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-earth-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-earth-600 mb-2 tracking-wide text-sm uppercase">Developer</p>
          <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-6 leading-tight">
            Your Name
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
            A brief tagline about who you are and what you do.
            Keep it concise and memorable.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white border-y border-stone-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-wide text-earth-600 mb-8">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-stone-700 leading-relaxed mb-4">
                Write a paragraph about your background, experience, and what drives you as a developer.
              </p>
              <p className="text-stone-700 leading-relaxed">
                What makes you unique? What are you passionate about building?
              </p>
            </div>
            <div>
              <h3 className="text-stone-900 font-medium mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'CSS', 'Git'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-earth-50 text-earth-700 text-sm border border-earth-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-wide text-earth-600 mb-12">Projects</h2>

          {/* Project 1 */}
          <article className="mb-16 pb-16 border-b border-stone-200">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-medium text-stone-900 mb-2">Project Title</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  A brief description of what this project does and the problem it solves.
                  Make it clear and compelling for someone who has never seen it.
                </p>
                <div className="flex gap-4 mb-6">
                  <a
                    href="#"
                    className="text-sm text-earth-600 hover:text-earth-700 underline underline-offset-4"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="text-sm text-stone-500 hover:text-stone-700 underline underline-offset-4"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind CSS', 'Node.js'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-stone-100 text-stone-600 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="bg-stone-100 aspect-video flex items-center justify-center border border-stone-200">
                  <span className="text-stone-400 text-sm">Screenshot</span>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-earth-50 border-l-2 border-earth-400">
              <h4 className="text-sm font-medium text-earth-700 mb-2">Retrospective</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                What would you do differently? What did you learn?
                Be honest and show your growth mindset.
              </p>
            </div>
          </article>

          {/* Project 2 */}
          <article>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-medium text-stone-900 mb-2">Second Project</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Another project description. Focus on impact and what you built.
                </p>
                <div className="flex gap-4 mb-6">
                  <a
                    href="#"
                    className="text-sm text-earth-600 hover:text-earth-700 underline underline-offset-4"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="text-sm text-stone-500 hover:text-stone-700 underline underline-offset-4"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Flask', 'PostgreSQL'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-stone-100 text-stone-600 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="bg-stone-100 aspect-video flex items-center justify-center border border-stone-200">
                  <span className="text-stone-400 text-sm">Screenshot</span>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-earth-50 border-l-2 border-earth-400">
              <h4 className="text-sm font-medium text-earth-700 mb-2">Retrospective</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Share what you learned and what you would improve.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-stone-900 text-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-wide text-earth-400 mb-4">Get in Touch</h2>
          <p className="text-2xl font-light mb-8">
            Interested in working together?
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:your@email.com"
              className="px-6 py-3 bg-earth-600 hover:bg-earth-700 text-white transition-colors"
            >
              Email Me
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-stone-600 hover:border-stone-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-stone-600 hover:border-stone-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-stone-950 text-stone-500 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  )
}

export default App
