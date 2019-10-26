import React from 'react';
import resumeData from '../resumeData';


const Contacticon = resumeData.socialLinks.map((icon, i)=>{
  return(
      <li>
       <a href={icon.url}>
       <i className={icon.className}></i>
       </a>
      </li>
  )
})
const Contact = (props)=>{
   return(
       <footer>
           <div className="row">
              <div className="twelve columns">
                 <ul className="social-links">
                    {Contacticon} 
                 </ul>
              </div>
           </div>
           <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
       </footer>
   )
}

export default Contact;