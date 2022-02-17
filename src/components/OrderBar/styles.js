import styled from "styled-components";

export const OrderBox = styled.section`
  border: 1px solid #021323;
  background: #021323;
  display: flex;
  justify-content: flex-end;
  color: white;
  font-size: 16px;
  button {
    margin-right: 1px;
  }
  span {
    font-size: 16px;
    line-height: 22px;
    margin-right: 6px;
  }
  div {
    font-size: 13px;
    display: inline-block;
    pointer-events: none;
    width: 11px;
  }
`;
