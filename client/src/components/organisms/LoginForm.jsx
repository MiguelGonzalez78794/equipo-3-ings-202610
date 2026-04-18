import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.service";
import Button from "../atoms/Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-95 p-8 rounded-xl border border-gray-200 bg-white">
    <h2 className="m-0 text-[1.4rem] font-medium text-[#111]">Iniciar Sesión</h2>

    {error && (
      <p className="text-[#c0392b] text-[13px] m-0 px-2.5 py-2 bg-[#fdecea] rounded-md">
        {error}
      </p>
    )}

    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-[#555]">Correo</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-3 py-2.5 rounded-lg border border-gray-300 text-[15px] outline-none"
        placeholder="correo@upb.edu.co"
        required
      />
    </div>

    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-[#555]">Contraseña</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-3 py-2.5 rounded-lg border border-gray-300 text-[15px] outline-none"
        placeholder="••••••••"
        required
      />
    </div>

    <Button type="submit" text={loading ? "Ingresando..." : "Entrar"} disabled={loading} />

    <p className="text-[13px] text-center text-[#888] m-0">
      ¿No tienes cuenta?{" "}
      <span
        onClick={() => navigate("/register")}
        className="text-[#111] font-medium cursor-pointer underline"
      >
        Regístrate
      </span>
    </p>
  </form>
  );
}

