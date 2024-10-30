import { tv } from 'tailwind-variants';

export default function Card({ children, size = 'normal', color= 'primary', width= 'auto', height= 'auto' }) {

    const card = tv({
        base: 'font-medium bg-sky-600 text-black rounded-md',
        variants: {
          size: {
            normal: 'px-4 py-4',
            md: 'px-6 py-6',
            lg: 'px-8 py-8'
          },
          color: {
            primary: 'bg-sky-600',
            secondary: 'bg-white',
            text: 'bg-gray-400',
            pop: 'bg-sky-600 opacity-80'
          },
          width: {
            auto: 'w-auto',
            full: 'w-full',
            sm: 'w-1/4',
            md: 'w-1/2',
            lg: 'w-3/4',
          },
          height: {
            auto: 'h-auto',
            full: 'h-full',
            sm: 'h-1/4',
            md: 'h-1/2',
            lg: 'h-3/4',
          }
        },
        defaultVariants: {
          size: 'normal',
          color: 'primary',
          width: 'auto'
        }
      });
      // <Card size="normal" color="primary" width="auto" height="auto"></Card> <- Forma de chamar o Card
    return (
        <div className={card({ size, color, width, height })}>
            {children}
        </div>
    );
}