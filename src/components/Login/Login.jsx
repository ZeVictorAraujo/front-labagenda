import Card from "../Card/Card";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Login() {
    return (
            <Card size="normal" color="secondary" width="sm">
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
                            <Input size="normal" type="text" ph="RA" id="ra" name="ra"/>
                            <Input size="normal" type="text" ph="Senha" id="senha" name="senha"/>
                        </div>
                        <div className="flex flex-col itens-center justify-center py-2 px-16">
                            <Button size="lg" color="primary" type="text">Entrar</Button>
                        </div>
                    </form>
                </div>
            </Card>
    );
}