import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css"
import { useDispatch, useSelector } from "react-redux";
import {create} from "../../redux/store"
import { nanoid } from "nanoid";

export default function ContactForm({  contactSchema }) {
    const dispatch = useDispatch()

    const handleSubmit = (values, { resetForm }) => {
        const id = nanoid()
        console.log(values)
        dispatch(create({
            id: id,
            name: values.nameField,
            number: values.numberField,
        }))
        resetForm();
    }

    

    return (
        <Formik initialValues={{nameField:"",numberField:""}} validationSchema={contactSchema} onSubmit={handleSubmit}>
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