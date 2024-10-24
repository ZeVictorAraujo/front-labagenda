import { tv } from 'tailwind-variants';

export default function Button({ children, size = 'normal', color = 'primary' }) {

    const button = tv({
        base: 'font-medium bg-blue-700 text-white rounded active:opacity-80',
        variants: {
          color: {
            primary: 'bg-blue-700 text-white hover:bg-blue-800 duration-100',
            edit: 'bg-yellow-500 text-white hover:bg-yellow-600 duration-100',
            delete: 'bg-red-500 text-white hover:bg-red-600 duration-100'
          },
          size: {
            normal: 'px-3 py-2',
            lg: 'px-4 py-3 text-lg'
          }
        },
        defaultVariants: {
          size: 'normal',
          color: 'primary'
        }
      });
      // <Button size="normal" color="primary" type="text">Click Me</button> <- Forma de chamar o Button
    return (
        <button className={button({ size, color })}>
            {children}
        </button>
    );
}