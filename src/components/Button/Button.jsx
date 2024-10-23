import { tv } from 'tailwind-variants';

export default function Button({ children, size = 'normal', color = 'primary' }) {

    const button = tv({
        base: 'font-medium bg-blue-600 text-white rounded-md active:opacity-80',
        variants: {
          color: {
            primary: 'bg-blue-600 text-white',
            edit: 'bg-yellow-500 text-white',
            delete: 'bg-red-500 text-white'
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

    return (
        <button className={button({ size: 'normal', color: 'primary' })}>
            {children}
        </button>
    );
}