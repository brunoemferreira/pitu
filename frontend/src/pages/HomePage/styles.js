import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center !important;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  flex: 0 0 80%;
  max-width: 80%;
  padding: 2rem 2rem 1rem 2rem;
  border: solid 1px #ccc;
  border-radius: 0.25rem;
  text-align: center;
  background-color: #fff;
`;

export const CustomButton = styled.button`
  border-radius: 0px 5px 5px 0px;
  color: #ffffff;
  font-family: Open Sans;
  font-size: 16px;
  padding: 4px 20px 4px 20px;
  background-color: #8334ab;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  border: 0 none;
  outline: 0;
  width: 150px;

  :hover {
    background: #571383;
    border-radius: 0px 5px 5px 0px;
    text-decoration: none;
    border: 0 none;
    outline: 0;
  }
`;
