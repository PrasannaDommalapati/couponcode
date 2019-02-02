import React from 'react';
import CouponApp from '../components/coupon-app';
import renderer from 'react-test-renderer';

describe('App Component', () => {
  it('renders App coponent correctly', () => {
    const tree = renderer.create(<CouponApp/>).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
