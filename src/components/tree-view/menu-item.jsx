import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [display, setdisplay] = useState({});

  function handletoggle(getcurrentlabel) {
    setdisplay({
      ...display,
      [getcurrentlabel]: !display[getcurrentlabel],
    });
  }

  console.log(display);

  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handletoggle(item.label)}>
            {display[item.label] ? (
              <FaMinus color="white" />
            ) : (
              <FaPlus color="white" />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      display[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
