import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ModalProvider } from "./context/ModalContext";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ModalProvider>
          <SearchProvider>
            <RouterProvider router={routes} />
          </SearchProvider>
        </ModalProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
