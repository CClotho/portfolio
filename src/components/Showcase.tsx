import { useTransition } from '../hooks/useTransition';
import { CardProp } from '../utils/propUtils';


const Showcase = function({title, content}: CardProp) {
    
    const {onHandleMouseLeave, onHandleMouseOver, isHovered} = useTransition();
    
    return (
        <>
           <div id="showcase" className="container lilita-one-regular" onMouseLeave={onHandleMouseLeave}>
            <h2 className={`box showcase-box ${isHovered ? 'up' : ''}`} onMouseEnter={onHandleMouseOver}> {title}</h2>
            <div className="content">
                {content}
            </div>
           </div>
        </>
    )
}


export default Showcase;

