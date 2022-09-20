import { GridItemType } from "../../types/GridItemType";
import logoImg from '../../assets/images/logovalo.png';
import { items } from '../../data/items';

type Props = {
    item: GridItemType
    onClick: () => void
    
}

export const GridItem = ({ item, onClick}: Props) => {
    
    return (
        <div className="text-white bg-beigeValo rounded flex justify-center items-center" 
        
        onClick={onClick}
        >
            {item.permanentShown === false && item.shown === false &&
                <img src={logoImg} alt="" />
            }

            {(item.permanentShown || item.shown) && item.item !== null &&
                       
                <img src={items[item.item].icon} alt="" className="h-24"/>
            }
        </div>
    );
}   