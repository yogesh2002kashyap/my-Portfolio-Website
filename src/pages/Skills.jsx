export default function Skills() {
  return (
    <main className=" pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-slate-900">
          Skills<span className="text-indigo-600">.</span>
        </h1>

        {/* Skills Grid */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Frontend */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Frontend
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Vite</li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Backend
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful APIs</li>
              <li>JWT Authentication</li>
              <li>MVC Architecture</li>
            </ul>
          </div>

          {/* Database */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Database
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>MongoDB</li>
              <li>Mongoose ODM</li>
              <li>NoSQL Databases</li>
            </ul>
          </div>

          {/* Problem Solving */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Problem Solving
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>C++</li>
              <li>Data Structures & Algorithms</li>
              <li>Time & Space Complexity</li>
              <li>Optimized Code Practices</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
