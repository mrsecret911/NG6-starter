
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from '../../../redux/store'

import Person from '../react/Person'

export default function() {
  return {
    template: '<div id="person"></div>',
    link: function(scope, el, attrs) {
      ReactDOM.render(
        <Provider store={store}>
          <React.StrictMode>
            <Person id={attrs.personid}/>
          </React.StrictMode>
        </Provider>,
        document.getElementById('person')
      );
    }
  };
};
