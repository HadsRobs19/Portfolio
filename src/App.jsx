import alchemyBrewImg from './assets/alchemy-brew.png'
import microhabitImg from './assets/microhabit.png'

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
            Hadassah Roberts
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
            Fullstack Developer passionate about creating impactful change through technology.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white border-y border-stone-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-wide text-earth-600 mb-8">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-stone-700 leading-relaxed">
                I am a senior at the University of Central Florida, studying fullstack Web and App development. My goal is to connect my passion for problem solving and logic to my creative abilities as I grow in my field. I am passionate about the opportunity to create impactful changes in the world with technology. Through this, I hope to connect with other like minded individuals in the tech field and continue to contribute to the world of software development.
              </p>
            </div>
            <div>
              <h3 className="text-stone-900 font-medium mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'Golang', 'C/C++', 'CSS', 'Git'].map((skill) => (
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
                <h3 className="text-2xl font-medium text-stone-900 mb-2">Alchemy Brew</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  A multi-page static website for a fictional coffee shop, built with Claude Code and deployed to Netlify. I expanded beyond the base requirements by implementing a fully interactive blog system featuring post likes, nested comments with replies, social media sharing, and related post suggestions. The site also integrates Google Maps API to display the shop location.
                </p>
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://alchemy-brew.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-earth-600 hover:text-earth-700 underline underline-offset-4"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/HadsRobs19/coffee-shop-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone-500 hover:text-stone-700 underline underline-offset-4"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Google Maps API'].map((tech) => (
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
                <img
                  src={alchemyBrewImg}
                  alt="Alchemy Brew coffee shop website homepage"
                  className="w-full aspect-video object-cover object-top border border-stone-200"
                />
              </div>
            </div>
            <div className="mt-8 p-6 bg-earth-50 border-l-2 border-earth-400">
              <h4 className="text-sm font-medium text-earth-700 mb-2">Retrospective</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                If I were to revisit this project, I would implement incremental testing throughout the development cycle rather than consolidating testing at the end. This approach would allow for earlier bug detection and more efficient debugging. Working with AI-assisted development tools taught me the value of iterative prompting—breaking complex features into smaller, focused requests not only produces better results but also deepens understanding of the underlying code and architecture.
              </p>
            </div>
          </article>

          {/* Project 2 */}
          <article>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-medium text-stone-900 mb-2">MicroHabit</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  A habit tracking app that helps you build better routines through small, daily micro-habits. Features include custom habit creation, daily checkbox tracking, per-habit 7-day visualization with streak counters, overall progress summaries with visual progress bars, and inline edit/delete functionality. All data persists locally across sessions.
                </p>
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://microhabittracker.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-earth-600 hover:text-earth-700 underline underline-offset-4"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/HadsRobs19/MicroHabit-Tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone-500 hover:text-stone-700 underline underline-offset-4"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'CSS', 'localStorage', 'GitHub Copilot'].map((tech) => (
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
                <img
                  src={microhabitImg}
                  alt="MicroHabit tracker app interface"
                  className="w-full aspect-video object-cover object-top border border-stone-200"
                />
              </div>
            </div>
            <div className="mt-8 p-6 bg-earth-50 border-l-2 border-earth-400">
              <h4 className="text-sm font-medium text-earth-700 mb-2">Retrospective</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                To scale this application, I would migrate from localStorage to a persistent database solution and implement user authentication for personalized, cross-device access. Future iterations could incorporate social features—such as habit sharing and accountability partners—to increase user engagement. I would also refine the UX for inline editing to reduce friction and make habit management more intuitive.
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
              href="mailto:hadassahplaysflute@gmail.com"
              className="px-6 py-3 bg-earth-600 hover:bg-earth-700 text-white transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/hadassah-r/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-stone-600 hover:border-stone-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/HadsRobs19"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-stone-600 hover:border-stone-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-stone-950 text-stone-500 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Hadassah Roberts</p>
      </footer>
    </div>
  )
}

export default App
