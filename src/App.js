import './App.css';
import Header from './features/header';
import Sidebar from './features/content';
import InnerContent from './features/rightcontent';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="content-section">
        <Sidebar />
        <InnerContent />
      </section>
    </div>
  );
}

export default App;
