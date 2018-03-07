import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from './Autocomplete';
import Dropdown from './Dropdown';
import Autosize from './Autosize';
import renderChildren from './components/renderChildren';

const CARET_PADDING = 15;

class Combobox extends PureComponent {
  static propTypes = {
    autosize: PropTypes.bool,
    autocomplete: PropTypes.bool
  };

  render() {
    const { autosize, autocomplete, children, ...props } = this.props;

    if (autosize && autocomplete) {
      return this.renderAutosizeAutocompleteDropdown(children, props);
    } else if (autosize) {
      return this.renderAutosizeDropdown(children, props);
    } else if (autocomplete) {
      return this.renderAutocompleteDropdown(children, props);
    } else {
      return this.renderDropdown(children, props);
    }
  }

  renderAutosizeAutocompleteDropdown(children, props) {
    return (
      <Dropdown {...props}>
        {(dropdownInputProps, { textValue }, registerInput) => (
          <Autocomplete
            value={textValue}
            onChange={dropdownInputProps.onChange}
            onKeyDown={dropdownInputProps.onKeyDown}
            options={props.options}
            registerInput={registerInput}
            getInputComponent={props.getInputComponent}
          >
            {(inputProps, { matchingText }, registerInput) => (
              <Autosize
                value={inputProps.value}
                onChange={inputProps.onChange}
                defaultWidth={props.defaultWidth}
                getSizerContainer={props.getSizerContainer}
                registerInput={registerInput}
                getInputComponent={props.getInputComponent}
                padding={CARET_PADDING}
              >
                {(autosizeInputProps, { width }, registerInput) =>
                  renderChildren(
                    children,
                    {
                      ...dropdownInputProps,
                      ...inputProps,
                      ...autosizeInputProps
                    },
                    { matchingText, width },
                    registerInput
                  )
                }
              </Autosize>
            )}
          </Autocomplete>
        )}
      </Dropdown>
    );
  }

  renderAutosizeDropdown(children, props) {
    return (
      <Dropdown {...props}>
        {(inputProps, { textValue }, registerInput) => (
          <Autosize
            value={textValue}
            onChange={inputProps.onChange}
            defaultWidth={props.defaultWidth}
            getSizerContainer={props.getSizerContainer}
            registerInput={registerInput}
            getInputComponent={props.getInputComponent}
            padding={CARET_PADDING}
          >
            {(autosizeInputProps, { width }, registerInput) =>
              renderChildren(
                children,
                { ...inputProps, ...autosizeInputProps },
                { width },
                registerInput
              )
            }
          </Autosize>
        )}
      </Dropdown>
    );
  }

  renderAutocompleteDropdown(children, props) {
    return (
      <Dropdown {...props}>
        {(dropdownInputProps, { textValue }, registerInput) => (
          <Autocomplete
            value={textValue}
            onChange={dropdownInputProps.onChange}
            onKeyDown={dropdownInputProps.onKeyDown}
            options={props.options}
            registerInput={registerInput}
            getInputComponent={props.getInputComponent}
          >
            {(inputProps, { matchingText }, registerInput) =>
              renderChildren(
                children,
                {
                  ...dropdownInputProps,
                  ...inputProps
                },
                { matchingText },
                registerInput
              )
            }
          </Autocomplete>
        )}
      </Dropdown>
    );
  }

  renderDropdown(children, props) {
    return (
      <Dropdown {...props}>
        {(inputProps, otherProps, registerInput) =>
          renderChildren(children, inputProps, otherProps, registerInput)
        }
      </Dropdown>
    );
  }
}

export default Combobox;