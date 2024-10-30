import { tv } from 'tailwind-variants';
import Card from '../Card/Card';
import { IoMdCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export default function Usercard() {
    const card = tv({
        slots: {
            avatar:'flex justify-center items-center w-12 h-12 rounded-full bg-gray-300',
            name: 'text-sm',
            role: 'text-sm'
        }
    });
       
    const { avatar, name, role } = card();
       
    return (
        <Card size="normal" color="secondary" width="sm">
            <div className='flex flex-row justify-between'>
                <div className={avatar()}>
                    <FaUser size={24}/>
                </div>
                <div className='flex flex-col justify-between text-center'>
                        <div className={role()}>Cargo</div>
                        <div className={name()}>Nome de Perfil</div>
                </div>
                <div className='flex flex-col justify-between'>
                    <button className='hover:text-red-600 duration-100'>
                        <IoMdCloseCircle size={20}/>
                    </button>
                    <button className='hover:text-yellow-600 duration-100'>
                        <MdEdit size={20}/>
                    </button>
                </div>
            </div>
        </Card>
    );
}