import './App.css';
// import 'devicon';
import flutterImg from './shared/images/flutter.png';
import HeaderContent from './components/HeaderContent/HeaderContent';
import Project from './components/Project/Project';

function App() {
  return (
    <div>
      <HeaderContent />
      <Project
        imageFirst={false}
        imgsrc={flutterImg}
        title="Flutter ChatApp"
        description="A flutter application using Firebase for college confession."
        techList={['Dart', 'Firebase']}
      />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
