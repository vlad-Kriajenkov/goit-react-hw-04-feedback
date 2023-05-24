import styled from "@emotion/styled";

export const ContainerStatistics = styled.div`
  width: 260px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;

  text-align: center;
`;
export const Titile = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.16;

  letter-spacing: 0.01em;

  color: #1f3349;

  padding: 24px 23px;
`;

export const ListStat = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const ItemStat = styled.li`
  display: inline-flex;
  flex-direction: column;

  background: #ecf1f3;
  border: 1px solid #7f8e9d;

  padding: 19px 0px;
  width: calc((100% - 4px) / 3);
  div {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    margin-bottom: 6px;

    color: #7f8e9d;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    color: #1f3349;
  }

  &:nth-last-of-type(-n + 2) {
    width: calc((100% - 4px) / 2);
  }
  &:nth-of-type(1),
  &:nth-of-type(4) {
    border-left: none;
  }
  &:nth-of-type(3),
  &:nth-of-type(5) {
    border-right: none;
  }
  &:nth-of-type(4) {
    background: #daf5ff;
  }
  &:nth-of-type(5) {
    background: #dfffda;
  }
`;
