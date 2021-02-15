import React, { FC, AriaAttributes, DOMAttributes } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../UI/Button';
import { signout } from '../../../redux/auth/authActions';
import { Layout, Menu, Breadcrumb } from 'antd';
import { ShoppingTwoTone } from '@ant-design/icons';
import { InputNumber } from 'antd';
import './Header.css';
import { RootState } from '../../../store';
import Basket from '../../cart/cart';

import { Dropdown, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const Headers: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const { Header, Content, Sider } = Layout;

  const logoutClickHandler = () => {
    dispatch(signout());
  };

  var items = JSON.parse(localStorage.getItem('cartItems'));
  
  const menu = (
    <Menu
    // onClick={handleMenuClick}
    >
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Basket />
      </Menu.Item>
    </Menu>
  );
  
  return (
    <Layout>
      <Header
        style={{
          background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        >
        <div className="logo" />

        {/* <Menu id='nevmenu' theme="dark" mode="horizontal" defaultSelectedKeys={['2']}> */}
        {/* <Link
          className="navbar-item"
          to={!authenticated ? '/' : '/dashboard'}
        ></Link> */}
        {/* <InputNumber min={0} max={100000} defaultValue={0}  style={{height: '40px'}} />,   */}
        {!authenticated ? (
          <div className="buttons">
            <div
              className="button-position"
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                margin: '1px 0px 8px',
                // padding: '13px 50px 0px',
              }}
              >
              <Button
                text="Sign Up"
                onClick={() => history.push('/signup')}
                className="is-primary"
                />
              <Button text="Sign In" onClick={() => history.push('/signin')} />
            </div>
          </div>
        ) : (
          <div id="Sign Out" style={{ padding: '13px 0px 3px' }}>
            <Button text="Sign Out" onClick={logoutClickHandler} />
          </div>
        )}
        {/* </Menu> */}
        <div>
          {' '}
      {console.log("danfous kh" ,items)}
          <Dropdown overlay={menu}>
            <button className="basketbasket">Basket{items.length}</button>
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
};

export default Headers;
