import React, { useState, useRef } from 'react';
import imagen_img from '../../fotos/originall.jpg'
import astronauta_img from '../../fotos/astronauta.jpg'
import futbol_img from '../../fotos/futbol.jpg'
import bombero_img from '../../fotos/bombero.jpg'
import cientifico_img from '../../fotos/cientifico.jpg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import s from './fondo.module.css'

export default function Fondo(){
const imagenes = {
   imagen: imagen_img,
   astronauta: astronauta_img,
   futbol: futbol_img,
   cientifico: cientifico_img,
   bombero: bombero_img 
}

const [img, setImg] = useState(imagen_img)
const [show, setShow] = useState(false);
const [target, setTarget] = useState(null);
const ref = useRef(null);

const handleClick = (event) => {
   setShow(!show);
   setTarget(event.target);
};

let click = function(e){
   e.preventDefault();
}


let onChangeImagen = (e) => {
   if(e.target.name !== undefined){
      setImg(imagenes[e.target.name])
   
   }
   console.log(e.target.name)
}
   
return (
<div className={s.div}>
<>
  
  <br />
  <Navbar className={s.nav}>
    <Navbar.Brand>
       <div className={s.rounded}> 
            <img src={img} alt="foto nico" className={s.imagen} onClick={(e) => click(e)}/>
        

             <>
             <div className={s.changeoutfit}> 
               {['right'].map((placement) => (
                  <OverlayTrigger
                     trigger="click"
                     key={placement}
                     placement={placement}
                     overlay={
                     <Popover  id={`popover-positioned-${placement}`}>
                        <Popover.Title as="strong">{`Choose Outfit!`}</Popover.Title>
                        <Popover.Content className={s.popover}> 
                           <br/>
                           <button className={s.botones + " " + s.celeste} name="imagen" onClick={onChangeImagen}> Original </button>{' '}
                           <button className={s.botones + " " + s.verde} name="futbol" onClick={onChangeImagen}> Football </button>{' '}
                           <button className={s.botones + " " + s.rojo} name="astronauta" onClick={onChangeImagen}> Astronaut</button>{' '}
                           <button className={s.botones + " " + s.amarillo} name="cientifico" onClick={onChangeImagen}> Scientific </button>{' '}
                           <button className={s.botones + " " + s.gris} name="bombero" onClick={onChangeImagen}>Firefigther</button>{' '}
                        </Popover.Content>
                     </Popover>
                     }
                  >
                     <Button variant="secondary">Choose my outfit on your {placement}</Button>
                  </OverlayTrigger>
               ))}
               </div>
               </>
            </div>
       
    </Navbar.Brand>

    <p className={s.line + " " + s.animation + " " + s.p}> Hi, Welcome! My name is Nicolas Caillet-Bois.   </p>
    
    
  </Navbar> 
  
</>
</div>
)

}