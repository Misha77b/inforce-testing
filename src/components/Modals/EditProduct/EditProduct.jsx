import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material//TextField';
import PropTypes from 'prop-types';

import { updateProduct } from '../../../API/products/products.thunks'
import { useDispatch } from 'react-redux';

const style={                
    display: 'flex', 
    flexDirection: 'column',
    gap: '10px',
}

const validationSchema = yup.object({
    name: yup.string()
        .nullable()
        .required('Full name is required'),
    description: yup.string()
        .nullable()
        .required('Visit purpose is required'),
    weight: yup.string()
        .nullable()
        .required('Is required')
});

const EditProduct = () => {

    const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      count: '',
      weight: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const updateProductValues = {
        name: values.name,
        description: values.description,
        count: +values.count,
        weight: values.weight,
        id: Math.random().splice*10,
        imageUrl: "https://images.pexels.com/photos/5218478/pexels-photo-5218478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }
      dispatch(updateProduct(updateProductValues));
      handleClose();
    },
  });

  return (
    <div>
        <form 
        style={style}
        onSubmit={formik.handleSubmit}
        >
            <TextField  
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            type="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.visitPdescriptionurpose && formik.errors.description}
            />
            <TextField
            fullWidth
            id="count"
            name="count"
            label="Count"
            type="count"
            value={formik.values.count}
            onChange={formik.handleChange}
            error={formik.touched.count && Boolean(formik.errors.count)}
            helperText={formik.touched.count && formik.errors.count}
            />
            <TextField
            fullWidth
            id="weight"
            name="weight"
            label="weight"
            type="weight"
            value={formik.values.weight}
            onChange={formik.handleChange}
            error={formik.touched.weight && Boolean(formik.errors.weight)}
            helperText={formik.touched.weight && formik.errors.weight}
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button
                variant='contained'
                type="submit"
            >
                Edit product
            </Button>
            <Button 
                variant='contained'
                color='error'
                onClick={handleClose}
            >
                Cancel
            </Button>
            </div>
        </form>
    </div>
  )
}

export default EditProduct

EditProduct.propTypes = {
    handleClose: PropTypes.func
  }