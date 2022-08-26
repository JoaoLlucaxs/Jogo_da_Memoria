import { GridItem } from '../../types/GridItem'
import './grid.css'
import logoSvg from '../../assets/lucs.png'
import {items} from '../../data/Item'

type Props={
    item:GridItem;
    onClick:()=>void
}

export const Grid=({item,onClick}:Props)=>{
    return(
        <div className='grid_container' onClick={onClick}>
            {item.permanetShows === false && item.show === false &&
                <img src={logoSvg} alt='logo' className='style-card'/>
            }
            {(item.permanetShows || item.show) && item.item !==null &&
                <img src={items[item.item].icon} alt='' className='card_true'/>
            }
        </div>
    )
}
