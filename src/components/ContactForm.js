import React, { useState } from "react";
import { Formik } from 'formik';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ContactForm() {
    const [sent, setSent] = useState( false );
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}
            validate={values => {
                setSent( false );
                const errors = {};
                if( !values.name ) {
                    errors.name = 'What\'s your name?'
                }
                if( !values.message ) {
                    errors.message = 'At least say Hi! ;)'
                }
                if( !values.email ) {
                    errors.email = 'Where should I reply?';
                } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email ) ) {
                    errors.email = 'Wrong email?';
                }
                return errors;
            }}
            onSubmit={( values, { setSubmitting, resetForm } ) => {
                axios.post( "https://43lj272xfokeeqp3xkxiecjjfm0lxhka.lambda-url.us-east-2.on.aws/", {
                    ...values
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    crossDomain: true
                } ).then( res => {
                    setSent( true );
                    resetForm();
                } ).catch( console.error ).finally( () => {
                    setSubmitting( false );
                } )
            }}
        >
            {( {
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            } ) => (
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">What is Your Name:</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className={errors.name && touched.name ? 'is-invalid form-control' : 'form-control'}
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isSubmitting}
                        />
                        {errors.name && touched.name && (
                            <div className="invalid-feedback mb-4">
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Your Email Address::</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={errors.email && touched.email ? 'is-invalid form-control' : 'form-control'}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isSubmitting}
                        />
                        {errors.email && touched.email && (
                            <div className="invalid-feedback mb-4">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">How can I Help?:</label>
                        <textarea
                            id="message"
                            name="message"
                            className={errors.message && touched.message ? 'is-invalid form-control' : 'form-control'}
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isSubmitting}
                        ></textarea>
                        {errors.message && touched.message && (
                            <div className="invalid-feedback mb-4">
                                {errors.message}
                            </div>
                        )}
                    </div>
                    <button type='submit' className="btn btn-primary">
                        {isSubmitting ? (
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (
                            <>Send <FontAwesomeIcon icon={faArrowRight} /></>
                        )}
                    </button>
                    {sent && (
                        <div className="alert alert-success mt-4" role="alert">
                            Success... Message Sent!
                        </div>
                    )}
                </form>
            )}
        </Formik>
    )
}

export default ContactForm;