import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group',
    {
        variants: {
            variant: {
                default: 'bg-primary text-white hover:bg-primary-dark',
                outline: 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white', // Modificação aqui
                secondary: 'bg-secondary text-white hover:bg-secondary-dark',
                ghost: 'bg-transparent hover:bg-primary/10 text-primary',
                link: 'bg-transparent underline-offset-4 hover:underline text-primary',
            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-3',
                lg: 'h-11 px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

// Efeito de ripple no hover
const ButtonRippleEffect = () => (
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-white opacity-10 transition-all duration-500 ease-out group-hover:w-[300%] group-hover:h-[300%]"></span>
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    showRipple?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, showRipple = true, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {showRipple && <ButtonRippleEffect />}
                <span className="relative z-10">{props.children}</span>
            </button>
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };