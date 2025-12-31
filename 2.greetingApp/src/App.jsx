import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreetingCardComponent from './components/GreetingCardComponent';

function App() {

  const names = ["Beatriz", "Charles", "Diya", "Fatima", "Damianus", "Sikandar", "Susan"];
  const messages = ["Bonne année ! Que tous vos vœux se réalisent et que vous receviez abondance, richesse et grâce.",//French
    "新年あけましておめでとうございます。皆様の願いが叶い、豊かな富と恵みが与えられますように。",//Japanese
    "Happy New Year,May all your wishes come true and may you receive abundance wealth and grace",//English
    "Feliz Año Nuevo, que todos tus deseos se hagan realidad y que recibas abundancia, riqueza y gracia.",//Spanish
    "Ein frohes neues Jahr! Mögen all deine Wünsche in Erfüllung gehen und dir Reichtum und Glück zuteilwerden.",// German
    "Gleðilegt nýtt ár, megi allar þínar óskir rætast og þú njótir gnægðar og blessunar",//Icelandic,
    "Godt nytår, må alle dine ønsker gå i opfyldelse, og må du modtage overflod af rigdom og velstand"//Danish
  ];

  const [greetingNames, setgreetingNames] = useState(names);
  const [greetingMessages, setgreetingMessages] = useState(messages);


  return (

    <div className="container">
      <div className="row align-items-center">
        <div className="col">

          {greetingNames.map((key, index) =>
            < GreetingCardComponent key={key} greetingName={greetingNames[Math.floor(Math.random() * greetingNames.length)]} greetingMessages={greetingMessages[Math.floor(Math.random() * greetingNames.length)]} />
          )}

        </div>
      </div>
    </div>

  )
}

export default App
