import { AnimationControls, motion } from "framer-motion";

type BackgroundType = {
  day: string,
  night: string,
  dayControl: AnimationControls,
  nightControl: AnimationControls
}

const Background: React.FC<BackgroundType> = ({
  day,
  night,
  dayControl,
  nightControl
}) => {
  return (
    <div className="background-container">
      <motion.img
        animate={dayControl}
        src={day}
        className="img background day"
        draggable="false"
      />

      <motion.img
        animate={nightControl}
        src={night}
        className="img background night"
        draggable="false"
      />
    </div>
  )
}

export default Background;