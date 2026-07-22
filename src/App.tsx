// import components from component library
import {
  Button,
  Label,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
  Dropdown,
  RadioButton,
  Img,
  HeroImage,
  Card,
} from './components';

import './App.css';

// main app page
function App() {
  return (
    <div className="app">
      <h1>Assignment 13: UI Component Library Build Checks</h1>

      <p>
        This page shows the React component library with Prettier, ESLint, tests, Husky, GitHub
        Actions, and Docker.
      </p>

      <section className="component-section">
        <h2>Basic Components</h2>

        <Button label="Default Button" backgroundColor="#000" />

        <Button label="Disabled Button" disabled />

        <Label text="Default Label" backgroundColor="#28a745" />

        <Label text="Disabled Label" disabled />

        <Text text="This is a normal text component." backgroundColor="#f8f9fa" />

        <Text text="This text component is disabled." disabled />
      </section>

      <section className="component-section">
        <h2>Form Components</h2>

        <Dropdown optionOne="Option One" optionTwo="Option Two" />

        <Dropdown optionOne="Disabled Option" optionTwo="Option Two" disabled />

        <RadioButton label="Default Radio Button" />

        <RadioButton label="Disabled Radio Button" disabled />
      </section>

      <section className="component-section">
        <h2>Image Components</h2>

        <Img alt="Sample image" />

        <Img alt="Disabled image" disabled />

        <HeroImage title="Hero Image" subtitle="This is the hero image component." />

        <HeroImage title="Disabled Hero Image" subtitle="This hero image is disabled." disabled />
      </section>

      <section className="component-section">
        <h2>Card Component</h2>

        <Card title="Default Card" content="This is a reusable card component." />

        <Card title="Disabled Card" content="This card is disabled." disabled />
      </section>

      <section className="component-section">
        <h2>Table Components</h2>

        <Table caption="Main Table" />

        <TableHeader text="Table Header" />

        <TableRow text="Table Row" />

        <TableCell text="Table Cell" />

        <TableFooter text="Table Footer" />
      </section>
    </div>
  );
}

export default App;
