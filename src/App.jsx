import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from "./pages/articles/ArticlesPage";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import ArticleCreatorPage from "./pages/articles/ArticleCreatorPage";
import ArticleDetailsPage from "./pages/articles/ArticleDetailsPage";
import GlobalContext from "./contexts/GlobalContext";
import { AlertProvider } from "./contexts/AlertContext";

function App() {

  const navLinks = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/posts",
      title: "Articles"
    },
  ];

  const globalProviderValue = {
    navLinks,
  }

  return (
    <GlobalContext.Provider value={globalProviderValue}>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/posts">
                <Route index element={<ArticlesPage />} />
                <Route path="create" element={<ArticleCreatorPage />} />
                <Route path=":id" element={<ArticleDetailsPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </GlobalContext.Provider>
  );
};

export default App;
