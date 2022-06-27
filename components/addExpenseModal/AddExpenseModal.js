import { useState } from 'react';
import Image from 'next/image';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Avatar } from '@mui/material';

import Modal from '../global/Modal/Modal';
import FormInputField from '../global/FormInputField';
import FormCheckBox from '../global/FormCheckBox';
import {
  FormContainer,
  FormSubmitButton,
  FormFileUploadButton,
} from '../styled/modal/AddExpense';

import FormDatePicker from './../global/FormDatePicker';

import FileUploadIcon from '../../public/Icons/FileUploadIcon.png';

const addExpenseSchema = Yup.object().shape({});

export default function AddExpense({ isOpen, close }) {
  const [fileUploadImg, setFileUploadImg] = useState(null);

  const initialValues = {
    title: '',
    amount: 0.0,
    type: '',
    date: Date.now(),
    recurring: false,
    image: null,
  };

  const handleImg = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setFileUploadImg(fileReader.result);
      }
    };
    if (e.target.files[0]) fileReader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={addExpenseSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(values, null, 2);
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form style={{ width: '100%' }}>
            <FormInputField
              name='title'
              type='text'
              placeholder='Title'
              style={{ height: '52px' }}
            />
            <FormInputField
              name='amount'
              type='number'
              placeholder='Amount'
              min='-100000.00'
              max='100000.00'
              step='0.05'
              style={{ height: '52px' }}
            />
            <FormInputField
              name='type'
              type='text'
              placeholder='Type'
              style={{ height: '52px' }}
            />
            <div
              style={{ height: '52px', width: '60%', display: 'inline-block' }}
            >
              <FormDatePicker name='date' placeholder='Date' />
            </div>

            <FormCheckBox name='recurring' style={{ margin: '0 0 0 20px' }}>
              {' '}
              Recurring
            </FormCheckBox>

            <FormFileUploadButton
              htmlFor='imageUpload'
              style={{ marginTop: '2rem' }}
            >
              <FormInputField
                name='image'
                type='file'
                accept='image/*'
                id='imageUpload'
                onChange={(e) => handleImg(e)}
                hidden
              />
              {fileUploadImg ? (
                <Avatar
                  alt='File'
                  src={fileUploadImg}
                  sx={{ width: 50, height: 50 }}
                />
              ) : (
                <Image
                  src={FileUploadIcon}
                  alt='file'
                  style={{ display: 'block', cursor: 'pointer' }}
                />
              )}
            </FormFileUploadButton>

            <FormSubmitButton type='submit'>Submit</FormSubmitButton>
          </Form>
        </Formik>
      </FormContainer>
    </Modal>
  );
}
