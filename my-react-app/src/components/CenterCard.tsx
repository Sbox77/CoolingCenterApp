export type Center = {
  name: string;
  address: string;
  hours: string;
  accessible: boolean;
}

export default function CenterCard ({ name, address, hours, accessible }: Center) {
    return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: '1rem', marginBottom: '1rem' }}>
      <h3 style={{ marginTop: 0 }}>{name}</h3>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Hours:</strong> {hours}</p>
      <p><strong>Accessibility:</strong> {accessible ? 'Wheelchair accessible' : 'Not listed'}</p>
    </div>
    );
}