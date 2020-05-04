import * as actions from '../../redux/actions';

class PersonsController {
  static $inject = ["$ngRedux"];

  constructor($ngRedux) {
    this.unsubscribe = $ngRedux.connect(this.mapStateToProps, actions)(this);
  }

  $onInit() {
    if (!this.list.length) {
      this.getPersons(200);
      console.log(this.list);
    }
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToProps({ persons: { list } }) {
    return { list };
  }
}

export default PersonsController;
