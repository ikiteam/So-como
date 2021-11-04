import React from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';



const ContactForm = () => {
    const errorsMessage = "ce champ est requis";

    const formik = useFormik({
        initialValues: {
            email: '',
            object: '',
            message: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email('l\'email est invalide.')
                .required(errorsMessage),
            object: Yup.string()
                .min(5, 'l\'objet doit faire 5 caractères minimun.')
                .max(30, 'l\'objet doit faire moins de 30 caractères.')
                .required(errorsMessage),
            message: Yup.string()
                .min(10, "Vous devez saisir 10 caractères minimun.")
                .required(errorsMessage),

        }),
        onSubmit: values => {
            console.log(values)
        },
    });
    return (
        <form action="#" method="post" onSubmit={formik.handleSubmit} className="form">
            <div>
                <label htmlFor="email">Mail</label>
                {formik.touched.email && formik.errors.email ? (
                    <span className="errorsMessage">{formik.errors.email}</span>) : null}
                <input type="text" id="email" placeholder="e-mail" name="email" {...formik.getFieldProps('email')}/>
            </div>

            <div>
                <label htmlFor="object">Objet</label>
                {formik.touched.object && formik.errors.object ? (
                    <span className="errorsMessage">{formik.errors.object}</span>) : null}
                <input type="text" id="object" placeholder="Objet"
                       name="object" {...formik.getFieldProps('object')}/>
            </div>

            <div>
                <label htmlFor="message">Message</label>
                {formik.touched.message && formik.errors.message ? (
                    <span className="errorsMessage">{formik.errors.message}</span>) : null}
                <textarea name="message" id="message" placeholder="Entrez votre message" cols="30" rows="10"
                          {...formik.getFieldProps('message')}/>

            </div>
            <button type="submit" className="btn submit">Envoyer</button>
        </form>
    );

};


export default ContactForm;