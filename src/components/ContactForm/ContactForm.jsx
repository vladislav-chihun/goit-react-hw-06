import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css"
import { useDispatch, useSelector } from "react-redux";

export default function ContactForm({  contactSchema }) {
    const dispatch = useDispatch()

    const handlesSubmit = (values, { resetForm }) => {
        dispatch({
            type: "contact/add",
            payload:{values}
        })
        resetForm();
    }

    

    return (
        <Formik initialValues={{nameField:"",numberField:""}} validationSchema={contactSchema} onSubmit={handlesSubmit}>
            <Form className={css.form}>
                <div className={css.nameContainer}>
                    <label htmlFor="nameField">Name</label>
                    <Field type="text" name="nameField" id="nameField"></Field>
                    <ErrorMessage name="nameField" component="div" className={css.errorMessage} />
                </div>
                <div className={css.numberContainer}>
                    <label htmlFor="numberField">Number</label>
                    <Field type="text" name="numberField" id="numberField"></Field>
                    <ErrorMessage name="numberField" component="div" className={css.errorMessage} />
                </div>
                 
                <button name="AddContactField" type="submit" className={css.btn}>Add contact</button>
            </Form>
        </Formik>
    )
}