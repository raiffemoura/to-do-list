import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { deleteItem, changeDone } from "../actions/listAction";
function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/on.png" alt="done" height="30"></img>;
  } else {
    return <img src="./assets/off.png" alt="undone" height="30"></img>;
  }
}
function ListItem(props) {
  const dispath = useDispatch();
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button
            onClick={() => {
              dispath(changeDone(props.item.id));
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
                dispath(deleteItem(props.item.id));
              }}
            ></img>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
