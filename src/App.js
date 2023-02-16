import React from "react";
import AddBookForm from "./components/AddBookForm";
import Title from "./Title";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Title />
      <AddBookForm />
      <Footer />
    </div>
  );
};
export default App;
