import { Fragment } from "react/jsx-runtime";
import { useTypedSelector } from "../hooks/use-typed-selector";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";
import './cell-list.css';
import { useActions } from "../hooks/use-actions";
import { useEffect } from "react";
import { saveCells } from "../state/action-creators";



const CellList: React.FC = () => {



  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );


  const {fetchCells} = useActions();
  useEffect(()=>{
    fetchCells();
  }, [])

  useEffect(()=>{
    saveCells();
  }, [JSON.stringify(cells)]);

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem key={cell.id} cell={cell} />
      <AddCell prevCellId={cell.id} />
    </Fragment>
  ));

  // renderedCells.push(<AddCell key={Math.random()} nextCellId={null} />);

  return (
    <div className="cell-list">
      <AddCell prevCellId={null} />
      {renderedCells} 
    </div>
  );
};

export default CellList;
