import { mount, shallow } from 'enzyme';
import Nav from '../components/global/Nav';
import CartOpen from '../components/global/CartOpen';
import MenuOpen from '../components/global/MenuOpen';

it('should render CartOpen or MenuOpen', () => {
  const wrapper = mount(<Nav showingCartOrMenu={null} />);
  const cart = wrapper.find(CartOpen);
  const menu = wrapper.find(MenuOpen);
  expect(cart.exists()).toBe(false);
});
