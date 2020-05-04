import * as actions from '../../../redux/actions';

class PersonController {
  static $inject = ["$ngRedux", '$stateParams'];

  constructor($ngRedux, $stateParams) {
    this.id = $stateParams.personId;
    this.unsubscribe = $ngRedux.connect(this.mapStateToProps, actions)(this);
  }

  $onDestroy() {
    this.unsubscribe();
  }
}

let personComponent = {
  bindings: {},
  template: '<person-directive personId={{$ctrl.id}}></person-directive>',
  controller: PersonController
};

export default personComponent;
