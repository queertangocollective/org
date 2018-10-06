import Component from '@ember/component';
import { computed } from '@ember/object';
import RSVP from 'rsvp';

export default Component.extend({
  classNames: ['check-out'],

  pay(paymentInfo, evt) {
    evt.preventDefault();
    this.set('isComplete', false);
    return this.onpay(paymentInfo).then(() => {
      debugger;
      this.set('hasPaid', true);
      this.cart.clear();
    }, (error) => {
      debugger;
      this.set('error', error);
      this.cart.clear();
    });
  },

  clearCart(evt) {
    evt.preventDefault();
    this.cart.clear();
  },

  payment: computed('cart.total', function () {
    return RSVP.all(this.cart.tickets).then((tickets) => {
      return {
        country: 'US',
        currency: 'usd',
        total: {
          label: tickets.mapBy('description').join(', '),
          amount: this.cart.total
        },
        requestPayerName: true,
        requestPayerEmail: true
      }
    });
  }),

  actions: {
    preventDefault(evt) {
      evt.preventDefault();
    }
  }
});
