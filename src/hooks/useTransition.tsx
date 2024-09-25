import { useState } from "react";


export const useTransition = function() {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    
    const onHandleMouseOver = function ():void {
        setIsHovered(true);
    }

    const onHandleMouseLeave = function(): void {
        setIsHovered(false);
    }


    return {onHandleMouseLeave, 
            onHandleMouseOver,
            isHovered, 
            setIsHovered};
}



export const useInput = function () {
    const [input, setInput] = useState('');

    const onHandleInput = function (e: React.ChangeEvent<HTMLInputElement>):void {
        setInput(e.target.value);
    }

    return {input, onHandleInput};
}


/* 

export type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
export type TextareaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>
export type SelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>
*/