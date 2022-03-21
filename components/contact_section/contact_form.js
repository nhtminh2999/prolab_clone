import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        mail: '',
        name: '',
        message: '',
      }}
      validationSchema={
        Yup.object({
          mail: Yup.string().email('Invalid email address').required('Required'),
          name: Yup.string().required('Required'),
          message: Yup.string().required('Required'),
        })
      }
      onSubmit={values => {
        // TO DO
      }}
    >
      <Form className='w-full'>
        <Field
          name='name' placeholder='Your Name'
          className="w-full h-[50px] rounded-[3px] border-[1px] border-solid border-[#00000026] 
            px-[20px] text-[#555] bg-white outline-none mb-5 focus:border-[#d43f8d] placeholder:text-black-800 
          "
        />
        <Field
          name='mail' placeholder='Enter your email'
          className="w-full h-[50px] rounded-[3px] border-[1px] border-solid border-[#00000026] 
            px-[20px] text-[#555] bg-white outline-none mb-5 focus:border-[#d43f8d] placeholder:text-black-800 
          "
        />
        <Field
          as='textarea' name='message' placeholder='Write your message here'
          className="w-full h-[50px] rounded-[3px] border-[1px] border-solid border-[#00000026] resize-none min-h-[140px]
            py-[15px] px-[20px] text-[#555] bg-white outline-none mb-4 focus:border-[#d43f8d] placeholder:text-black-800 
          "
        />
        <button className='btn btn-secondary' type='submit'>
          <span className='relative z-[2] uppercase'>send message</span>
        </button>
      </Form>
    </Formik>
  )
}

export default ContactForm