import { tv } from 'tailwind-variants';
import Card from '../Card/Card';

export default function Usercard() {
    const card = tv({
        slots: {
            avatar:'w-16 rounded-full',
            name: 'text-sm',
            role: 'text-sm'
        }
    });
       
    const { avatar, name, role } = card();
       
    return (
        <Card size="normal" color="secondary" width="sm">
            <div className='flex flex-row justify-between'>
                <img
                    className={avatar()}
                    src="/intro-avatar.png"
                    alt="foto de Perfil"
                />
                <div className='text-center'>
                        <div className={role()}>Cargo</div>
                        <div className={name()}>Nome de Perfil</div>
                </div>
                <div>

                </div>
            </div>
        </Card>
    );
}