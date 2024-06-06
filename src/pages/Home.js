import '../assests/css/App.css';
import HeaderComponent  from '../component/Header/Header';
import CoreConcept from '../component/Card/CoreConcept';
import TabButtonList from '../component/TabButton/TabButtonList';
function Home() {
  return (
    <>
      <HeaderComponent />
      <main>
        <CoreConcept />
        <TabButtonList />
      </main>
    </>
  );
}

export default Home;
