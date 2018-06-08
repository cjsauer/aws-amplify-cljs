import React from 'react';
import cx from 'classnames';
import _pick from 'lodash/pick';

import NameInput from '../../elements/NameInput';
import Button from '../../elements/Button';

const getInputProps = props => 
  _pick(
    props, 
    ['value', 'onChange', 'onBlur', 'onFocus']
  )

class TestIdea extends React.PureComponent {
  render() {
    const {
      className,
      buttonText,
      onClick
    } = this.props
    const containerClasses = cx('pure-form', className)
    const inputProps = getInputProps(this.props)

    return (
      <form className={containerClasses}>
        <NameInput {...inputProps}/>
        <Button text={buttonText} onClick={onClick}/>
      </form>
    );
  }
}

TestIdea.defaultProps = {
  value: '',
  buttonText: 'Submit Username',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onClick: () => {},
};

export default TestIdea;