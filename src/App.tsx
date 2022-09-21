import { useEffect, useState } from "react";
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/Button";
import ResetIcon from './assets/svgs/restart.svg'
import { GridItemType } from "./types/GridItemType";
import { GridItem } from "./components/GridItem";
import { items } from './data/items';
import { formatTimeElapsed } from "./helpers/formatTimeElapsed";

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElepsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);
  

  useEffect(() => resetAndCreateGrid(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElepsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  //verify if opened are equal
  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter(item => item.shown === true);
      if (opened.length === 2) {
        //step 1: if both are equal make every "shown"  = "permanentShown"
        if (opened[0].item === opened[1].item) {
          let tempGrid = [...gridItems];
          for (let i in tempGrid) {
            if (tempGrid[i].shown === true) {
              tempGrid[i].permanentShown = true;
              tempGrid[i].shown = false;
            }
          }
          setGridItems(tempGrid);
          setShownCount(0);
        } else {
          setTimeout(() => {
            //step 2: if they are not equal close them
            let tempGrid = [...gridItems];
            for (let i in tempGrid) {
              tempGrid[i].shown = false;
            }
            setGridItems(tempGrid);
            setShownCount(0);
          }, 1000);
        }
        setMoveCount(moveCount + 1);
      }
    }


  }, [shownCount, gridItems]);

  //verify if game over
  useEffect(() => {
    if (moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
      setPlaying(false);
    }

  }, [moveCount, gridItems]);

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
    if (playing && index !== null && shownCount < 2) {
      let tempGrid = [...gridItems];
      if (tempGrid[index].permanentShown === false && tempGrid[index].shown === false) {
        tempGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(tempGrid);
    }
  }

  return (
    //container
    <div className='w-full max-w-3xl m-auto flex py-12 flex-col md:flex-row ' >
      {/*left info */}
      <div className="flex flex-col w-auto items-center  mb-12 md:items-start " >
        <a className="block" href="https://github.com/CamilodeAssis" target="_blank">
          <span className="text-beigeValo">Created by Camilo de Assis <br /> Créditos a B7Web</span>
        </a>

        <div className="w-full my-3 flex justify-around text-center md:block md:text-start ">
          <InfoItem label="Time" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Moves" value={moveCount} />
        </div>

        <Button text="Reset" icon={ResetIcon} onClick={(resetAndCreateGrid)} />


      </div>

      {/*right grid */}
      <div className="flex-1 flex justify-center mx-5 md:justify-end">
        <div className="w-430 grid grid-cols-2 gap-2.5 md:grid-cols-4  ">
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
