import { mount, shallow } from 'enzyme';

import ProductDisplay, {
  ProductCard,
  Model,
} from '../components/home/ProductDisplay';

/** @test {ProductDisplay Component} */
describe('ProductDisplay Component', () => {
  it('should render 2 complete stars (2 svg total)', () => {
    const wrapper = mount(<ProductDisplay rating={2} />);
    const starContainer = wrapper.find('article div');
    expect(starContainer.find('svg')).toHaveLength(2);
  });

  it('should render 4 complete stars, 1 half star (5 svg total)', () => {
    const wrapper = mount(<ProductDisplay rating={4.5} />);
    const starContainer = wrapper.find('article div');
    expect(starContainer.find('svg')).toHaveLength(5);
  });

  it('model = Sennheiser 800S', () => {
    const wrapper = mount(<ProductDisplay model='Sennheiser 800S' />);
    // const productCard = wrapper.find('ProductCard');
    // const model = productCard.find('Model');
    const model = wrapper.find('h2');
    expect(model.text()).toBe('Sennheiser 800S');
  });

  // it('model = Sennheiser 800S', () => {
  //   const wrapper = shallow(<ProductDisplay model='Sennheiser 800S' />);
  //   expect(wrapper.find('article')).toHaveLength(1);
  // });
});
