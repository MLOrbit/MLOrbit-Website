// mlorbit_frontend/src/App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// ────────── Mock your own components so App renders without pulling in heavy child code ──────────
// Any component that App imports should be stubbed. We simply return a minimal <div> placeholder.

// Navbar & Footer
jest.mock("./components/Navbar", () => () => <div>Navbar</div>);
jest.mock("./components/Footer", () => () => <div>Footer</div>);

// Any fancy visual components—just stub them:
jest.mock("./components/GlitchText", () => () => <div>GlitchText</div>);
jest.mock("./components/CircularGallery", () => () => <div>CircularGallery</div>);

// Sections
jest.mock("./components/WelcomeSection", () => () => <div>WelcomeSection</div>);
jest.mock("./components/FuzzyText", () => () => <div>FuzzyText</div>);
jest.mock("./components/BallPit", () => () => <div>BallPit</div>);
jest.mock("./components/button", () => () => <div>StarBorder</div>);
jest.mock("./components/devops", () => () => <div>TrueFocus</div>);
jest.mock("./components/InfiniteMenu", () => () => <div>InfiniteMenu</div>);
jest.mock("./components/RecommendedSections", () => () => <div>RecommendedSections</div>);

// Pages (public)
jest.mock("./components/AboutSection", () => () => <div>AboutSection</div>);
jest.mock("./login/LoginPage", () => () => <div>LoginPage</div>);
jest.mock("./pages/Algorithms", () => () => <div>AlgorithmsPage</div>);
jest.mock("./pages/DataStructures", () => () => <div>DataStructuresPage</div>);
jest.mock("./pages/MachineLearning", () => () => <div>MachineLearningPage</div>);
jest.mock("./pages/DocsPage", () => ({
  DocsRoutes: () => <div>DocsRoutes</div>,
}));

// ExploreML pages
jest.mock("./ExploreML/ExploreML", () => () => <div>ExploreML</div>);
jest.mock("./ExploreML/AdvancedPDFViewer", () => () => <div>AdvancedPDFViewer</div>);
jest.mock("./schedulePlanner/SchedulePlanner", () => () => <div>SchedulePlanner</div>);

// Protected
jest.mock("./dsaProgress/components/DSAProgress", () => () => <div>DSAProgress</div>);

// User Context PrivateRoute
jest.mock("./components/userDetails/UserContext", () => ({
  UserProvider: ({ children }) => <>{children}</>,
}));
jest.mock("./components/PrivateRoute", () => ({ children }) => <>{children}</>);

test("App renders Navbar and Footer", () => {
  // Just render App directly—App already contains a <BrowserRouter>
  render(<App />);

  // Assert that our stubbed Navbar and Footer appear
  expect(screen.getByText("Navbar")).toBeInTheDocument();
  expect(screen.getByText("Footer")).toBeInTheDocument();
});
