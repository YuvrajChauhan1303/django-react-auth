import Form from "../components/Form";

function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh] w-full ">
      <Form route="api/token/" method="login" />
    </div>
  );
}

export default Login;
