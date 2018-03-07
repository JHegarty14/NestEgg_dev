import getTxtOption from '../components/getTxtOption';
import isStatic from '../components/static';

export default function filterByMatchingTextWithThreshold(threshold) {
  return (options, value) => {
    if (!value || (threshold && options.length < threshold)) return options;
    value = value.toLowerCase();

    return options.filter(opt => {
      return (
        isStatic(opt) ||
        getTxtOption(opt)
          .toLowerCase()
          .indexOf(value) !== -1
      );
    });
  };
}