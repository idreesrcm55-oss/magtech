import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Specialties from "./pages/Specialties";
import AudiencePage from "./pages/AudiencePage";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import ScheduleDemo from "./pages/ScheduleDemo";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="specialties" element={<Specialties />} />
        <Route path="for-you/:slug" element={<AudiencePage />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="schedule-a-demo" element={<ScheduleDemo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
