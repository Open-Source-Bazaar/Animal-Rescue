import { observer } from 'mobx-react';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { i18n } from '../models/Translation';

const { t } = i18n,
  LanguageMenu = dynamic(import('./LanguageMenu'), { ssr: false });

const Name = process.env.NEXT_PUBLIC_SITE_NAME || '';

export const MainNavigator: FC = observer(() => (
  <Navbar bg="primary" variant="dark" fixed="top" expand="sm" collapseOnSelect>
    <Container>
      <Navbar.Brand href="/">{Name}</Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-inner" />

      <Navbar.Collapse id="navbar-inner">
        <Nav className="me-auto">
          <Nav.Link href="/article">{t('article')}</Nav.Link>

          <Nav.Link href="/component">{t('component')}</Nav.Link>

          <Nav.Link href="/pagination">{t('pagination')}</Nav.Link>

          <Nav.Link href="/scroll-list">{t('scroll_list')}</Nav.Link>

          <Nav.Link
            target="_blank"
            href="https://github.com/Open-Source-Bazaar/Animal-Rescue"
          >
            {t('source_code')}
          </Nav.Link>
        </Nav>

        <LanguageMenu />
      </Navbar.Collapse>
    </Container>
  </Navbar>
));
