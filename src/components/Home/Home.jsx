import Header from "../Layout/Header/Header";
import Hero from "./Hero";
import Projects from "../Projects/Projects";
import Career from "../Career/Career";
import Contact from "../Contact/Contact";
import Section from "../Section/Section";

const Home = () => {

    return (
        <div className="">
            <Section id="home">
                <Header />
                <Hero />
            </Section>

            <Projects id="projects" />
            <Career id="career" />
            <Contact id="contact" />
        </div>
    )
};

export default Home;
