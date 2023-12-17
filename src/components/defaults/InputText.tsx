import styled from "styled-components"

const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: transparent;
  border: 1px solid #0005;
`;

export default function InputText() {
  return (
    <input type="text" className=""/>
  )
}
