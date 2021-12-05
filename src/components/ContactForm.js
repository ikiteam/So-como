import React, {useRef} from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field} from 'formik';
import emailjs from 'emailjs-com';
import Recaptcha from "react-google-recaptcha";


/*------------------------------------------------------------------------------*/
/*                             SECURISATION FORM                                */
/*------------------------------------------------------------------------------*/

const ContactForm = () => {
    const errorsMessage = "ce champ est requis";
    const form = useRef();

    const validation = Yup.object().shape({
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

    });
    return (
        <Formik
            initialValues={{
                email: "",
                object: "",
                message: "",
            }}
            validationSchema={validation}
            onSubmit={values => {
                console.log(values);

                if (values !== "") {
                    emailjs.sendForm('service_krkylsr', 'template_up4361d',
                        form.current, 'user_lQfT3X6zkLYWzW5Fe6GTv')
                        .then((result) => {
                            console.log(result.text);
                            alert('message envoyée')
                        }, (error) => {
                            console.log(error.text);
                            alert('une erreur est survenue')
                        });
                } else {
                    document.getElementById('btnSend').disabled = true;
                }
            }
            }

        >
            {({
                  values, errors, touched,
                  handleSubmit, setFieldValue
              }) => (
                <Form className="form" ref={form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">email</label>
                        <Field name="email" placeholder="e-mail"/>
                        {errors.email && touched.email ? (
                            <div className="errorsMessage">{errors.email}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="object">objet</label>
                        <Field name="object" placeholder="objet"/>
                        {errors.object && touched.object ? (
                            <div className="errorsMessage">{errors.object}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="message">message</label>
                        <Field name="message" as="textarea"/>
                        {errors.message && touched.message ? (
                            <div className="errorsMessage">{errors.message}</div>
                        ) : null}
                    </div>
                    <div>
                        <Recaptcha
                            sitekey="6LeyHDAdAAAAAAd_-TqmfDNu6CsPNXQ_u9mb-2rL"
                            render="explicit"
                            verifyCallback={(response) => {
                                setFieldValue("Recaptcha", response);
                            }}
                            validationOnChange={values => {
                                if (values !== "") {
                                document.getElementById("btnSend").disabled = false;
                            } else {
                                document.getElementById("btnSend").disabled = true;
                            }
                            }
                            }
                                />
                            {errors.recaptcha
                                && touched.recaptcha && (
                                <div className="errorsMessage">{errors.recaptcha}</div>
                                )}
                                <button type="submit" id="btnSend" className="btn submit">Envoyer</button>
                                </div>
                                </Form>
                                )}
                    </Formik>
                    );
                    };

                    export default ContactForm;