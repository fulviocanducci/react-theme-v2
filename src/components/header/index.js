import React from "react";
import Switch from "react-switch";
import { shade } from "polished";

import { Container, HeaderTitle } from "./styles.js";

const Header = (props) => {
  const {
    theme: { colors, title },
    toogleTheme,
  } = props;
  return (
    <Container theme={props.theme}>
      <HeaderTitle theme={props.theme}>Hello Word !!!</HeaderTitle>
      <Switch
        onChange={toogleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={shade(0.151, colors.secundary)}
        offColor={shade(0.15, colors.primary)}
      />
    </Container>
  );
};

export default Header;
