import React from 'react'
import s from './body.module.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import henry from '../../fotos/henry.jpeg'
import northlands from '../../fotos/Northlands.png'
import cv from "../../files/cv_nicolas.pdf"
import ib from '../../fotos/ib.png'
import ig from '../../fotos/ig.png'
import henryapp from '../../files/Henryapp2.pdf'
import ecommerce from '../../files/ecommerce.pdf'

export default function Body(){

    return(
        <div className={s.container1}>
            
          <p className={s.pepe}>I'm a Fullstack web developer. </p>
          
          <div className={s.separado}>
            <p className={s.titulos}>Academic Background:</p>
          </div>

            <div class="container" className={s.container}>
              <div class="row"> 
                <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3" className={s.card} >
                    <div className={s.face + " " + s.face1}>
                        <div className={s.content}>
                            <div className={s.icon}>
                            <i  class="fas fa-graduation-cap" ></i>
                            </div>
                        </div>
                    </div>
                    <div  className={s.face + " " + s.face2}>
                        <div className={s.content}>
                            <h3>
                                <a href="https://www.soyhenry.com/" target="_blank">Henry bootcamp</a>
                            </h3>
                            <p className={s.henry}> 
                            - 4 month intensive bootcamp turning into a Fullstack web Developer. <br/>
                            - +700 hours. <br/>
                            - 2 real projects with SCRUM methodology.
                            </p>
                        </div>
                    </div>
                </div>
              </div>
              
              <div class="row"> 
                <div  class="col-sm-12 col-md-6 col-lg-3 col-xl-3" className={s.card} >
                    <div className={s.face + " " + s.face1}>
                        <div className={s.content}>
                            <div className={s.icon}>
                            <i class="fas fa-graduation-cap"></i>
                            </div>
                        </div>
                    </div>
                    <div  className={s.face + " " + s.face2}>
                        <div className={s.content}>
                          <span> 
                              
                              <h3>
                                <a href="https://www.northlands.edu.ar/en/home-slide-i/">Northlands School</a>
                              </h3> 
                              
                            </span>
                            <p className={s.letrascartas}>
                              - IB Education. <br/> 
                              - ICE Diploma / IGCSE Education. <br/>
                              - Bilingual Baccalaureate. <br/>
                              - Rugby, Football, music band, community and service projects.
                            </p>
                        </div>
                    </div>
                </div>
              </div>
              <div class="row"> 
                <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3" className={s.card} >
                    <div className={s.face + " " + s.face1}>
                        <div className={s.content}>
                            <div className={s.icon}>
                            <i class="fas fa-graduation-cap"></i>
                            </div>
                        </div>
                    </div>
                    <div  className={s.face + " " + s.face2}>
                        <div className={s.content}>
                            <h3>
                                <a href="http://www.uba.ar/" target="_blank">University of Buenos Aires</a>
                            </h3>
                            <span> 
                              
                              <p>
                                Career: Business Administration. <br/>
                                -Introductory year
                              </p>
                            </span>
                        </div>
                    </div>
                </div> 
              </div>
          </div> 

          <div className={s.separado}>
            <p className={s.titulos}>About me: </p>
          </div>

    <div className={s.cont}> 
          <div className={s.columns}> 
            <div className={s.each}> 
                <h5> Personal Summary:</h5>
                <p> Vital, practical and highly motivated
                    project developer. Open minded,
                    I really want to learn and grow
                    professionally. Cheerful and
                    positive, I try to find solutions,
                    working as a team and creating a
                    good working atmosphere.

                </p>
            </div>
          </div>
          <div className={s.columns}> 
            <div className={s.each} >
                <h5> Skills :</h5>
                <button className={s.botones + " " + s.c1} > HTML </button>{' '}
                <button className={s.botones + " " + s.c2} > CSS </button>{' '}
                <button className={s.botones + " " + s.c3} > Javascript</button>{' '}
                <button className={s.botones + " " + s.c4 + " " + s.sql} > React.js </button>{' '}
                <button className={s.botones + " " + s.c5} >Redux</button>{' '}
                <button className={s.botones + " " + s.c1} > Node.js </button>{' '}
                <button className={s.botones + " " + s.c2} > Sequelize</button>{' '}
                <button className={s.botones + " " + s.c3} > Express </button>{' '}
                <button className={s.botones + " " + s.c4 + " " + s.sql} >PostgreSQL</button>{' '}
                <button className={s.botones + " " + s.c5 } >GIT</button>{' '}                  
            </div>
          </div>

          </div>

          <div className={s.cont}> 
          <div className={s.columns}> 
            <div className={s.each}> 
                <h5> Personal info:</h5>
                <p> 
                  Tigre, Buenos Aires, Argentina. <br/>
                  Address: Liniers 2247, Barrio la escondida. <br/>
                  Birthdate: 23/12/2001. <br/>
                  Hobbies: Sports, Music, Friends and videogames.
                </p>
                <h5 className={s.margintop}> Licenses & Certifications: </h5>
                <span><p> IB education <img className={s.ib} src={ib} alt=""/></p></span>
                <span><p> ICE Diploma / IGCSE education <img className={s.ig} src={ig} alt=""/></p> </span>
            </div>
          </div>
          <div className={s.columns}> 
            <div className={s.each} >
                <h5> Contact:</h5>
                <p> Feel free to contact me!   </p>
                <p>
                  Email: <br/>
                  <button className={s.botones2 + " " + s.c2 }> nicolascailletbois3@gmail.com </button> <br/>
                  Linkedin: <br/>
                  <a href=" https://www.linkedin.com/in/nicolas-caillet-bois-0554ba1b6/"><button className={s.botones2 + " " + s.c3 + " " + s.linkedin}> https://www.linkedin.com/in/nicolas-caillet-bois-0554ba1b6/ </button> </a> <br/>
                  Github:   <br/>
                  <a href="https://github.com/NicoCaillet"><button className={s.botones2 + " " + s.c4 }> https://github.com/NicoCaillet </button></a> <br/>
                  CV:  <br/>
                   <a href={cv} target="_blank"> <button className={s.botones2 + " " + s.c5 }> CV {"<3"} </button> </a> 
                </p>
                                 
            </div>
            
          </div>

          </div>

          <div className={s.separado}>
            <p className={s.titulos}>Projects: </p>
          </div>

          <div className={s.cont}> 
          <div className={s.columns}> 
            <div className={s.each}> 
                <h5> Plant nursery E-commerce</h5>
                <p> Objective: Develop a complete ecommerce.   </p> 
                <p> Using all the technologies mentioned before, me
                    and my team developed a full e-commerce.
                    Containing products, categories, login, users, cart,
                    admin role, and many other functionality.
                </p>
                <p className={s.eccom}>Quick view through the project:</p>
                <embed src={ecommerce} type="application/pdf" width="100%" height="300px"/>

            </div>
          </div>
          <div className={s.columns}> 
            <div className={s.each} >
                <h5> Henry App </h5>
                <p> Both projects can be seen in my Github. </p>
                <p>Objective: Develop an application for an
                educational organization.
                </p>
                <p> In this application we continued developing our
                    technical and working skills.
                    We created the system for Henry company to
                    make cohorts, invite students, organize the
                    different groups and asign them teachers,
                    authentication with Github, and as well, many
                    other functionality.
                </p>

                <div> 
                <p>Quick view through the project:</p>
                 <embed src={henryapp} type="application/pdf" width="100%" height="300px" />
                </div>

                             
            </div>
            
          </div>

          </div>
          
          <div className={s.embed}>
            <p > (Both projects can be seen in my github.)</p>
          </div>

                  
    </div>
    )
}
















               