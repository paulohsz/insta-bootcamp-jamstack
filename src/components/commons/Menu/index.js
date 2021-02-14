import React from "react";
import Logo from "../../../theme/Logo";
import { Button } from "../Button";
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
              <a href={link.url}>{link.text}</a>
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
