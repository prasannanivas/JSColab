import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import bundle from "../bundler";
import CodeEditor from "../components/code-editor";
import Preview from "../components/preview";

import "bulmaswatch/superhero/bulmaswatch.min.css";
import Resizable from "./resizable";
import { Cell } from "../state";
import { useActions } from "../hooks/use-actions";

interface CodeCellProps{
  cell: Cell
}

const CodeCell:React.FC<CodeCellProps> = ({cell}) => {
 
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const {updateCell} = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const output = await bundle(cell.content);
        setCode(output.code);
        setErr(output.err);
      } catch (err) {
        console.error(err);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor initialValue={cell.content} onChange={(value)=> updateCell(cell.id, value)} />
        </Resizable>
        <Preview code={code} err = {err}/>
      </div>
    </Resizable>
  );
};

export default CodeCell;
