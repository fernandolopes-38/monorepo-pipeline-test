import { HTMLAttributes, ReactNode } from "react"

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>{
    children: ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({children, ...props}) => {
    return (
        <p {...props}>{children}</p>
    )
}