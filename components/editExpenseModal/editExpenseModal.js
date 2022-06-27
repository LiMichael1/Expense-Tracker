import { useState } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Modal from '../global/Modal/Modal';
import FormInputField from '../global/FormInputField';
import { FormContainer, FormSubmitButton } from '../styled/modal/AddExpense';

import FormDatePicker from './../global/FormDatePicker';

const testData = {
  title: 'Netflix Subscription',
  amount: -131.13,
  type: 'Entertainment',
  date: new Date('2020-03-10'),
};

const editExpenseSchema = Yup.object().shape({});

export default function EditExpense({ data = testData, isOpen = true, close }) {
  return (
    <Modal isOpen={isOpen} close={close}>
      <FormContainer>
        <Formik
          initialValues={data}
          validationSchema={editExpenseSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(values, null, 2);
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form style={{ width: '100%' }}>
            <FormInputField name='title' type='text' placeholder={data.name} />
            <FormInputField
              name='amount'
              type='number'
              placeholder={data.amount}
              min='-100000.00'
              max='100000.00'
              step='0.01'
            />
            <FormInputField name='type' type='text' placeholder={data.type} />

            <FormDatePicker
              name='date'
              placeholder={data.date}
              data-date-inline-picker='true'
            />
            <FormSubmitButton type='submit' style={{ marginTop: '1rem' }}>
              Save
            </FormSubmitButton>
          </Form>
        </Formik>
      </FormContainer>
    </Modal>
  );
}
