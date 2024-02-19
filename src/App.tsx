// App.tsx

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Leaders from "./pages/Leaders";
import Employee from "./pages/Employee";
import EmployeeProfile from "./pages/EmployeeProfile";
import SignIn from "./pages/SignIn";
import "./index.css";
import Layout from "./components/global/Layout";
import Payments from "./pages/Payments";
import Expenses from "./pages/Expenses";
import CreateInvoice from "./pages/CreateInvoice";
import Invoices from "./pages/Invoices";

const App: React.FC = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse}
            >
              <Dashboard menuCollapse={menuCollapse} />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse}
            >
              <Projects menuCollapse={menuCollapse}/>
            </Layout>
          }
        />
        <Route
          path="/tasks"
          element={
            <Layout
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse}
            >
              <Tasks menuCollapse={menuCollapse}/>
            </Layout>
          }
        />
        <Route
          path="/leaders"
          element={
            <Layout
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse}
            >
              <Leaders menuCollapse={menuCollapse}/>
            </Layout>
          }
        />
        <Route
          path="/employees"
          element={
            <Layout
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse}
            >
              <Employee menuCollapse={menuCollapse}/>
            </Layout>
          }
        />
        <Route
          path="/employee-profile"
          element={
            <Layout
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse}
            >
              <EmployeeProfile menuCollapse={menuCollapse}/>
            </Layout>
          }
        />
        <Route
          path="/payments"
          element={
            <Layout
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse}
            >
              <Payments menuCollapse={menuCollapse}/>
            </Layout>
          }
        />
        <Route
          path="/expenses"
          element={
            <Layout
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse}
            >
              <Expenses menuCollapse={menuCollapse}/>
            </Layout>
          }
        />
        <Route
          path="/create-invoice"
          element={
            <Layout
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse}
            >
              <CreateInvoice menuCollapse={menuCollapse}/>
            </Layout>
          }
        />
        <Route
          path="/invoices"
          element={
            <Layout
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse}
            >
              <Invoices menuCollapse={menuCollapse}/>
            </Layout>
          }
        />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
