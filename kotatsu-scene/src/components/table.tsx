import { AnimationControls, motion } from "framer-motion";

type TableType = {
  day: string,
  night: string,
  offset: {
    scale: string,
    x: number,
    y: number
  },
  dayControl: AnimationControls,
  nightControl: AnimationControls
}

const Table: React.FC<TableType> = ({
  day,
  night,
  offset,
  dayControl,
  nightControl
}) => {
  return (
    <div className="table-container">
      <motion.img
        animate={dayControl}
        src={day}
        className="img table day"
        draggable="false"
        style={{width: offset.scale, left: offset.x, top: offset.y}}
      />

      <motion.img
        animate={nightControl}
        src={night}
        className="img table night"
        draggable="false"
        style={{width: offset.scale, left: offset.x, top: offset.y}}
      />
    </div>
  )
}

export default Table;