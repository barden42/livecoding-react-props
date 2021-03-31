import CardUser from "./components/CardUser/CardUser";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const homer = {c
    firstName: "Homer",
    lastName: "Simpsons",
    email: "homer@gmail.com",
    imgUrl:
      "https://img.20mn.fr/MB0FPhiQS5i8gBmTUKVRJg/648x360_rip-bart-temporairement.jpg",
    phone: "0700000000",
  };

  return (
    <div>
      <Header logo="/logo192.png" title="Live coding" />
      <div className="cards">
        <CardUser
          firstName="Bart"
          lastName="Simpsons"
          imgUrl="https://img.20mn.fr/MB0FPhiQS5i8gBmTUKVRJg/648x360_rip-bart-temporairement.jpg"
          phone="0600000000"
          email="bart@gmail.com"
        />

        <CardUser {...homer} />
      </div>
    </div>
  );
}

export default App;
