type HeaderProps = {title: string}
export default function Header({ title } : HeaderProps)
{
    return (
        <header style={{padding: '1rem', borderBottom: '1px solid #eee'}}>
            <h1 style={{margin: 0}}>{title}</h1>
            </header>
    )
}