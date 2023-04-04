import styled, { css } from "styled-components";

export const Table = styled.table`
  text-align: center;
  overflow: auto;

  th {
    padding: 14px 48px;
    background: #f2f2f2;
  }

  td {
    padding: 8px 16px;
    background: #f2f2f2;
  }
  thead th {
    background-color: #ccc;
    position: sticky;
    top: 0;
  }

  tbody {
    td {
      background-color: #f2f2f2;
      cursor: pointer;
    }
  }
`;

export const Tr = styled.tr``;
export const Td = styled.td`
  ${(props) =>
    props.isSelected &&
    css`
      background-color: #ccc !important;
    `}
`;
