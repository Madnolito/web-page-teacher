import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import { TransitionProvider } from "../context/TransitionContext";
import TransitionComponent from "../components/VisualEffects/PageTransition";

export default function Router() {
  return (
    <TransitionProvider>
        <Routes>
        <Route
            index
            element={
            <TransitionComponent>
                <Home />
            </TransitionComponent>
            }
        />
        <Route
            path="/Home"
            element={
            <TransitionComponent>
                <Home />
            </TransitionComponent>
            }
        />
        <Route
            path="/AboutMe"
            element={
            <TransitionComponent>
                <AboutMe />
            </TransitionComponent>
            }
        />
        <Route
            path="/Contact"
            element={
            <TransitionComponent>
                <Contact />
            </TransitionComponent>
            }
        />
        </Routes>
    </TransitionProvider>
  );
}
