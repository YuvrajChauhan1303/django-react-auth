import Form from "../components/Form";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <Form route="api/token/" method="login" />
      </div>
    </div>
  );
}

export default Login;
