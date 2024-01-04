import Item from "../components/Item";

export function addItem(texto) {
  const item = new Item(texto);
  return { type: "ADD_ITEM", payload: item };
}

export function deleteItem(id) {
  return { type: "DELETE_ITEM", payload: id };
}

export function changeDone(id) {
  return { type: "CHANGE_DONE", payload: id };
}
