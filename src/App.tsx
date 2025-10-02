import { Fejlec } from "./components/Fejlec";
import { Lablec } from "./components/Lablec";
import { ReactKapcsolo } from "./components/ReactKapcsolo";

function App() {
  return (
    <>
      <Fejlec />
      <ReactKapcsolo />
      <Lablec nev="Yamakawa Kende" datum={new Date("2025.10.02.")} perc={45} mi={false} miHasznalat="Nem használtam"/>
    </>
  );
}

export default App;
