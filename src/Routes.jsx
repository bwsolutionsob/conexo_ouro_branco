import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AdminDashboard from './pages/admin-dashboard';
import AboutEditorialStandards from './pages/about-editorial-standards';
import OuroBrancoLocalNews from './pages/ouro-branco-local-news';
import StoryDetailPages from './pages/story-detail-pages';
import TechnologyInsightsPortal from './pages/technology-insights-portal';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutEditorialStandards />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/about-editorial-standards" element={<AboutEditorialStandards />} />
        <Route path="/ouro-branco-local-news" element={<OuroBrancoLocalNews />} />
        <Route path="/story-detail-pages" element={<StoryDetailPages />} />
        <Route path="/technology-insights-portal" element={<TechnologyInsightsPortal />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
