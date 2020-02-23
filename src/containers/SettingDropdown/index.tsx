import React, { Component } from 'react';
import { connect } from 'react-redux';
import Theme from '../Theme';
import onClickOutside, { InjectedOnClickOutProps } from 'react-onclickoutside';
import './styles.css';

export interface State {
  isOpen: boolean;
}

export type Props = InjectedOnClickOutProps;

class SettingDropdown extends Component<Props, State> {
  state = {
    isOpen: false,
  };

  handleClickOutside = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  toggleDropdown() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render(): React.ReactElement {
    const { isOpen } = this.state;

    return (
      <div className="SettingDropdown">
        <i className="SettingDropdown__icon fas fa-cog" onClick={() => this.toggleDropdown()} />
        {isOpen && (
          <div className="SettingDropdown__dropdown">
            <Theme />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(onClickOutside(SettingDropdown));
