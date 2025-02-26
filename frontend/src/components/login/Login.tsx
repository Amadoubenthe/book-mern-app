export default function Login() {
  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center">
        <div className="w-[300px] shadow p-4">
          <h1 className="text-2xl font-semibold">Login</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button className="btn-primary w-full">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
