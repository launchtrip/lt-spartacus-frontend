/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { Menu, Drawer, Dropdown } from 'antd';
import { useRouter } from 'next/router';
import { MenuOutlined } from '@ant-design/icons';
import ComponentStyles from './style/styles.module.css';
import DynamicModal from '../DynamicModal';
import EventIcon from '../EventIcon';
import Context from '../../providers/userContext';

export default function NavgiationBar({ page }) {
  const { SubMenu } = Menu;
  const [state, setState] = useState(page);
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const Router = useRouter();
  const { user, signOutUser } = useContext(Context);
  const userName = user ? user.displayName.split('-')[0] : null;
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const checkState = (type) => {
    if (type === 'Events' && page === 'Virtual Events') {
      return `${ComponentStyles.navigation_menu_button_active} typography_spartacus_one_bold`;
    }
    if (type === state) return `${ComponentStyles.navigation_menu_button_active} typography_spartacus_one_bold`;
    return `${ComponentStyles.navigation_menu_button} typography_spartacus_one`;
  };

  const checkStateMobile = (type) => {
    if (type === state) return 'typography_spartacus_one_bold';
    return 'typography_spartacus_one';
  };

  const routeToEventPage = (url) => {
    Router.push(url);
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/account/change-password">
          Change Password
        </Link>
      </Menu.Item>
      <Menu.Item>
        <section onClick={() => {
          signOutUser();
        }}
        >
          Log Out
        </section>
      </Menu.Item>
    </Menu>
  );

  const mobileTitle = () => {
    if (user) {
      return (
        <section className={ComponentStyles.mobile_section_user}>
          <span className={`typography_spartacus_nineteen ${ComponentStyles.mobile_section_user_details}`}>
            <EventIcon image="/assets/user.png" height="15px" width="15px" marginRight="10px" />
            Hi, {userName.charAt(0).toUpperCase() + userName.slice(1)}
          </span>
          <span className={`typography_spartacus_nine ${ComponentStyles.mobile_section_user_details_item_disabled}`}>
            My Events - <span className={ComponentStyles.mobile_section_user_details_item_unique}>coming soon</span>
          </span>
          <Link href="/account/change-password">
            <span className={`typography_spartacus_nine ${ComponentStyles.mobile_section_user_details_item}`}>
              Change Password
            </span>
          </Link>

          <section
            onClick={() => signOutUser()}
            className={`typography_spartacus_nine ${ComponentStyles.mobile_section_user_details_item}`}
          >
            Log Out
          </section>

        </section>

      );
    }
    return (
      <section className={ComponentStyles.mobile_section_user}>
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

    );
  };
  const socialDisplay = () => (
    <section className={ComponentStyles.mobile_section_social}>
      <a href="https://www.facebook.com/UnifyPlatform/" target="_blank">
        <EventIcon image="/assets/facebook.png" height="25px" />
      </a>
      <a href="https://www.linkedin.com/company/unify-platform/" target="_blank">
        <EventIcon image="/assets/linkedin.png" height="25px" />
      </a>
      <a href="https://twitter.com/Unify_Events" target="_blank">
        <EventIcon image="/assets/twitter.png" height="25px" />
      </a>
    </section>
  );
  return (
    <div className={ComponentStyles.navigation_main_container}>
      <DynamicModal type="signIn" modal={modal} updateModal={setModal} width={600} />
      <MenuOutlined className={ComponentStyles.navigation_section_one_mene_icon} onClick={() => showDrawer()} />
      <Link href="/">
        <a href="/" className={ComponentStyles.navigation_section_one}>
          <section>
            Unify.
          </section>
        </a>
      </Link>
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
            <SubMenu title="Events" className={ComponentStyles.dropdown_parent}>
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
      {!user &&
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
        </section>}
      {user &&
        <section className={ComponentStyles.navigation_section_three}>
          <section className={ComponentStyles.section_three_button_container}>
            <Dropdown overlay={menu} placement="bottomRight">
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <EventIcon image="/assets/logged.png" width="20px" height="20px" />
              </a>
            </Dropdown>
          </section>
        </section>}
      <Drawer
        title={mobileTitle()}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        key="left"
      >
        <Link href="/"><p id={ComponentStyles.mobile_item} className={checkStateMobile('Home')}>Home</p></Link>
        <Link href="/virtualevents"><p id={ComponentStyles.mobile_item} className={checkStateMobile('Virtual Events')}>Virtual Events</p></Link>
        <Link href="/events"><p id={ComponentStyles.mobile_item} className={checkStateMobile('Events')}>All Events</p></Link>
        <Link href="/partnerships"><p id={ComponentStyles.mobile_item} className={checkStateMobile('Partnerships')}>Partnerships</p></Link>
        <Link href="/about" as="About-Us"><p id={ComponentStyles.mobile_item} className={checkStateMobile('About')}>About Us</p></Link>
        {socialDisplay()}
      </Drawer>
    </div>

  );
}
