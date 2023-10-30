import MyComponent from "./components/Accueil";
import Actualites from "./components/Actualites";
import Admin from "./components/Admin";
import Article from "./components/Article";
import CommandeInfo from "./components/CommandeInfo";
import Commandehist from "./components/Commandehist";
import Commercial from "./components/Commercial";
import Connexion from "./components/Connexion";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import Modification from "./components/Modification";
import Navigation from "./components/Navigation";
import Newsletter from "./components/Newletter";
import Nouvelleuser from "./components/Nouvelleuser";
import MyProfil from "./components/Profil";
import Savacc from "./components/Savacc";
import Sousnav from "./components/Sousnav";
import TicketInfo from "./components/TicketInfo";
import Tickethist from "./components/Tickethist";
import You from "./components/You";
import YouInfo from "./components/YouInfo";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
  {
      path: '/navigation',
      element: <Navigation />
    },
    {
        path: '/accueil',
        element: <MyComponent />
    },
    {
        path: '/admin',
        element: <Admin />
    },
    {
        path: '/artcile',
        element: <Article />
    },
    {
        path: '/commandehist',
        element: <Commandehist />
    },
    {
        path: '/commandeinfo',
        element: <CommandeInfo />
    },
    {
        path: '/commercial',
        element: <Commercial />
    },
    {
        path: '/connexion',
        element: <Connexion />
    },
    {
        path: '/footer',
        element: <Footer />
    },
    {
        path: '/modification',
        element: <Modification />
    },
    {
        path: '/newletter',
        element: <Newsletter />
    },
    {
        path: '/nouvelleuser',
        element: <Nouvelleuser />
    },
    {
        path: '/profil',
        element: <MyProfil />
    },
    {
        path: '/savacc',
        element: <Savacc />
    },
    {
        path: '/sousnav',
        element: <Sousnav />
    },
    {
        path: '/tickethist',
        element: <Tickethist />
    },
    {
        path: '/ticketinfo',
        element: <TicketInfo />
    },
    {
        path: '/you',
        element: <You />
    },
    {
        path: '/youinfo',
        element: <YouInfo />
    },
    {
        path: '/actualite',
        element: <Actualites />
    },
   

];

export default AppRoutes;
