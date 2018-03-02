import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const TreatmentForm = ({treatment, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Treatment</h1>
      <TextInput
        name="name"
        label="Name"
        value={treatment.name}
        onChange={onChange}
        error={errors.name}/>

      <TextInput
        name="description"
        label="Description"
        value={treatment.description}
        onChange={onChange}
        error={errors.description}/>

      <TextInput
        name="author"
        label="Author"
        value={treatment.author}
        onChange={onChange}
        error={errors.author}/>

      <TextInput
        name="unitCost"
        label="Unit Cost £ m²"
        value={treatment.unitCost}
        onChange={onChange}
        error={errors.unitCost}/>

      <TextInput
        name="life"
        label="Life"
        value={treatment.life}
        onChange={onChange}
        error={errors.life}/>

      <input
        type="submit"
        disable={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

TreatmentForm.propTypes = {
  treatment: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default TreatmentForm;
