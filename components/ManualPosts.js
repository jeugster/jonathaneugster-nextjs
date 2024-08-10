export default function Posts(){
  return (
    <div className="cardwrapper grid-flow-row flex-nowrap">

      <article>
        <h1>Unlocking Efficiency with Next.js: A Powerful Tool for Static Site Generation</h1>

        <p>Next.js is a robust framework that empowers developers to optimize static site generation while maintaining full control over presentation. This approach reduces the need for costly licenses or proprietary hosting, allowing websites to be deployed just about anywhere at a minimal cost.</p>

        <h2>Key Features</h2>

        <ul>
          <li><strong>Local Markdown Content:</strong> The site seamlessly renders local markdown content to a static HTML site, ensuring that all content is easily manageable and accessible.</li>
          <li><strong>Buildtime Rendering:</strong> Static pages are rendered once, when new data becomes available, and served forever. This approach minimizes load on servers and ensures a smooth user experience.</li>
          <li><strong>Preprocessing:</strong> The framework's preprocessing capabilities allow for a minimal code base that is compatible, reliable, and accessible across devices and browsers.</li>
          <li><strong>Open Source and Source Controlled:</strong> With Next.js, your code is open source and source controlled, making it portable and adaptable to changing requirements.</li>
          <li><strong>Flexible Hosting Options:</strong> The website can be hosted inexpensively on any cloud, on bare metal or a managed service. You're always in control of the software and its deployment.</li>
        </ul>

        <p>By leveraging the power of Next.js, this website is am optimally static site, built for discovery, with a high level of customizability and flexibility.</p>
      </article>

      <article>
        <h1>About this Personal Portfolio and Blog</h1>
        <h2>Built with Next.js, Netlify, and Tailwind CSS</h2>

        <p>I'm excited to share my personal portfolio and blog, which is built with Next.js hosted on Netlify and uses Tailwind CSS for style.</p>

        <p>This stack allows me to strike a balance between ease of use and developer freedom.</p>

        <h2>The Beauty of This Setup</h2>
        <p>The beauty of this setup lies in its flexibility. Non-technical team members can manage content using a familiar CMS with a web interface or work in markdown, while developers have complete control over every part of the development process in one code repository.</p>

        <h2>Key Benefits:</h2>
        <ul>
          <li><strong>Static Site Generation (SSG)</strong>: The site is built using maximally static files, which means faster load time on any device.</li>
          <li><strong>Open-source libraries</strong>: I utilized only open-source tools and libraries to ensure maximum flexibility and minimal overhead.</li>
          <li><strong>Site is Version-controlled with Git on GitHub</strong>: The codebase is managed with Git, ensuring that updates are tracked and versioned to enable measurable step by step improvement.</li>
          <li><strong>Incremental builds</strong>: Only new or updated components trigger the generation of static files, reducing unnecessary rebuilds and minimizing downtime.</li>
        </ul>

        <h2>Third-party Integrations:</h2>
        <ul>
          <li><strong>Google Tag Manager (GTM)</strong>: The site uses GTM to manage third-party tags and scripts, ensuring a seamless experience for users and adminstrators.</li>
          <li><strong>Performance audits with Lighthouse</strong>: Regular performance audits help us identify areas for improvement and optimize the site's performance.</li>
          <li><strong>Google Analytics</strong>: Google Analytics allows a business to gain insights into user behavior and make data-driven decisions.</li>
          <li><strong>Accessibility (a11y) first</strong>: Our builds are configured to fail if accessibility errors are detected, ensuring that our site is usable by a diverse audience with a mind towards equity and inclusion for all.</li>
        </ul>
      </article>
    </div>
  )
}