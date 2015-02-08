export function initialize(container, application) {
  application.inject('component', 'window', 'service:window');
}

export default {
  name: 'window-service',
  initialize: initialize
};
