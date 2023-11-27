import styled from "styled-components";
import variables from "../../styles/variables";

type TagProps = {
  priority?: string;
  status?: string;
};

function returnBackgroundColor(props: TagProps): string {
  if ("status" in props) {
    if (props.status === "Pendente") return variables.lightYellow;
    if (props.status === "Concluída") return variables.green;
  } else if ("priority" in props) {
    if (props.priority === "Urgente") return variables.red;
    if (props.priority === "Importante") return variables.darkYellow;
  }

  return "#ccc";
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => returnBackgroundColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`;

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: "Roboto Mono", monospace;
  display: block;
  width: 100%;
  margin: 16px 0px;
  resize: none;
  border: none;
  background-color: transparent;
`;

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;

export const Button = styled.button`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`;

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`;

export const CancelButton = styled(Button)`
  background-color: ${variables.red};
`;

export const RemoveButton = styled(Button)`
  background-color: ${variables.red};
`;
