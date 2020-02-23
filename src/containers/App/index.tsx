import React, { Component } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { RootState } from '../../core/reducers';
import { Theme } from '../../core/models/theme';
import Pages from './../../pages';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../Sidebar';
import './styles.css';

interface StateToProps {
  page: {
    component: string;
    withSideBar: boolean;
  };
  theme: Theme;
}

type Props = StateToProps;

class App extends Component<Props> {
  render(): React.ReactNode {
    const { page, theme } = this.props;
    return (
      <div className={cx('App', `App-${theme}`)}>
        <Header />
        <div className="App__content">
          {page.withSideBar && <SideBar />}
          <div className="App__page">
            <Pages page={page.component} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateToProps => ({
  page: state.page,
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(App);
