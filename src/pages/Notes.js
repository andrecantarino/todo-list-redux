import React from 'react';
import styled from "styled-components";
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
  }
  .form-text {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 32px;
    margin-top: 0.4rem;
  }
  .form-button {
    width: 100px;
    height: 32px;
    background-color: #F5CB5C;
    color: #242423;
    border-radius: 0.2rem;
  }
  .form-error {
    color: #f6646f;
    margin-bottom: 1rem;
    margin-top: 0.4rem;
  }
`

const Notes = () => {
  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      idade: "",
    },
    validationSchema: yup.object({
      nome: yup.string().required("O campo é obrigatório."),
      email: yup
        .string()
        .email("E-mail inválido.")
        .required("O campo é obrigatório."),
      idade: yup
        .number()
        .required("O campo é obrigatório.")
        .positive("O campo deve ser positivo.")
        .integer("O campo deve ser um número inteiro."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledNotes>
      <h2>Notes</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="nome" className="form-label">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          className="form-text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nome}
        />
        {formik.touched.nome && formik.errors.nome ? (
          <div className="form-error">{formik.errors.nome}</div>
        ) : null}
        <label htmlFor="email" className="form-label">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="form-error">{formik.errors.email}</div>
        ) : null}
        <label htmlFor="idade" className="form-label">Idade</label>
        <input
          id="idade"
          name="idade"
          type="number"
          className="form-text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.idade}
        />
        {formik.touched.idade && formik.errors.idade ? (
          <div className="form-error">{formik.errors.idade}</div>
        ) : null}
        <button type="submit" className="form-button">Enviar</button>
      </form>
    </StyledNotes>
  )
}

export default Notes;