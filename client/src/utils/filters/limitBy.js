import isStatic from '../components/static';

export default function limitBy(limit) {
  return options => options.slice(0, limit + options.filter(isStatic).length);
}