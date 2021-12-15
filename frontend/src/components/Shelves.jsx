import Spines from './Spines';

export default function Shelves(props) {
  const {spines, name, color, font} = props;
  const output = Array.isArray(spines) && spines.map(spine => {
    return <Spines
              name={spine.name}
              color={spine.color}
              font={spine.font}
            />
  })
  return(
    <div>
      {name}
      {output}
    </div>
  )
}