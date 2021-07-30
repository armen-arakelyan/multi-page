import React, { useEffect, useState } from "react";

const Game = () => {
  const [spin,setSpin]=useState(0)
  const [spins, setSpins] = useState([{
    spin1: 1,
    spin2: 2,
    spin3: 3,
    spin4: 4,
    spin5: 5,
    spin6: 6,
    spin7: 7,
    spin8: 8,
    spin9: 9
  }]);
  const [money, setMoney] = useState(500);
  const [isSpin,setIsSpin]=useState(false);
  const [bet,setBet]=useState(10);
  const randomSpin = () => {
    setSpins({
      ...spins,
      spin1: Math.floor(Math.random() * 4) + 1,
      spin2: Math.floor(Math.random() * 4) + 1,
      spin3: Math.floor(Math.random() * 4) + 1,
      spin4: Math.floor(Math.random() * 4) + 1,
      spin5: Math.floor(Math.random() * 4) + 1,
      spin6: Math.floor(Math.random() * 4) + 1,
      spin7: Math.floor(Math.random() * 4) + 1,
      spin8: Math.floor(Math.random() * 4) + 1,
      spin9: Math.floor(Math.random() * 4) + 1,
      spin10: Math.floor(Math.random() * 4) + 1,
      spin11: Math.floor(Math.random() * 4) + 1,
      spin12: Math.floor(Math.random() * 4) + 1,
      spin13: Math.floor(Math.random() * 4) + 1,
      spin14: Math.floor(Math.random() * 4) + 1,
      spin15: Math.floor(Math.random() * 4) + 1,
      spin16: Math.floor(Math.random() * 4) + 1,
      spin17: Math.floor(Math.random() * 4) + 1,
    });
  };
  const equalSpins = () => {
    setTimeout(()=>{
      if (
        spins.spin4 === spins.spin13 &&
        spins.spin4 === spins.spin17 &&
        spins.spin13 === spins.spin17
      ) {
        setMoney(money => money += bet*14);
        for(let i=0;i<document.getElementsByTagName('td').length;i++){
          if(i===1 ||  i===8 ||  i===15){
            document.getElementsByTagName('td')[i].style.background="gold"
          }
        }
      } else {
        setMoney(money => money -= bet);
        for(let i=0;i<document.getElementsByTagName('td').length;i++){
          if(i===1 ||  i===8 ||  i===15){
            document.getElementsByTagName('td')[i].style.background="red"
          }
        }
      }
    },1500)
  };
  useEffect(() => {
    randomSpin()
  }, []);
  return (
    <div>
      <div className="break"></div>
      <div className="game">
        <table className="game_table">
          <tbody>
            <tr className="my1">
            <td>
                <img src={`img/icon${spins.spin1}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin13}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin5}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin16}.png`} />
              </td>
                <td>
                <img src={`img/icon${spins.spin1}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin5}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin7}.png`} />
              </td>
            </tr>
            <tr className="my2">
            <td>
                <img src={`img/icon${spins.spin14}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin17}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin11}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin12}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin2}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin5}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin8}.png`} />
              </td>
            </tr>
            <tr className="my3">
            <td>
                <img src={`img/icon${spins.spin2}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin4}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin14}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin15}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin3}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin6}.png`} />
              </td>
              <td>
                <img src={`img/icon${spins.spin9}.png`} />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Balance:{money}$</th>
            </tr>
            <tr>
              <select value={bet} onChange={(e)=>setBet(e.target.value)}>
                <option>10</option>
                <option>50</option>
                <option>100</option>
              </select>
            </tr>
            <tr>
              {money===0 || bet>money ?<button disabled>No money</button>:
              isSpin ? (
                <button disabled>Spining...</button>
              ) : (
                <button
                  onMouseDown={()=>{
                    setSpin(405)
                    randomSpin()
                  }}
                  onMouseUp={()=>{
                    if(spin===405){
                      document.querySelector('.my1').style.marginTop=spin+'px'
                      document.querySelector('.my2').style.marginTop=spin+'px'
                      document.querySelector('.my3').style.marginTop=spin+'px'
                      equalSpins()
                      setSpin(0)
                      setIsSpin(true)
                      setTimeout(()=>{
                        document.querySelector('.my1').style.marginTop=0+'px'
                      document.querySelector('.my2').style.marginTop=0+'px'
                      document.querySelector('.my3').style.marginTop=0+'px'
                      setIsSpin(false)
                      for(let i=0;i<document.getElementsByTagName('td').length;i++){
                        if(i===1 ||  i===8 ||  i===15){
                          document.getElementsByTagName('td')[i].style.background="white"
                        }
                      }
                      },3000)
                    }
                  }}
                >
                  <img src="https://image.flaticon.com/icons/png/512/4767/4767039.png" />
                </button>
              )}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Game;
