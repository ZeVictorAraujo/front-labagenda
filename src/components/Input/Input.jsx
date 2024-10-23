import { tv } from 'tailwind-variants';

export default function Input({ size = 'normal', type = 'text', ph = 'Digite seu Nome' }) {

    const input = tv({
        base: 'bg-gray-50 border border-gray-300 rounded',
        variants: {
          size: {
            normal: 'px-5 py-2',
            lg: 'px-6 py-3'
          }
        },
        defaultVariants: {
          size: 'normal',
        }
      });
      // <Input size="normal" type="text" ph="Placeholder" /> <- Forma de chamar o input
    return (
        <input 
        type={type}
        placeholder={ph}
        className={input({ size })}
        />
    );
}