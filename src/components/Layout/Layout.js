import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.header__nav}>
          <NavLink className={css.header__link} to="/">
            Home
          </NavLink>
          <NavLink className={css.header__link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <section className={css.section}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </>
  );
};
export default Layout;
