import { Link } from "react-router-dom";

export default function Login() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <h1 className="text-3xl font-bold text-white">Login</h1>
        <form className="flex flex-col gap-4 mt-6">
          <input type="email" placeholder="Email" className="p-2 rounded" />
          <input type="password" placeholder="Password" className="p-2 rounded" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Entrar</button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          ¿No tienes una cuenta?{" "}
          <Link to="/" className="text-[#0d4f4c] font-semibold hover:underline">
            Registrate con nosotros
          </Link>
        </p>
      </div>
    );
  }
  