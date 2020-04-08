import React, { Component } from 'react';

const HocData = (View, isLoading) => {
  return class extends Component {
    state = { result: null, isLoading: isLoading, isError: false, };
    resultLoaded = (result) => this.setState({ result, isLoading: false, isError: false })
    catchError = (err) => this.setState({ isLoading: false, isError: true })

    updateResult = () => {
      const { dataPromise } = this.props;
      if (dataPromise) dataPromise.then(this.resultLoaded).catch(this.catchError);
    }

    componentDidMount() { this.updateResult(); };

    componentDidUpdate(prevProps, prevState) {
      if (
        this.props.itemId !== prevProps.itemId ||
        this.props.dataPromise !== prevProps.dataPromise
      ) {
        this.setState({ isLoading: true });
        this.updateResult();
      }
    }

    componentWillUnmount() {}

    render() {
      return <View { ...this.props } data={ this.state } />;
    }
  };
}

export default HocData;
