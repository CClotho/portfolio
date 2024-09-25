import { useTransition } from '../hooks/useTransition';
import { CardProp } from '../utils/propUtils';


const Contact = function({title, content}: CardProp) {
    
    const {onHandleMouseLeave, onHandleMouseOver, isHovered} = useTransition();
    
    return (
        <>
           <div id="contact" className="container lilita-one-regular" onMouseLeave={onHandleMouseLeave}>
            <h2 className={`box contact-box ${isHovered ? 'left' : ''}`} onMouseEnter={onHandleMouseOver}> {title}</h2>
            <div className="content">
                {content}
            </div>
           </div>
        </>
    )
}



export default Contact;