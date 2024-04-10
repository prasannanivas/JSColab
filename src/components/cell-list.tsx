import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";

const CellList: React.FC = () => {
 const cells =  useTypedSelector(({ cells: { order, data } }) => order.map((id) => data[id]));
 console.log("rendered" , cells);
 
 const renderedCells = cells.map(cell => cell && <CellListItem key = {cell.id || ""} cell = {cell} />)

 return <div>{renderedCells}</div>;
};

export default CellList;
