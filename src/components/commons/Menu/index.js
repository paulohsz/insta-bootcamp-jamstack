import React from "react";
import Logo from "../../../theme/Logo";
import { Button } from "../Button";
import { Text } from "../../foundation/Text";
import { MenuWrapper } from "./styles/MenuWrapper";

const links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Perguntas frequentes",
    url: "/faq",
  },
  {
    text: "Sobre",
    url: "/sobre",
  },
];

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {links.map((link) => {
          return (
            <li key={link.url}>
              <Text variant="smallestException" tag="a" href={link.url}>
                {link.text}
              </Text>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button type="button" ghost variant="secondary.main">
          Entrar
        </Button>
        <Button type="button" variant="primary.main">
          Carregar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
