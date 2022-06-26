import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
`;

export const FormSubmitButton = styled.button`
  display: block;
  background: #c8ee44;
  width: 100%;
  height: 52px;

  border-radius: 10px;

  opacity: 0.7;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const FormFileUploadButton = styled.label`
  display: flex;

  cursor: pointer;

  margin-bottom: 1rem;

  width: 50px;
  height: 50px;

  border-radius: 50%;
`;
