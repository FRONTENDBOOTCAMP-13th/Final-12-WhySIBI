import LoginForm from '@/components/login_form/login.form';

export default function LoginPage() {
  return (
    <>
      <h3 className="font-logo text-5xl text-button-color pt-24 text-center">
        LOGIN
      </h3>
      <div className="border-2 mt-8 m-auto w-[46.25rem] rounded-4xl border-button-color-opaque-25 px-20 py-24">
        <LoginForm />
      </div>
    </>
  );
}
