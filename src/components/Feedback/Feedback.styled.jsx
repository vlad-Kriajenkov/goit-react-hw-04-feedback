import styled from "@emotion/styled";

export const CardFeetBack = styled.div`
  width: 260px;
  /* padding: 0px 23px; */
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
`;


export const ListBtnFB = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-bottom: 32px;
`;

export const ButtonFB = styled.button`
  border: none;
  background-color: #ffffff;
  color: #7f8e9d;
  :hover {
    cursor: pointer;
    background: #daf5ff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    color: #000000;
  }
  div {
    font-size: 40px;
    padding: 8px;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding-bottom: 6px;
  }
`;
