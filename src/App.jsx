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
                    }
                ]
            }
        ]
    }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
