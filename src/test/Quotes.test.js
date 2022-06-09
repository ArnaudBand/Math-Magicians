import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

it('Quotes renders correctly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
