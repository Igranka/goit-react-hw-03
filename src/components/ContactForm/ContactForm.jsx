import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const FormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/, {
        message: "Invalid, format: ###-##-##",
        excludeEmptyString: false,
      })
      .required("Required"),
});


const ContactForm = ({ onAdd }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();
    
    const initialValues = {
        name: "",
        number: "",
    }

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        actions.resetForm();
    }
 
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FormSchema}
        >
            <Form className={css.form}>
                {/* Name field */}
                <div className={css.group}>
                    <label htmlFor={nameFieldId} className={css.label}>Name</label>
                    <Field className={css.field} type="text" name="name" id={nameFieldId} />
                    <ErrorMessage className={css.error} name="name" component="span" />
                </div>

                {/* Number field */}
                <div className={css.group}>
                    <label htmlFor={numberFieldId} className={css.label}>Number</label>
                    <Field className={css.field} type="text" name="number" id={numberFieldId} placeholder="123-45-67"></Field>
                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>    
                
                <div className={css.group}>
                    <button className={css.button} type="submit">Add contact</button>
                </div>    
            </Form>
        </Formik>
    );
};

export default ContactForm;