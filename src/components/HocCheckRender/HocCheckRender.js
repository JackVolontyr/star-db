import React, { Fragment } from 'react';
import Spinner from '../Spinner';
import ViewError from '../ViewError';

const HocCheckRender = (View) => {
  return (props) => {
    const { data: { isLoading, isError } } = props;

    const isHasData = !(isLoading || isError);
    const spinner = isLoading ? <Spinner /> : null;
    const content = isHasData ? <View { ...props } /> : null;
    const errorMessage = !isLoading && isError ?
      <ViewError theme={ 'padding' } /> : null;

    return <Fragment>{spinner}{content}{errorMessage}</Fragment>;
  };
}

export default HocCheckRender;
