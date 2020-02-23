import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Maybe } from '../../common/types';
import { RootState } from '../../core/reducers';
import SettingDropdown from '../SettingDropdown';
import cx from 'classnames';

import './styles.css';

interface StateToProps {
  token: Maybe<string>;
}

export type Props = StateToProps;

class Header extends Component<Props> {
  get isLogin() {
    return !!this.props.token;
  }

  render(): React.ReactNode {

    return (
      <div className={cx('Header', {'Header-login': !this.isLogin})}>
          <SettingDropdown/>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateToProps => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(Header);
