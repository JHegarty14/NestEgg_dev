import ReactDOM from 'react-dom';

export default function getInput(cmp) {
  if (cmp.props.getInputElement) {
    return cmp.props.getInputElement();
  }

  if (cmp.input) {
    return cmp.input;
  }

  const el = ReactDOM.findDOMNode(cmp);
  return el.tagName === 'INPUT' ? el : el.getElementsByTagName('INPUT')[0];
}