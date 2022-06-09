import renderer from 'react-test-renderer';
import Button from '../components/button';

//  This is just an example but you can solve it the way you want

it('Calculator button renders correctly', () => {
  const handleClick = () => true;
  const tree = renderer.create(<Button id="1" className="class" text="Submit" onClick={handleClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});
