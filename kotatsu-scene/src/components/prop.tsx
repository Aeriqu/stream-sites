import { AnimationControls, motion } from "framer-motion";
import { useEffect, useRef } from "react";

type PropType = {
  day: string,
  night: string,
  scale: string,
  dayControl: AnimationControls,
  nightControl: AnimationControls
}

// TODO: Add automatic placement
// TODO: Add double click to increase z-axis; right click to decrease

let baseZIndex = 2;

function doubleClickHandler(this: HTMLDivElement, ev: MouseEvent) {
  this.style.zIndex = ++baseZIndex+'';
}

function rightClickHandler(this: HTMLDivElement, ev: MouseEvent) {
  ev.preventDefault();
  this.style.zIndex = --baseZIndex+'';
  return false;
}

const Prop: React.FC<PropType> = ({
  day,
  night,
  scale,
  dayControl,
  nightControl
}) => {
  const divReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = divReference.current;
      if(div) {
        div.addEventListener('dblclick', doubleClickHandler);
        div.addEventListener('contextmenu', rightClickHandler);
      }
  }, [divReference]);

  return (
    <motion.div drag className="prop-container" ref={divReference}>
      <motion.img
        animate={dayControl}
        src={day}
        className="img prop day"
        draggable="false"
        style={{width: scale}}
      />

      <motion.img
        animate={nightControl}
        src={night}
        className="img prop night"
        draggable="false"
        style={{width: scale}}
      />
    </motion.div>
  )
}

export default Prop;