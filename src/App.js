import test1 from "./images/test1.png";
import test2 from "./images/test2.jpg";
import test3 from "./images/test3.jpg";
import test4 from "./images/test4.png";
import test5 from "./images/test5.png";
import test6 from "./images/test6.jpg";
import test7 from "./images/test7.png";
import test8 from "./images/test8.png";
import test9 from "./images/test9.png";
import test10 from "./images/test10.jpg";
import test11 from "./images/test11.png";
import test12 from "./images/test12.png";
import { useState } from "react";

function App() {
  // Timer();
  const arr = [
    { checked: false, img: test1, id: 0 },
    { checked: false, img: test2, id: 1 },
    { checked: false, img: test3, id: 2 },
    { checked: false, img: test4, id: 3 },
    { checked: false, img: test5, id: 4 },
    { checked: false, img: test6, id: 5 },
    { checked: false, img: test7, id: 6 },
    { checked: false, img: test8, id: 7 },
    { checked: false, img: test9, id: 8 },
    { checked: false, img: test10, id: 9 },
    { checked: false, img: test11, id: 10 },
    { checked: false, img: test12, id: 11 },
  ];

  const [image, setimage] = useState(arr[0]);
  const [arr1, setarr] = useState(arr);
  const [score, setscore] = useState(0);
  const [hscore, sethscore] = useState(0);
  const [over, setOver] = useState(false);
  function handleNext() {
    setimage(arr[Math.trunc(Math.random() * arr.length)]);
  }
  function handleSelect(img) {
    if (score === 11) {
      alert("You won");
      sethscore(12);
      setscore(0);
      setOver(true);
      return;
    }
    const search = arr1.find((el) => el.id === img.id && el.checked);
    if (search) {
      alert("You Lost");

      setOver(true);
    } else {
      setscore((prevscore) => prevscore + 1);
      setarr((prevarr) =>
        prevarr.map((el) => (el.id === img.id ? { ...el, checked: true } : el))
      );
    }

    //
  }

  function handlereset() {
    setOver(false);
    setscore(0);
    setarr(arr);
    setimage(arr[0]);
    score > hscore ? sethscore(score) : sethscore(hscore);
  }

  return (
    <div className="h-screen wi-screen font-p2p  bg-gradient-to-r from-[#D3D3D3] to-[#FECA57] flex justify-center items-center">
      <Card
        handleNext={handleNext}
        handleSelect={handleSelect}
        image={image}
        score={score}
        hscore={hscore}
        over={over}
        handlereset={handlereset}
      />
    </div>
  );
}

function Card({
  handleNext,
  handleSelect,
  image,
  score,
  hscore,
  over,
  handlereset,
}) {
  return (
    <>
      {over ? (
        <Modal score={score} hscore={hscore} handlereset={handlereset} />
      ) : (
        <div className="md:w-[30%] w-[70%] h-auto bg-gradient-to-r from-[#96fbc4] to-[#f9f586] p-4 flex flex-col gap-8">
          <img src={image.img} className="w-[100%] h-[60%] aspect-[4/3]"></img>

          <div className="flex flex-col items-center gap-4 md:flex-row flex-wrap justify-between p-1 md:p-4">
            <Button onclick={() => handleSelect(image)}>Select</Button>
            <Button onclick={handleNext}>Next</Button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="md:text-xl text-sm font-bold  ">Score :{score}</h1>
            <h1 className="md:text-xl text-sm tracking-tighter font-bold ">
              High Score:{hscore}
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ children, onclick }) {
  return (
    <button
      onClick={onclick}
      className="p-4 w-[10rem] md:text-lg md:p-4 text-sm cursor-pointer font-p2p bg-gray-800 text-white font-bold rounded-2xl hover:text-gray-600 hover:bg-white"
    >
      {children}
    </button>
  );
}

function Modal({ score, hscore, handlereset }) {
  console.log(score);
  console.log(hscore);
  return (
    <div className="flex flex-col gap-4 text-lg md:text-xl items-center">
      {score > hscore ? (
        <h1 className="text-center">
          You are the highest Scorer: {score} 🍾🎉
        </h1>
      ) : (
        <h1 className="text-center">Your score is {score} 🍾</h1>
      )}

      <button
        onClick={handlereset}
        className=" p-2 text-sm cursor-pointer font-p2p bg-gray-800 text-white font-bold md:text-3xl rounded-2xl hover:text-gray-600 hover:bg-white"
      >
        Restart
      </button>
    </div>
  );
}

// function Timer() {
//   const [timer, setTimer] = useState(120);
//   // let timer = 120;
//   function countdown() {
//     let hours = Math.trunc(timer / 60);
//     let min = Math.trunc(timer % 60);

//     console.log(`${hours}:${min}`);

//     if (timer <= 0) {
//       console.log("Countdown complete!");
//     } else {
//       setTimer((prevTimer) => prevTimer - 1);
//       setTimeout(countdown, 1000);
//     }
//   }
//   setTimeout(countdown, 1000);
// }

export default App;
