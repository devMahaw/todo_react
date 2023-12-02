import styled from "styled-components";

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0px;
    height: 100px;
  }
`;

export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`;

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`;
