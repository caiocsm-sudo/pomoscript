import styled from "styled-components";

import { Delete } from "@mui/icons-material";
import { useState } from "react";

type Task = {
  title: string;
};

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc4;
  border-radius: 0.4rem;
  border: 1px solid #1113;
  padding: 0.8rem;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #eee5;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  gap: 0.8rem;
  > h4 {
    font-size: 13px;
    font-weight: 400;
  }
`;

const Input = styled.input`
  border-radius: 100%;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background: #a3a3a34e;
  margin: 0 0.2rem;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: #7a7a7a4e;
  }
`;

export default function Todo({ title }: Task) {
  const titleStyle = {
    textDecoration: "dashed",
  };
  const [dashed, setDashed] = useState<boolean>(false);

  const handleCheckbox = () => {
    setDashed((prev: boolean) => !prev);
  };

  const handleDelete = () => {
    // deleteTask();
  };

  return (
    <Li>
      <TitleDiv>
        <Input type="checkbox" onChange={handleCheckbox} />
        <h4 style={dashed ? { textDecoration: titleStyle.textDecoration } : {}}>
          {title}
        </h4>
      </TitleDiv>
      <div className="edit-btns">
        <Button className="flex-center">
          <Delete onClick={handleDelete}/>
        </Button>
      </div>
    </Li>
  );
}
