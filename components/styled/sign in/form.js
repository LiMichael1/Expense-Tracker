import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
`;

export const FormHeader = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  color: #1b212d;
  margin-top: 12vh;
`;

export const FormSubHeader = styled.h2`
  font-size: 1.25rem;
  color: #78778b;
  margin-bottom: 30px;
`;

export const InputLabel = styled.label`
  color: #1b212d;
  font-size: 1.25rem;
`;

export const StyledInput = styled.input`
  color: #78778b;
  border: 2px solid #f2f2f2;
  border-radius: 10px;
  padding: 15px 25px 16px 50px;
  width: 100%;
  font-size: 1.15rem;
  margin-bottom: 30px;
`;

export const InlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

export const WhiteSpace = styled.div`
  flex-grow: 10;
`;
