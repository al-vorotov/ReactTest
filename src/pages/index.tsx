import React, { Component } from 'react';
import Home from './Home';

interface Props {
  page: string;
}
export default class Pages extends Component<Props> {
  render(): React.ReactNode {
    const { page } = this.props;
    switch (page) {
      case 'Home':
        return <Home />;
      default:
        return <Home />;
    }
  }
}
