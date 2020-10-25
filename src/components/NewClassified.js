import React from 'react';
import {
  Card,
  CardContent,
  Button,
  CardHeader,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CardActions,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from '../styles/main';

//custom hook
import useNewClassified from './useNewClassified';

// validation stuff
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

// redux stuff
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '../store/actions/overall';
import { addItem } from '../store/actions/classifiedActions';

export default function NewClassified() {
  let dispatch = useDispatch();

  const classes = useStyles();

  const {
    validationSchema,
    initialValues,
    isImageUploading,
    handleImageAsFile,
    categories,
  } = useNewClassified();

  const closeDrawer = () => {
    dispatch(toggleDrawer());
  };

  const submit = (e) => {
    e.id = Date.now();
    dispatch(addItem(e));
    dispatch(toggleDrawer());
  };
  return (
    <Card>
      <CardContent style={{ textAlign: 'right' }}>
        <CloseIcon onClick={() => closeDrawer()} />
      </CardContent>
      <CardHeader title='New Classified'></CardHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({ isValid, dirty, handleChange, setFieldValue, values }) => {
          return (
            <Form>
              <CardContent>
                <Field
                  label='Title'
                  variant='filled'
                  name='title'
                  fullWidth
                  component={TextField}
                  margin='normal'
                />
                <FormControl
                  className={classes.formControl}
                  style={{ width: '100%', marginLeft: 0 }}
                >
                  <InputLabel
                    id='demo-simple-select-label'
                    style={{ marginLeft: '0.7rem' }}
                  >
                    Category
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={values.category}
                    onChange={handleChange}
                    variant='filled'
                    name='category'
                  >
                    {categories.map((category) => (
                      <MenuItem value={category} key={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Field
                  label='Description'
                  margin='normal'
                  variant='filled'
                  name='description'
                  fullWidth
                  multiline
                  component={TextField}
                  rows={8}
                />

                <label htmlFor='upload-photo'>
                  <input
                    style={{ display: 'none' }}
                    id='upload-photo'
                    name='upload-photo'
                    type='file'
                    accept='image/x-png,image/gif,image/jpeg'
                    onChange={(e) => {
                      e.persist();
                      handleImageAsFile(e, setFieldValue);
                    }}
                  />
                  <Button color='primary' component='span' size='small'>
                    Upload photo
                  </Button>
                </label>
              </CardContent>
              <CardActions>
                {isImageUploading ? (
                  'Please wait image is uploading...'
                ) : (
                  <Button
                    color='primary'
                    variant='contained'
                    type='submit'
                    disabled={!dirty || !isValid}
                    style={{ borderRadius: '1rem' }}
                  >
                    Save and publish
                  </Button>
                )}
              </CardActions>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
}
