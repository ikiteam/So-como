import Home from "./pages/Home/Home";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import LegalMention from "./pages/Legalmention/Legalmention";
import ConditionGeneral from "./pages/ConditionGeneralVente/CGV";
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
            <Home />
                </Route>
            <Route path="/mention-legal">
                <LegalMention />
            </Route>
                <Route path="/condition-general-vente">
                    <ConditionGeneral />
                </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
