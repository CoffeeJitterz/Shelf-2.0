import Spines from './Spines';
import { dataHelper } from '../helpers/dataHelper';

export default function Shelves(props) {
  const {spines, name, color, font} = props;
  // dataHelper(spines)
  const output = Array.isArray(spines) && spines.map(spine => {
    return <Spines
              key={spine.id}
              name={spine.name}
              color={spine.color}
              font={spine.font}
              shelfId={spine.shelf_id}
            />
  })
  return(
    <div>
      {name}
      {output}
    </div>
  )
}