import styled from "styled-components";

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc4;
  border-radius: 0.4rem;
  border: 1px solid #1113;
  padding: 0.8rem;
`;

const TitleDiv = styled.div`
  > h4 {
    font-size: 13px;
    font-weight: 300;
  }
`;

const Input = styled.input`
  display: inline-block;
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

export default function Todo({ title }: { title: string }) {
  return (
    <Li>
      <TitleDiv>
      <input type="checkbox" />
        <h4>{title}</h4>
      </TitleDiv>
      <div className="edit-btns">
        <Button>Delete</Button>
      </div>
    </Li>
  );
}
