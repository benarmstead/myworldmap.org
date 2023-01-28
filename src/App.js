import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollReveal from "./utils/ScrollReveal";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Routes>
          <Route
            path="/"
            element={
              <LayoutDefault>
                <Home />
              </LayoutDefault>
            }
          />
        </Routes>
      )}
    />
  );
};

export default App;
