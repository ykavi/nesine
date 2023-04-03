import { Grid } from "react-styled-flexboxgrid";
import { Main } from "./style";

const MainLayout = ({ children }) => (
  <Grid>
    <Main>{children}</Main>
  </Grid>
);

export default MainLayout;
