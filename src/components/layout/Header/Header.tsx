import { Link } from '~/components/ui';
import { PUBLIC_ROUTE } from '~/utils/constants';

import { Container } from '../Container/Container';

import s from './Header.module.css';

export const Header = () => (
  <header className={s.wrapper}>
    <Container className={s.container}>
      <Link to={PUBLIC_ROUTE.HOME}>
        <img
          className={s.logo}
          src="/images/logo.png"
          alt="Logo"
        />
      </Link>
      <Link to={PUBLIC_ROUTE.HOME}>Профиль</Link>
      <Link to={PUBLIC_ROUTE.HOME}>Билеты</Link>
    </Container>
  </header>
);
