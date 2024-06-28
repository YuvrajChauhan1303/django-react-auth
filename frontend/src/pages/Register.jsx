import Form from "../components/Form";

function Register() {
  return (
    <div className="flex justify-center items-center h-[100vh] w-full ">
      <Form route="/api/user/register/x" method="register" />
    </div>
  );
}

export default Register;
