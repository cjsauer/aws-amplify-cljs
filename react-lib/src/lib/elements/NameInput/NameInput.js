import React from 'react';
import cx from 'classnames';

const handleChange = onChange => event => onChange(event.target.value)
class NameInput extends React.PureComponent {
  render() {
    const { className, onChange, ...rest } = this.props;
    const inputClasses = cx('ui.input', className)

    return(
      <input
        type='text' {...rest}
        onChange={handleChange(onChange)}
        className={inputClasses}
      />
    );
  }
}

export default NameInput;