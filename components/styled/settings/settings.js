import styled from "styled-components";

export const SettingsMainWrapper = styled.div`
  margin-left: 4vw;
  margin-top: 5vh;
  width: 75%;
`;

export const SettingsMainFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SettingsMainHeader = styled.h1`
  font-weight: 500;
  font-size: 1.75rem;
  color: #1b212d;
`;

export const SettingsMainSubHeader = styled.h2`
  color: #929eae;
  font-size: 1.2rem;
`;

export const SettingsMainInlineWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  gap: 50px;
`;

export const SettingsMainEditButton = styled.div`
  float: right;
  :hover {
    cursor: pointer;
  }
`;

export const SettingsMainSpan = styled.div``;

//div

export const UpdateButton = styled.button`
  padding: 25px 50px;
  color: white;
  background-color: #29a073;
  font-weight: 600;
  border-radius: 10px;
`;
