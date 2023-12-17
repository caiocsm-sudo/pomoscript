import { createContext, useState } from "react";

import VisiblePage from "../types/VisiblePage";
import SideBarTodo from "../components/SideBarTodo";
import AddTodo from "../components/add-todo/AddTodo";

export const visiblePages: VisiblePage = {
  sideBar: {
    component: SideBarTodo,
    visible: false,
  },
  addTodo: {
    component: AddTodo,
    visible: false,
  },
};

const [page, setPage] = useState<VisiblePage>(visiblePages);

export const PagesContext = createContext<VisiblePage>(visiblePages);
