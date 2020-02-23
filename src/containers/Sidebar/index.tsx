import React, { Component } from 'react';
import cx from 'classnames';
import './styles.css';

export interface State {
  isCollapsed: boolean;
}

class Sidebar extends Component<{}, State> {
  readonly state = {
    isCollapsed: false,
  };

  handleColapse() {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  render(): React.ReactNode {
    const { isCollapsed } = this.state;

    return (
      <div className={cx('Sidebar', { 'Sidebar-open': isCollapsed })}>
        <div className="Sidebar__item" onClick={() => this.handleColapse()}>
          <i className="fas fa-bars Sidebar__icon" />
        </div>
      </div>
    );
  }
}

export default Sidebar;
