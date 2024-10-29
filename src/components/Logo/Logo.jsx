import { tv } from 'tailwind-variants';

const logoVariants = tv({
    variants: {
        type: {
            primary: "Logo.svg",
            secondary: "Logo-Black.svg",
            senai: "Logo-Senai.svg",
        },
    },
    defaultVariants: {
        type: "primary",
    },
});

export default function Logo({ type = "primary" }) {
    return (
        <img src={logoVariants({ type })} alt="Logo" />
    );
}