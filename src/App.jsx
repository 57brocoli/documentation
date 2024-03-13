import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Navigation from "./Composant/Navigation/Navigation"
import PageError from "./Composant/Page/PageError/PageError"
import Home from "./Composant/Page/Home/Home"
import NSPresentation from "./Composant/Page/NationSound/NSPresentation"
import './Assets/Styles/styles.css'
import IndexDescktop from "./Composant/Page/NationSound/Descktop/Index"
import PresentationDescktop from "./Composant/Page/NationSound/Descktop/Presentation/Presentation"
import UseState from "./Composant/Page/NationSound/Descktop/Code/UseState"
import Maquettes from "./Composant/Page/NationSound/Descktop/Maquettes/Maquettes"
import UseEffect from "./Composant/Page/NationSound/Descktop/Code/UseEffect"
import Logique from "./Composant/Page/NationSound/Descktop/Logique/Logique"
import Initialisation from "./Composant/Page/NationSound/Descktop/Initialisation/Initialisation"
import Technologies from "./Composant/Page/NationSound/Descktop/Technologies/Technologies"
import UseLoader from "./Composant/Page/NationSound/Descktop/Code/UseLoader"
import UserNavigation from "./Composant/Page/NationSound/Descktop/Code/UserNavigation"
import UseParams from "./Composant/Page/NationSound/Descktop/Code/UseParams"
import VarFonc from "./Composant/Page/NationSound/Descktop/Code/VarFonc"
import UseRouteError from "./Composant/Page/NationSound/Descktop/Code/UseRouteError"
import Ternaire from "./Composant/Page/NationSound/Descktop/Code/Ternaire"
import Données from "./Composant/Page/NationSound/Descktop/Code/Données"
import Deploiement from "./Composant/Page/NationSound/Descktop/Deploiement/Deploiement"
import IndexPhone from "./Composant/Page/NationSound/Phone/Index"
import PresentationPhone from "./Composant/Page/NationSound/Phone/Presentation/Presentation"
import MaquettesPhone from "./Composant/Page/NationSound/Phone/Maquettes/Maquettes"
import TechnologiePhone from "./Composant/Page/NationSound/Phone/Technologies/Technologies.jsx"
import InitialisationPhone from "./Composant/Page/NationSound/Phone/Initialisation/Initialisation.jsx"
import LogiquePhone from "./Composant/Page/NationSound/Phone/Logique/Logique.jsx"
import UseStatePhone from "./Composant/Page/NationSound/Phone/Code/UseState.jsx"
import UseEffectPhone from "./Composant/Page/NationSound/Phone/Code/UseEffect.jsx"
import UseRefPhone from "./Composant/Page/NationSound/Phone/Code/UseRef.jsx"
import VarFoncPhone from "./Composant/Page/NationSound/Phone/Code/VarFonc.jsx"
import TernairePhone from "./Composant/Page/NationSound/Phone/Code/Ternaire.jsx"
import DonneesPhone from "./Composant/Page/NationSound/Phone/Code/Donnees.jsx"
import DeploiementPhone from "./Composant/Page/NationSound/Phone/Deploiement/Deploiement.jsx"
import IndexLE from "./Composant/Page/LiveEvent/Index.jsx"
import PresentationLE from "./Composant/Page/LiveEvent/Presentation/Presentation.jsx"
import MaquettesLE from "./Composant/Page/LiveEvent/Maquettes/Maquettes.jsx"
import TechnologiesLE from "./Composant/Page/LiveEvent/Technologies/Technologies.jsx"
import InitialisationLE from "./Composant/Page/LiveEvent/Initialisation/Initialisation.jsx"
import LogiqueLe from "./Composant/Page/LiveEvent/Logique/Logique.jsx"
import Controllers from "./Composant/Page/LiveEvent/Controllers/Controllers.jsx"
import Entitys from "./Composant/Page/LiveEvent/Model/Entitys/Entitys.jsx"
import DataBase from "./Composant/Page/LiveEvent/Model/DataBase/DataBase.jsx"
import Repository from "./Composant/Page/LiveEvent/Model/Repository/Repository.jsx"
import Form from "./Composant/Page/LiveEvent/Model/Form/Form.jsx"
import Templates from "./Composant/Page/LiveEvent/Vue/Templates.jsx"

const router = createBrowserRouter([
    {
        path:'/',
        element: <Navigation/>,
        errorElement: <PageError/>,
        children: [
            {
                path : '',
                element: <Home/>
            },
            {
                path : '/nationsound',
                element: <NSPresentation/>
            },
            {
                path : '/nationsound/desktop',
                element: <IndexDescktop/>,
                children : [
                    {
                        path : '/nationsound/desktop',
                        element: <PresentationDescktop/>
                    },
                    {
                        path : '/nationsound/desktop/initialisation',
                        element: <Initialisation/>
                    },
                    {
                        path : '/nationsound/desktop/technologies',
                        element: <Technologies/>
                    },
                    {
                        path : '/nationsound/desktop/logique',
                        element: <Logique/>
                    },
                    {
                        path : '/nationsound/desktop/maquettes',
                        element: <Maquettes/>
                    },
                    {
                        path : '/nationsound/desktop/usestate',
                        element: <UseState/>
                    },
                    {
                        path : '/nationsound/desktop/useeffect',
                        element: <UseEffect/>
                    },
                    {
                        path : '/nationsound/desktop/useLoaderData',
                        element: <UseLoader/>
                    },
                    {
                        path : '/nationsound/desktop/useNavigation',
                        element: <UserNavigation/>
                    },
                    {
                        path : '/nationsound/desktop/useParams',
                        element: <UseParams/>
                    },
                    {
                        path : '/nationsound/desktop/useRouteError',
                        element: <UseRouteError/>
                    },
                    {
                        path : '/nationsound/desktop/varfonc',
                        element: <VarFonc/>
                    },
                    {
                        path : '/nationsound/desktop/ternaire',
                        element: <Ternaire/>
                    },
                    {
                        path : '/nationsound/desktop/traitementdonnees',
                        element: <Données/>
                    },
                    {
                        path : '/nationsound/desktop/deploiement',
                        element: <Deploiement/>
                    }
                ]
            },
            {
                path : '/nationsound/phone',
                element: <IndexPhone/>,
                children : [
                    {
                        path : '/nationsound/phone',
                        element: <PresentationPhone/>
                    },
                    {
                        path : '/nationsound/phone/maquettes',
                        element: <MaquettesPhone/>
                    },
                    {
                        path : '/nationsound/phone/technologies',
                        element: <TechnologiePhone/>
                    },
                    {
                        path : '/nationsound/phone/initialisation',
                        element: <InitialisationPhone/>
                    },
                    {
                        path : '/nationsound/phone/logique',
                        element: <LogiquePhone/>
                    },
                    {
                        path : '/nationsound/phone/useState',
                        element: <UseStatePhone/>
                    },
                    {
                        path : '/nationsound/phone/useEffect',
                        element: <UseEffectPhone/>
                    },
                    {
                        path : '/nationsound/phone/useRef',
                        element: <UseRefPhone/>
                    },
                    {
                        path : '/nationsound/phone/varFonc',
                        element: <VarFoncPhone/>
                    },
                    {
                        path : '/nationsound/phone/ternaire',
                        element: <TernairePhone/>
                    },
                    {
                        path : '/nationsound/phone/traitementdonnees',
                        element: <DonneesPhone/>
                    },
                    {
                        path : '/nationsound/phone/deploiement',
                        element: <DeploiementPhone/>
                    }
                ]
            },
            {
                path : '/liveevent',
                element: <IndexLE/>,
                children: [
                    {
                        path:'/liveevent',
                        element: <PresentationLE/>
                    },
                    {
                        path:'/liveevent/maquettes',
                        element: <MaquettesLE/>
                    },
                    {
                        path:'/liveevent/technologies',
                        element: <TechnologiesLE/>
                    },
                    {
                        path:'/liveevent/initialisation',
                        element: <InitialisationLE/>
                    },
                    {
                        path:'/liveevent/logique',
                        element: <LogiqueLe/>
                    },
                    {
                        path:'/liveevent/controller',
                        element: <Controllers/>
                    },
                    {
                        path:'/liveevent/basedonnees',
                        element: <DataBase/>
                    },
                    {
                        path:'/liveevent/entitys',
                        element: <Entitys/>
                    },
                    {
                        path:'/liveevent/repository',
                        element: <Repository/>
                    },
                    {
                        path:'/liveevent/form',
                        element: <Form/>
                    },
                    {
                        path:'/liveevent/templates',
                        element: <Templates/>
                    }
                ]
            },
        ]
    }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
