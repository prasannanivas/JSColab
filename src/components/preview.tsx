import { useEffect, useRef } from "react";

import "./preview.css";

interface PreviewProps {
  code: string;
  err: string;
}

const html = `
  <html>
  <head>
      
    </head>
    <body>
        <div id="root">
        </div>
        <script>
            const handleError = (err) => {
              const root = document.querySelector('#root');
              root.innerHTML = '<div style="color:red;"><h4>Runtime Error' + err + '</h4></div>'
            };
            window.addEventListener('error', (event) => {
              event.preventDefault();
              handleError(event.error);
            })
            window.addEventListener('message',async (event)=>{
                  try{
                      eval(event.data);
                  }
                  catch(err){
                      handleError(err);
                  }
              },false)
        </script>
        </body>
        </html>
        
        
        `;

const Preview: React.FC<PreviewProps> = ({ code,err }) => {
  const iframeref = useRef<any>();

  useEffect(() => {
    iframeref.current.secdoc = html;

    setTimeout(() => {
      iframeref.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="iframe-wrapper">

      <iframe
        style={{ backgroundColor: "white" }}
        title="smoo"
        ref={iframeref}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {err && <div className="preview-error">{err}</div>}
      ;
    </div>
  );
};

export default Preview;
