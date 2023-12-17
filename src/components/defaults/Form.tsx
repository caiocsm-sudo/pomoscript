import { FC, ReactNode } from "react";
import styled from "styled-components";

interface ChildrenProps {
  children: ReactNode;
}

const FormField = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Form: FC<ChildrenProps> = ({ children }) => {
  return <FormField>{children}</FormField>;
};

export default Form;
