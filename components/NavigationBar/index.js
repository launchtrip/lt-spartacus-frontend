import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { MenuOutlined } from '@ant-design/icons';
import ComponentStyles from './style/styles.module.css';
import DynamicModal from '../DynamicModal';

export default function NavgiationBar({ page }) {
  const { SubMenu } = Menu;
  const [state, setState] = useState(page);
  const [modal, setModal] = useState(false);
  const Router = useRouter();

  const checkState = (type) => {
    if (type === 'Events' && page === 'Virtual Events') {
      return `${ComponentStyles.navigation_menu_button_active} typography_spartacus_one_bold`;
    }
    if (type === state) return `${ComponentStyles.navigation_menu_button_active} typography_spartacus_one_bold`;
    return `${ComponentStyles.navigation_menu_button} typography_spartacus_one`;
  };

  const routeToEventPage = (url) => {
    Router.push(url);
  };

  return (
    <div className={ComponentStyles.navigation_main_container}>
      <DynamicModal type="signIn" modal={modal} updateModal={setModal} width={600} />
      <MenuOutlined className={ComponentStyles.navigation_section_one_mene_icon} />

      <section className={ComponentStyles.navigation_section_one}>

        Unify.
      </section>
      <section className={ComponentStyles.navigation_section_two}>
        <section className={ComponentStyles.section_two_button_container}>
          <Link href="/">
            <button
              type="button"
              onClick={() => setState('Home')}
              className={checkState('Home')}
            >
              Home
            </button>
          </Link>
          <Menu
            mode="horizontal"
            className={checkState('Events')}

          >
            <SubMenu title="Events">
              <Menu.Item onClick={() => routeToEventPage('/virtualevents')} key="virtual">Virtual Events</Menu.Item>
              <Menu.Item onClick={() => routeToEventPage('/events')} key="all events">All Events</Menu.Item>
            </SubMenu>
          </Menu>

          <Link href="/partnerships">
            <button
              type="button"
              className={checkState('Partnerships')}
            >
              Partnerships
            </button>
          </Link>
          <Link href="/about" as="About-Us">
            <button
              type="button"
              className={checkState('About')}
            >
              About Us
            </button>
          </Link>

        </section>

      </section>
      <section className={ComponentStyles.navigation_section_three}>
        <section className={ComponentStyles.section_three_button_container}>
          <Link href="/sign-up">

            <button type="button" className="button_small_styled typography_spartacus_one_bold">
              Sign Up
            </button>
          </Link>
          <button
            type="button"
            className="button_small_plain typography_spartacus_one"
            onClick={() => setModal(true)}
          >
            Log In
          </button>
        </section>
      </section>
    </div>

  );
}
