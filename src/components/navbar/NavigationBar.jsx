import React, { useCallback, useEffect, useState } from "react";
import {
  Navbar,
  Title,
  Icon,
  TitleContainer,
  NavLinks,
  SectionLink,
} from "./styles";
import icon from "../../icons/covid.png";
import Link from "react-scroll/modules/components/Link";

export default function NavigationBar() {
  const [hiddenBar, setHiddenBar] = useState(false);
  //Determing the scroll direction.
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        // console.log("scrolling up");
        setHiddenBar(false);
      } else if (y < window.scrollY) {
        // console.log("scrolling down");
        setHiddenBar(true);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <Navbar hidden={hiddenBar}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TitleContainer>
          <Icon src={icon} />
          <Title>
            <strong>COVID</strong> ANALYSIS
          </Title>
        </TitleContainer>

        {/* <NavLinks>
          <Link to="BarSection" smooth={true}>
            <SectionLink>Bar Graphs</SectionLink>
          </Link>
          <Link to="LineSection" smooth={true}>
            <SectionLink>Line Graphs</SectionLink>
          </Link>
          <Link to="PolarSection" smooth={true}>
            <SectionLink>Polar Graphs</SectionLink>
          </Link>
        </NavLinks>
        <div style={{ width: "275px", height: "50" }}></div> */}
      </div>
    </Navbar>
  );
}
