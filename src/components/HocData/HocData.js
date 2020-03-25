import React, { Component } from 'react';

const HocData = (View) => {
  return class extends Component {
    state = { items: null, isLoading: true, isError: false, };
    itemLoaded = (items) => this.setState({ items, isLoading: false, isError: false })
    catchError = (err) => this.setState({ isLoading: false, isError: true })

    componentDidMount() {
      const { getDataList } = this.props;
      getDataList().then(this.itemLoaded).catch(this.catchError);
    };

    render() {
      return <View { ...this.props } data={ this.state } />;
    }
  };
}

export default HocData;
