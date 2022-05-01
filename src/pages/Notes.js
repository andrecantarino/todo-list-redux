import React from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/reducers/notes/actions';
import { useFormik } from "formik";
import * as yup from "yup";

const StyledNotes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 2rem;

  h2 {
    font-size: 2rem;
    color: #F5CB5C;
  }
  p {
    font-size: 1rem;
    color: #E8EDDF;
  }
  .form-label {
    display: flex;
    flex-direction: column;
    color: #E8EDDF;
    margin-top: 1rem;
  }
  .form-text {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 32px;
    margin-top: 0.4rem;
  }
  .form-textarea {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 200px;
    margin-top: 0.4rem;
  }
  .form-button {
    width: 100px;
    height: 32px;
    background-color: #F5CB5C;
    color: #242423;
    border-radius: 0.2rem;
    margin-top: 1rem;
  }
  .form-error {
    color: #f6646f;
    margin-bottom: 1rem;
    margin-top: 0.4rem;
  }
`

const Notes = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      note: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("O campo é obrigatório."),
      note: yup.string().required("O campo é obrigatório."),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addNote(values));
      resetForm();
    },
  });

  return (
    <StyledNotes>
      <h2>Notes</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title" className="form-label">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="form-text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="form-error">{formik.errors.title}</div>
        ) : null}
        <label htmlFor="note" className="form-label">Note</label>
        <textarea
          id="note"
          name="note"
          className="form-textarea"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.note}
        />
        {formik.touched.note && formik.errors.note ? (
          <div className="form-error">{formik.errors.note}</div>
        ) : null}
        <button type="submit" className="form-button">Submit</button>
      </form>
    </StyledNotes>
  )
}

export default Notes;