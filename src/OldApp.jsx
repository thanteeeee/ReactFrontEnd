import Hello from './assets/Hello.jsx'
import Contact from './assets/Contact'
import Counter from './assets/Counter'

function App() {
  const helloData = [
    {name: 'Than', message: 'Hi there'},
    {name: 'Tom', message: 'Hello' }
  ];
  
  return(
    <div>
      <Counter/>
      {helloData.map((data,index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="dandt270948@gmail.com" phone ="084619****"/>
    </div>
  );
}

export default App
