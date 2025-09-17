

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import CenterCard from './components/CenterCard';
const mockCenters = [
{
  name: 'Downtown Community Center',
  address: '123 Main St, Springfield',
  hours: 'Mon-Fri 9am-7pm',
  accessible: true
},
{
  name: 'Eastside Library',
  address: '45 Elm Ave, Springfield',
  hours: 'Daily 10am-6pm',
  accessible: false
}

];

export default function App() {


  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '1rem' }}>
      <Header title="Cooling Center Finder MVP" />

      <p>These are mock centers using reusable components & props.</p>

      {mockCenters.map((c) => (
        <CenterCard
          key={c.name}
          name={c.name}
          address={c.address}
          hours={c.hours}
          accessible={c.accessible}
        />
      ))}

      <Footer />
    </div>
  )
}


