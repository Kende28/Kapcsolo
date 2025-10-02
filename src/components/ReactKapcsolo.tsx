import { useState } from "react";

interface kepKapcsoloProps {
  imgBe: string;
  imgKi: string;
  status: string;
}

export function ReactKapcsolo() {
  const [status, setStatus] = useState("Ki");
  return (
    <>
      <button
        onClick={() => {
          if (status == "Ki") {
            setStatus("Be");
          } else {
            setStatus("Ki");
          }
        }}
      >
        {status}
      </button>

      <KepBetolto
        imgBe="https://www.w3schools.com/js/pic_bulbon.gif"
        imgKi="https://www.w3schools.com/js/pic_bulboff.gif"
        status={status}
      />
    </>
  );
}

function KepBetolto(props: kepKapcsoloProps) {
  let state: string = "";
  if (props.status == "Be") {
    state = props.imgBe;
  } else {
    state = props.imgKi;
  }
  return (
    <>
      <p>
        <img src={state} alt="" />
      </p>
    </>
  );
}
