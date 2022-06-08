import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

it('The calculator rernders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
