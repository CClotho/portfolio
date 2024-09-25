import { useTransition } from '../hooks/useTransition';
import { useState } from 'react';
interface CardProp {
    title: string | null;
    content?: string | null;
  
}

 const Test = function({title, content}: CardProp) {
    
    const {onHandleMouseLeave, onHandleMouseOver, isHovered} = useTransition();
   
    
    return (
        <>
          {title && title === 'Contact' && 
          
          <div className="container" onMouseLeave={onHandleMouseLeave}>
            <h2 className={`test box ${isHovered ? 'stay' : ''} `} onMouseEnter={onHandleMouseOver}> {title}</h2>
            <div className="content">
                Content
            </div>
           </div>
          
          }

         {title && title === 'Home' && 
          
          <div className="container" onMouseLeave={onHandleMouseLeave}>
            <h2 className={`test2 box ${isHovered ? 'stay' : ''}`} onMouseEnter={onHandleMouseOver}> {title}</h2>
            <div className="content">
                Content
            </div>
           </div>
          }

         {title && title === 'About' && 
          
          <div className="container" onMouseLeave={onHandleMouseLeave}>
            <h2 className={`box ${isHovered ? 'stay' : ''}`} onMouseEnter={onHandleMouseOver}> {title}</h2>
            <div className="content">
                Content
            </div>
           </div>
          }
           
        </>
    )
}

export default Test;