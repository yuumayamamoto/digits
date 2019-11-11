import React from 'react';
import { Segment } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/src/TextField';
import HiddenField from 'uniforms-semantic/src';
import SubmitField from 'uniforms-semantic/src/SubmitField';
import ErrorsField from 'uniforms-semantic/src/ErrorsField';
import swal from 'sweetalert';
import 'uniforms-bridge-simple-schema-2';
import { Notes, NotesSchema } from '../../api/note/Notes';
import PropTypes from 'prop-types';


class AddContact extends React.Component {
  submit(data, formRef) {
    const { note, owner, contactId, createdAt } = data;
    Notes.insert({ note, owner, contactId, createdAt },
        (error) => {
          if (error) {
            swal('Note Error', error.message, 'error');
          } else {
            swal('Success', 'Note added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** */
  render() {
    let fRef = null;
    return (

        <AutoForm ref={ref => {fref = ref;}} schema={NotesSchema} onSubmit={data => this.submit(data, fRef)}>
          <Segment>
            <TextField label="Add a timestamped note" name='note'/>
            <SubmitField value='Submit'/>
            <ErrorsField/>
            <HiddenField name='owner' value={this.props.owner}/>
            <HiddenField name='contactId' value={this.props.contactId}/>
            <HiddenField name='createdAt' value={new Date()}/>
          </Segment>
        </AutoForm>
    );
  }
}
  AddNote.propTypes = {
  owner: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};


export default AddNote;