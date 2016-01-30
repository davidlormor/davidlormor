import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['ui', 'main-nav'],
  classNameBindings: ['isOpen'],
  
  isOpen: false,
  
  mouseEnter() {
    this.set('isOpen', true);
  },
  
  mouseLeave() {
    this.set('isOpen', false);
  }
});
