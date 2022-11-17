import Input from "./Input";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log(username, password);
  };

  return (
    <form
      className="flex flex-col gap-y-4 border rounded-xl p-8"
      onSubmit={handleSubmit}
    >
      <Input label="username" />
      <Input label="password" />

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 rounded text-white"
      >
        Submit
      </button>
    </form>
  );
}
