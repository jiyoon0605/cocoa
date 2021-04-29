import { BrowserRouter as Router, Route } from "react-router-dom";
import { Chat } from "./component/chat";
import { Join } from "./component/join";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
