import Link from "next/link"

export const LinkedButton = (
    {
        href, 
        children
    } : 
    {
        href: string, 
        children: React.ReactNode
    }
) => {
    return <Link
    href = {href}
    >
        {children}
    </Link>
}