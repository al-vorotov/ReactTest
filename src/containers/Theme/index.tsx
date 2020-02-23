import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Theme as ThemeType, themeArray } from '../../core/models/theme';
import { setTheme } from '../../core/actions/theme';
import { RootState } from '../../core/reducers';
import ThemeItem from './ThemeItem';
import './styles.css';

interface DispatchToProps {
  setTheme(theme: ThemeType): void;
}

interface StateToProps {
  selectedTheme: ThemeType;
}

export type Props = StateToProps & DispatchToProps;

class Theme extends Component<Props> {
  render(): React.ReactElement {
    const { selectedTheme, setTheme } = this.props;
    return (
      <div className="Theme">
        <div className="Theme__title">Theme</div>
        <div className="Theme__items">
          {themeArray.map(({ color, theme }, key) => (
            <ThemeItem
              key={key}
              className="Theme__theme_item"
              color={color}
              isSelected={theme === selectedTheme}
              onClick={() => setTheme(theme)}
            />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: RootState): StateToProps => ({
  selectedTheme: state.theme.theme,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({
  setTheme: theme => dispatch(setTheme(theme)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Theme);
