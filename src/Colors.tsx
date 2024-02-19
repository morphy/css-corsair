import React from "react";

import "./Colors.css";

const Colors = () => {
  const [colors, setColors] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onUpdate = () => {
    setColors(textareaRef.current?.value?.split("\n") ?? []);
  };

  return (
    <>
      <Tab>
        <div className="colors-wrapper">
          <textarea ref={textareaRef} />

          <div className="all-buttons">
            <button onClick={onUpdate}>Update</button>
            <div className="other-buttons">
              <button onClick={onUpdate}>Button1</button>
              <button onClick={onUpdate}>Button2</button>
              <button onClick={onUpdate}>Button3</button>
            </div>
          </div>
        </div>
      </Tab>

      <div style={{ background: "#ffffff" }}></div>

      <Tab>
        <div className="square-container">
          {colors.map((color) => (
            <div
              className="square"
              key={color}
              style={{ background: color }}
            ></div>
          ))}
        </div>
      </Tab>
    </>
  );
};

export default Colors;
