import { useTransition } from '../hooks/useTransition';
import { CardProp } from '../utils/propUtils';


const About = function({title, content}: CardProp) {
    
    const {onHandleMouseLeave, onHandleMouseOver, isHovered} = useTransition();
    
    return (
        <>
           <div id="about" className="container lilita-one-regular" onMouseLeave={onHandleMouseLeave}>
            <h2 className={`box about-box ${isHovered ? 'down' : ''}`} onMouseEnter={onHandleMouseOver}> {title}</h2>
            <div className="content">
                {content}
            </div>
           </div>
        </>
    )
}



export default About;