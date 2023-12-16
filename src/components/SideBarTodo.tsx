import Todo from "./Todo";
import { Add } from "@mui/icons-material";

export default function SideBarTodo() {
  return (
    <section>
      <header style={{ textAlign: "center", borderBottom: "1px solid #111" }}>
        <h2 className="todo-list-title">Todo List</h2>
      </header>
      <div className="todos">
        <Todo title="Se foder" />
      </div>
      <div>
        <button className="default-btn flex-center">
          <Add />
          <span>Add Todo</span>
        </button>
      </div>
    </section>
  );
}
