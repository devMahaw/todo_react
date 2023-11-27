import styled from "styled-components";

import { Props } from ".";

type PropsWithoutSubtitleAndCounter = Omit<Props, "counter" | "subtitle">;

export const Card = styled.div<PropsWithoutSubtitleAndCounter>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? "#1e90ff" : "#a1a1a1")};
  background-color: ${(props) => (props.active ? "#fff" : "#fcfcfc")};
  color: ${(props) => (props.active ? "#1e90ff" : "#5e5e5e")};
  border-radius: 8px;
  cursor: pointer;
`;

export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`;

export const Label = styled.span`
  font-size: 14px;
`;
