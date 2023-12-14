import React from "react";
import Card from "./Card";
function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/on.png" alt="done" height="30"></img>;
  } else {
    return <img src="./assets/off.png" alt="undone" height="30"></img>;
  }
}
function ListItem(props) {
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button
            onClick={() => {
              props.onDone(props.item);
            }}
          >
            <DoneImg done={props.item.done}></DoneImg>
          </button>
          <button>
            <img
              src="./assets/bin.png"
              alt="bin"
              height="30"
              onClick={() => {
                props.onItemDeleted(props.item);
              }}
            ></img>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
