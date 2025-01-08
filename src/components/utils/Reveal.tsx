import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion"

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
    const ref = useRef(null)
    const isInView = useInView( ref, {amount: 0.6} );

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView){
            mainControls.start("visible")
        }
    }, [isInView]);

    return (
        <div ref={ref} style={{ position: 'relative', zIndex:2}}>
            <motion.div 
                variants={{
                    hidden: {opacity:0, y: 10},
                    visible: {opacity:1, y:0},
                }}

                initial={{ y: -70, opacity: 0 }}
                animate={mainControls}
                transition={{ duration: 0.5, delay:0.5 }}
            >{children}</motion.div>
        </div>
    );
};

export default Reveal;