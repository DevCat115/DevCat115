import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { Store } from 'react-notifications-component';
// import { cloneUniformsGroups } from 'three';

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map(input => [input, ''])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAIL_JS_USER_ID,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string): boolean => {
    // Add your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;

    const newErrors = { ...errors };
    if (name === 'email' && !isValidEmail(value)) {
      newErrors[name] = 'Please enter a valid email address.';
    } else {
      delete newErrors[name];
    }

    setForm({ ...form, [name]: value });
    setErrors(newErrors);
  };

  const successNotificationHandle = () => {
    Store.addNotification({
      title: "Success!",
      message: "Thank you. I will get back to you as soon as possible.",
      type: "success",  // 'default', 'success', 'info', 'warning', 'danger'
      insert: "top",    // 'top' or 'bottom'
      container: "top-right",  // Where the notification will appear
      animationIn: ["animate__animated", "animate__fadeIn"],  // Optional animations
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,  // Auto-dismiss after 5 seconds
        onScreen: true
      }
    })
  }

  const failedNotificationHandle = (error : string) => {
    Store.addNotification({
      title: "error",
      message: error,
      type: "warning",  // 'default', 'success', 'info', 'warning', 'danger'
      insert: "top",    // 'top' or 'bottom'
      container: "top-right",  // Where the notification will appear
      animationIn: ["animate__animated", "animate__fadeIn"],  // Optional animations
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,  // Auto-dismiss after 5 seconds
        onScreen: true
      }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();

    const newErrors = { ...errors };
    Object.keys(form).forEach(key => {
      if (form[key].trim() === '') {
        newErrors[key] = 'This field is required.';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    console.log(form);
    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);

          //successNotificationHandle()

          alert("Thanks for your email.")
          setForm(INITIAL_STATE);
        },
        error => {
          setLoading(false);

          //failedNotificationHandle(error)

          alert(error);
        }
      ).catch((reason) => {
        console.log(reason);
        alert(reason)
      })
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map(input => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === 'message' ? 'textarea' : 'input';

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === 'email' ? 'email' : 'text'}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === 'message' && { rows: 7 })}
                />
                {errors[input] && <span className="text-red-500">{errors[input]}</span>}
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
