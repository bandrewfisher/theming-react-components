import { useEffect } from "react";
import Button from "./components/Button";
import { applyTheme } from "./themes/utils";
import baseTheme from "./themes/base";
import darkTheme from "./themes/dark";

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);
  return (
    <div className="flex justify-center mt-5">
      <Button onClick={() => applyTheme(baseTheme)}>Base theme</Button>
      <Button color="secondary" onClick={() => applyTheme(darkTheme)}>
        Dark theme
      </Button>
    </div>
  );
}

export default App;
