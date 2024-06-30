import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./Componentes/AppLayout";
import { Home } from "./paginas/Home/Home";
import { Quiz } from "./paginas/Quiz/Quiz";
import { Areas } from "./paginas/AreasAtuacao/AreasAtuacao";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="areas" element={<Areas />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
