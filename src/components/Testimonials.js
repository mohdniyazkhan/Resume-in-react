import React from 'react';
import resumeData from '../resumeData';

const Testmonal = resumeData.testimonials.map((testcheck , i)=>{
   return(
      <li>
         <blockquote>
             <p>
               {testcheck.description}   
             </p>
             <cite>{testcheck.name}</cite>
             </blockquote> 
      </li>
   )
}) 

const Testimonialwork = (props)=>{
   return(
       <section id="testimonials">
           <div className="text-container">
              <div className="row">
                 <div className="two columns header-col">
                      <h1>
                          <span>Client Testimonials</span>
                      </h1>
                 </div>
                 <div className="ten columns flex-container">
                    <div className="flexslider">
                         <ul className="slides">
                             {Testmonal}
                         </ul>
                    </div>
                 </div>
              </div>
           </div>
       </section>
   )
}

export default Testimonialwork;