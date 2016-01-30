import Ember from 'ember';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.LinkComponent.reopen({
    classNames: ['link-to']
  });
}

export default {
  name: 'links',
  initialize
};
