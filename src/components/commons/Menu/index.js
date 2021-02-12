import React from "react";
import Logo from "../../../theme/Logo";
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
            <li>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Carregar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
