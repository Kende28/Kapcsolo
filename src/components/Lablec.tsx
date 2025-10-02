interface LablecProps {
  nev: string;
  datum: Date;
  perc: number;
  mi: boolean;
  miHasznalat: string;
}

export function Lablec(props: LablecProps) {
  return (
    <>
      <p>
        Az oldalt készítette: {props.nev}
        <br />A készítés dátuma: {props.datum.toDateString()} <br />A feladatra
        fordított idő: {props.perc} perc. <br />
        Az oldalt készítette:{" "}
        {props.mi
          ? "A feladatmegoldásban használtam MI-t"
          : "Nem használtam MI-t a feladatmegoldáshoz."}
      </p>
      {props.mi? <><p>{props.miHasznalat}</p></> : ""}
    </>
  );
}
