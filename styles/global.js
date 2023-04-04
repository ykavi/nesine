import { css } from "styled-components";

const globalCSS = css`
  html {
    height: 100%;
    font-family: "Roboto", Arial, sans-serif;
  }

  body {
    color: #333333;
  }

  table {
    text-align: center;
    overflow: auto;
  }

  th {
    padding: 14px 48px;
    background: #f2f2f2;
  }

  td {
    padding: 8px 16px;
    background: #f2f2f2;
  }

  p {
    margin: 0;
  }

  ul,
  li {
    padding: 0;
    list-style-type: none;
    cursor: pointer;
  }
`;

export default globalCSS;
