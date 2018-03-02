import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as treatmentActions from '../../actions/treatmentActions';
import TreatmentForm from './TreatmentForm';
import toastr from 'toastr';

class ManageTreatmentPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      treatment: Object.assign({}, props.treatment),
      errors: {},
      saving: false
    };
    this.updateTreatmentState = this.updateTreatmentState.bind(this);
    this.saveTreatment = this.saveTreatment.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.treatment != null && this.props.treatment.name != nextProps.treatment.name) {
      this.setState({treatment: Object.assign({}, nextProps.treatment)});
    }
  }

  updateTreatmentState(event) {
    const field = event.target.name;
    let treatment = Object.assign({}, this.state.treatment);
    treatment[field] = event.target.value;
    return this.setState({treatment: treatment});
  }

  saveTreatment(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveTreatment(this.state.treatment)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Treatment saved');
    this.context.router.push('/treatments');
  }

  render() {
    return (
      <TreatmentForm
        onChange={this.updateTreatmentState}
        onSave={this.saveTreatment}
        treatment={this.state.treatment}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageTreatmentPage.propTypes = {
  treatment: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageTreatmentPage.contextTypes = {
  router: PropTypes.object
};

function getTreatmentByName(treatments, name) {
  const treatment = treatments.filter(treatment => treatment.name == name);
  if (treatment.length) return treatment[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const treatmentName = ownProps.params.name;
  //id = 0 is used to trigger creation of a new treatment in treatmentActions
  let treatment = {id: 0, name: '', description: '', author: '', unitCost: 0, life: 0};
  if (treatmentName && state.treatments.length > 0) {
    treatment = getTreatmentByName(state.treatments, treatmentName);
  }

  return {
    treatment: treatment
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(treatmentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTreatmentPage);
