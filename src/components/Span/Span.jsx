import { tv } from 'tailwind-variants';

export default function Span({ children, size = 'normal' }) {

    const span = tv({
        base: 'font-medium bg-gray-100 text-black rounded-md',
        variants: {
          size: {
            normal: 'px-6 py-3',
            lg: 'px-8 py-4'
          }
        },
        defaultVariants: {
          size: 'normal',
        }
      });
      // <Span size="normal">Text</Span> <- Forma de chamar o Span
    return (
        <span className={span({ size })}>
            {children}
        </span>
    );
}