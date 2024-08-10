import Link from 'next/link'

export default function Resume() {
    return (
  <div className="cardwrapper">
   <div className="card">
    <ul>
     <li>
      <h2>Languages</h2>
     </li>
     <li>HTML</li>
     <li>CSS</li>
     <li>JavaScript</li>
     <li>Markdown</li>
    </ul>
   </div>
   <div className="card">
    <ul>
     <li>
      <h2>Tools</h2>
     </li>
     <li></li>
     <li>Nextjs</li>
     <li>Nodejs</li>
     <li>TailwindCSS</li>
                    <li>Git</li>
                    <li>GenAI</li>
     {/* <li>
                    <i className="fab fa-docker"></i> Docker
                </li>
                <li>
                    <i className="fas fa-dharmachakra"></i> K8s
                </li> */}
    </ul>
   </div>
   <div className="card">
    <ul>
     <li>
      <h2>Principles</h2>
     </li>
     <li>Automation</li>
     <li>Resilience</li>
     <li>Accessibility</li>
     <li>Design</li>
    </ul>
   </div>
   <div className="card">
    <ul>
     <li>
      <h2>Certs</h2>
     </li>
     <li>
      <Link href="https://www.freecodecamp.org/certification/jonathaneugster/responsive-web-design">
       Responsive Web Design
      </Link>
     </li>
     <li>
      <Link href="https://www.freecodecamp.org/certification/jonathaneugster/javascript-algorithms-and-data-structures">
       JS Data Structures & Algorithms
      </Link>
     </li>
     <li>BA, St. Olaf College</li>
     <li>FAA SUAS Remote Pilot</li>
    </ul>
         </div>
         <div className="card">
              <ul>
        <li>
            <h2>Projects</h2>
                 </li>
                 <li>
                     Mecha.Me
                 </li>
                 <li>
                     Red Raven Drone
                 </li>
                 <li>
                     Nefarious Porpoise
                 </li>
                 <li>
                     Sweet Spring Forest Farm
                 </li>
                 <li>
                     Humongous Fungus
                 </li>
                 
    </ul>
         </div>
  </div>
 )
}
