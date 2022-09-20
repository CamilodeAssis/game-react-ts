import { useEffect, useState } from "react";
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/Button";
import ResetIcon from './assets/svgs/restart.svg'
import { GridItemType } from "./types/GridItemType";
import { GridItem } from "./components/GridItem";
import { items } from './data/items';


const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElepsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  const resetAndCreateGrid = () => {
    //step 1: reset the game state
    setTimeElepsed(0);
    setMoveCount(0);
    setShownCount(0);


    //setp 2: create the grid

    //step 2.1: create a void grid
    let tempGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    }

    //step 2.2: fill the grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tempGrid[pos].item = i;
      }
    }

    //step 2.3: set grid on state 
    setGridItems(tempGrid);

    //step 3: start the game
    setPlaying(true);
  }

  const handleItemClick = (index: number) => {
    
  }

  return (
    //container
    <div className='w-full max-w-3xl m-auto flex py-12 flex-col md:flex-row ' >
      {/*left info */}
      <div className="flex flex-col w-auto items-center  mb-12 md:items-start " >
        <a className="block" href="https://github.com/CamilodeAssis" target="_blank">
          <span className="text-beigeValo">Created by Camilo de Assis</span>
        </a>

        <div className="w-full my-3 flex justify-around text-center md:block md:text-start ">
          <InfoItem label="Time" value="00:00" />
          <InfoItem label="Moves" value="0" />
        </div>

        <Button text="Reset" icon={ResetIcon} onClick={resetAndCreateGrid} />

      </div>

      {/*right grid */}
      <div className="flex-1 flex justify-center mx-5 md:justify-end">
        <div className="grid grid-cols-4 gap-2.5 w-430">
          {gridItems.map((item, index) => (
              <GridItem 
                key={index}
                item={item}
                onClick={() => handleItemClick(index)}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
