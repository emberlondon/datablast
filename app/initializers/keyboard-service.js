export function initialize(container, application) {
  application.inject('router:main', 'keyboard', 'service:keyboard');
}

export default {
  name: 'keyboard-service',
  initialize: initialize
};
