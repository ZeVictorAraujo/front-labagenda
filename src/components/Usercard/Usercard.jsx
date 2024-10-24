import { tv } from 'tailwind-variants';
import Card from '../Card/Card';
import { IoMdCloseCircle } from "react-icons/io";

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
                    src=""
                    alt="foto de Perfil"
                />
                <div className='text-center'>
                        <div className={role()}>Cargo</div>
                        <div className={name()}>Nome de Perfil</div>
                </div>
                <div>
                    <button className='hover:text-red-600 duration-100'>
                        <IoMdCloseCircle size={20}/>
                    </button>
                    <button>

                    </button>
                </div>
            </div>
        </Card>
    );
}