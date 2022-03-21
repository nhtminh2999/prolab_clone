import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const SubscribeSection = () => {
  return (
    <div className="relative pt-[90px] px-0 pb-[100px] bg-map bg-cover bg-center bg-no-repeat">
      <div className="container">
        <div className="mx-[-15px]">
          <div className="px-[15px]">
            <div className="text-center mb-[56px]">
              <h2 className="mb-[24px] text-[25px] leading-[35px] font-bold capitalize text-[#242424] lg:text-[40px] lg:leading-[50px]">
                Subscribe To Get Updates
              </h2>
              <p className="max-w-[650px] text-[16px] leading-[26px] text-[#555] mx-auto">
                Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
              </p>
            </div>
          </div>
        </div>
        <div className='flex mx-[-15px] justify-center'>
          <div className='px-[15px] w-full max-w-full lg:max-w-[83.333333%] xl:max-w-[66.666667%]'>
            <Formik
              initialValues={{ email: '' }}
              validationSchema={
                Yup.object({
                  email: Yup.string().email('Invalid email address').required('Required'),
                })
              }
              onSubmit={values => {
                // TO DO
              }}
            >
              {props => (
                <Form onSubmit={props.handleSubmit} className='w-full'>
                  <div className='relative'>
                    <Field
                      type='text' name='email' placeholder='Your email address'
                      className="w-full h-[60px] rounded-full border-[1px] border-solid border-[#d43f8d1a]
                      px-[30px] text-[#242424] shadow-sm bg-white outline-none"
                    />
                    <button
                      type='submit'
                      className="absolute w-auto top-[5px] right-[5px] h-[50px] rounded-[50px] border-0 
                        text-base text-white px-[25px] bg-main hover:bg-sub"
                    >
                      <span>Subcribe </span>
                      <i className='far fa-paper-plane'></i>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SubscribeSection