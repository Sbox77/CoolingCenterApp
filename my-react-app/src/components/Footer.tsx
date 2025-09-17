type FooterProps = { year?: number};
export default function Footer({ year = new Date().getFullYear() } : FooterProps) {
    return (
        <footer style={{padding: '1rem', borderTop: '1px solid #eee', marginTop: '2rem', fontSize: '0.9rem'}}>
            <p style={{margin: 0}}>© {year} Cooling Center Finder </p>
        </footer>
    );
}