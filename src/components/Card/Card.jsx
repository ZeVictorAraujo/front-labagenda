import { tv } from 'tailwind-variants';

export default function Card({ children, size = 'normal', color= 'primary' }) {

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
            login: 'bg-neutral-50',
            text: 'bg-gray-400',
            pop: 'bg-sky-600 opacity-80'
          }
        },
        defaultVariants: {
          size: 'normal',
          color: 'primary'
        }
      });
      // <Card size="normal" color="primary"></Card> <- Forma de chamar o Span
    return (
        <card className={card({ size, color })}>
            {children}
        </card>
    );
}