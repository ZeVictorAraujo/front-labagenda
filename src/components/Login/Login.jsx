import Card from "../Card/Card";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Login() {
    return (
            <Card size="normal" color="secondary" width="sm">
                <div className="flex flex-col itens-center justify-center gap-4">
                    {/* Div da Logo */}
                    <div className="flex itens-center justify-center">
                        <div className="flex itens-center justify-center w-3/4">
                            <Logo type="secondary"/>
                        </div>
                    </div>
                    {/* Formulario de Login */}
                    <form action="POST" className="flex flex-col itens-center justify-center gap-4">
                        <Input size="normal" type="text" ph="RA" id="ra" name="ra"/>
                        <Input size="normal" type="text" ph="Senha" id="senha" name="senha"/>
                        <Button size="normal" color="primary" type="text">Entrar</Button>
                    </form>
                </div>
            </Card>
    );
}