import "./App.css";
import Header from "./components/Header/Header";
import MySkills from "./components/MySkills/MySkills";
import MyExperience from "./components/MyExperience/MyExperience";
import AboutMe from "./components/AboutMe/AboutMe";
import MyProject from "./components/MyProjects/MyProject";
import MyTestimony from "./components/MyTestimony/MyTestimony";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <section>
      <Header />
      <MySkills />
      <MyExperience/>
      <AboutMe/>
      <MyProject/>
      <MyTestimony/>
      <Contact/>
      <Footer/>
    </section>
  );
}

export default App;
