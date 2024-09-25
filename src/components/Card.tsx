import { useTransition } from '../hooks/useTransition';
/* Template */

interface CardProp {
    title: string | null;
    content: string | null;
  
}


const Card = function({title, content}: CardProp) {
    
    const {onHandleMouseLeave, onHandleMouseOver, isHovered} = useTransition();
    
    return (
        <>
           <div className="container" onMouseLeave={onHandleMouseLeave}>
            <h2 className={`box ${isHovered ? 'stay' : ''}`} onMouseEnter={onHandleMouseOver}> {title}</h2>
            <div className="content">
                Content
            </div>
           </div>
        </>
    )
}



export default Card;