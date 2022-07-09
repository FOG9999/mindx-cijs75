import { useState } from "react";
import { useEffect } from "react";
import '../styles/styles.css';

const BoardGame = ({length}) => {

    let [viewInit, setViewInit] = useState(false);
    let [betaState, setBetaState] = useState(10);

    const initBoardGame = () => {
        let boardGame = document.getElementById('game-table');
        let boardGameContent = '';
        for(let i=1; i<=length; i++){
            let newRow = '<tr>';
            for(let j=1; j<=length; j++){
                newRow += `<td id=${i}.${j}></td>`
            }
            newRow += '</tr>';
            boardGameContent += newRow;
        }        
        boardGame.innerHTML = boardGameContent;
    }

    useEffect(() => {
        setViewInit(true);
        console.log('xxx');
        // viewInit = true;
        // nếu viewInit true,, thì làm gì đó, thực ra tới đây viewInit chưa hề được update
    }, []);

    useEffect(() => {
        console.log('yyy');
    }, [viewInit])

    // useEffect(() => {
    //   if(length > 10){
    //     // do something
    //   }
    // }, [betaState, viewInit])

  return (
    <div className="table-container">
      <table>
        <tbody id="game-table"></tbody>
      </table>
    </div>
  );
};

export { BoardGame };
