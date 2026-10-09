//single selection
//mulitole selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState();
  const [enablemultiple, setemablemulti] = useState(false);
  const [multiple, setmultiple] = useState([]);

  function handleSingleSelection(getcurrentid) {
    console.log(getcurrentid);
    setSelected(getcurrentid === selected ? null : getcurrentid);
  }

  function hadlemultipleselect(getcurrentid) {
    let cpymultiple = [...multiple];

    const getindex = cpymultiple.indexOf(getcurrentid);

    if (getindex === -1) {
      cpymultiple.push(getcurrentid);
    } else {
      cpymultiple.splice(getindex, 1);
    }

    setmultiple(cpymultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setemablemulti(!enablemultiple)}>
        Enable Multiple Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enablemultiple
                    ? () => hadlemultipleselect(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enablemultiple ? (
                multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="content">{dataItem.answer}</div>
                )
              ) : selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
