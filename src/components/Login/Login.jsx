import { useState } from "react";
import Card from "../Card/Card";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Login() {
    const [rn, setRn] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    // Início do uso da API de autenticação
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ rn, senha }),
            });

            if (response.ok) {
                const data = await response.json();
                // Armazene o token de autenticação (se houver)
                localStorage.setItem("token", data.token);
                // Redirecione ou atualize a interface conforme necessário
            } else {
                setError("Usuário ou senha incorretos");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            setError("Erro no servidor. Tente novamente mais tarde.");
        }
    };

    return (
            <Card size="normal" color="secondary" width="sm" height="md">
                <div className="flex flex-col justify-center gap-12">
                    {/* Logo do Senai e Sistema */}
                    <div className="flex flex-col items-center justify-center gap-12">
                        <div className="flex itens-center justify-center w-3/4">
                            <Logo type="senai"/>
                        </div>
                        <div className="flex items-center justify-center w-3/4">
                            <Logo type="secondary"/>
                        </div>
                    </div>
                    {/* Formulario de Login */}
                    <form action="POST" className="flex flex-col itens-center justify-center">
                        <div className="flex flex-col itens-center justify-center py-2 px-16 gap-4">
                            <Input 
                                size="normal" 
                                type="text" 
                                ph="RA" 
                                id="ra" 
                                name="rn"
                                value={rn}
                                onChange={(e) => setRn(e.target.value)}
                            />
                            <Input 
                                size="normal" 
                                type="password" 
                                ph="Senha" 
                                id="senha" 
                                name="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col itens-center justify-center py-2 px-16">
                            <Button size="lg" color="primary" type="submit">Entrar</Button>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                    </form>
                </div>
            </Card>
    );
}