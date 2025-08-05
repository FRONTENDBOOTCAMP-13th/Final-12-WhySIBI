import RegisterForm from '@/components/register_form/register_form';

export default function RegisterPage() {
  return (
    <>
      <h3 className="font-logo text-3xl md:text-4xl lg:text-5xl text-button-color pt-12 md:pt-16 lg:pt-24 text-center px-4">
        REGISTER
      </h3>
      <div className="border-2 mt-6 md:mt-8 mx-4 md:mx-auto max-w-[46.25rem] rounded-2xl md:rounded-4xl border-button-color-opaque-25 px-6 py-12 md:px-12 lg:px-20 md:py-16 lg:py-24">
        <RegisterForm />
      </div>
    </>
  );
}
