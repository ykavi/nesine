import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  bottom: 0;
  background-color: #fff;
  right: 0;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  max-height: 300px;
  overflow: auto;
`;

export const Container = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
  border-bottom: 1px solid #333;
`;

export const Text = styled.p`
  margin-right: 20px;
`;

export const TextGroup = styled.div`
  display: flex;
`;
