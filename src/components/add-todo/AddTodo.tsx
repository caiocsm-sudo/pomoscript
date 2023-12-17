import { BaseSyntheticEvent, useState } from "react";
import Button from "../defaults/Button";

export default function AddTodo() {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = () => {
    const data = localStorage.setItem("todo", title);
    console.log("submitted " + data);
  };

  return (
    <div className="box-shadow">
      <div>
        <form>
          <input
            type="text"
            onChange={(e: BaseSyntheticEvent) => setTitle(e.target.value)}
            value={title}
          />
          <Button color="primary">{"Create Task"}</Button>
        </form>
      </div>
    </div>
  );
}
