import MDEditor from "@uiw/react-md-editor";
import { useEffect, useRef, useState } from "react";
import "./text-editor.css";
import { Cell } from "../state";
import { useActions } from "../hooks/use-actions";

interface TextEditorProps{
    cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({cell}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(true);
  const {updateCell} = useActions();




  // for expanding the editor upon clicking and 
  // collapsing it upon clicking outside 
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      setEditing(false);
    };
    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor card" ref={ref}>
        <div className="card-content">
          <MDEditor value={cell.content} onChange={(v) => updateCell(cell.id, v || "")} />
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} onClick={() => setEditing(true)}>
      <MDEditor.Markdown source={cell.content || "Click to edit"} />
    </div>
  );
};

export default TextEditor;
