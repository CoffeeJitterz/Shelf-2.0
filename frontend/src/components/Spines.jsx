export default function Spines(props) {
  const {name, color, font, shelfId} = props;
  return(
    <div>
      {name}
      {shelfId}
    </div>
  )
}