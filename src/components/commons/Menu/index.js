import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../theme/Logo';
import Button from '../Button';
import Text from '../../foundation/Text';
import MenuWrapper from './styles/MenuWrapper';
import SunMoon from '../../../theme/SunMoon';

const links = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Perguntas frequentes',
    url: '/faq',
  },
  {
    text: 'Sobre',
    url: '/sobre',
  },
];

export default function Menu({ onCadastrarClick }) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <SunMoon />
        <Button type="button" ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button type="button" variant="primary.main" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
