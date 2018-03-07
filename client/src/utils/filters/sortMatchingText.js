import sort from 'lodash.sortby';
import getTxtOption from '../components/getTxtOption';
import isStatic from '../components/static';

export default function sortByMatchingText(options, value) {
  value = value && value.toLowerCase();

  return sort(options, opt => {
    if (isStatic(opt)) {
      return 0;
    }

    const text = getTxtOption(opt).toLowerCase();
    const matching = text.indexOf(value) === 0;
    return matching ? 1 : 2;
  });
}