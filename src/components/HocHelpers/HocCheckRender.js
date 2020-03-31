import React from 'react';
import Spinner from '../Spinner';
import ViewError from '../ViewError';

const HocCheckRender = (View, className, CustomTag = 'div') => {
  return (props) => {
    const { data: { isLoading, isError } } = props;

    const isHasData = !(isLoading || isError);
    const spinner = isLoading ? <Spinner /> : null;
    const content = isHasData ? <View { ...props } /> : null;
    const errorMessage = !isLoading && isError ?
      <ViewError theme={ 'padding' } /> : null;

    return <CustomTag className={ className }>
      {spinner}{content}{errorMessage}
    </CustomTag>;
  };
}

export default HocCheckRender;
