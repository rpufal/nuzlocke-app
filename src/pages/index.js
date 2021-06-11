import Header from '../components/Header';

export default function Home({toggleTheme}) {
  return (
    <div>
      <Header toggleTheme={toggleTheme}/>
    </div>
  )
}
