import React from 'react';
import cx from 'classnames';

class Button extends React.PureComponent {
  render() {
    const { className, text, ...rest } = this.props;
    const buttonClasses = cx('pure-button pure-button-primary', className)

    return(
      <button type="button" {...rest} className={buttonClasses}>
        {text}
      </button>
    );
  }
}

export default Button;