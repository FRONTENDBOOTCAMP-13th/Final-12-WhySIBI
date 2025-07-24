import RegisterForm from '@/components/register_form/register_form';

export default function RegisterPage() {
  return (
    <>
      <h3 className="font-logo text-5xl text-button-color pt-24 text-center">
        REGISTER
      </h3>
      <div className="border-2 mt-8 m-auto w-[46.25rem] rounded-4xl border-button-color-opaque-25 px-20 py-24">
        <RegisterForm />
      </div>
    </>
  );
}
