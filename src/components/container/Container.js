import './Container.scss'; // Importa el archivo Container.scss
import { Container as Content } from 'semantic-ui-react'; // Importa Container de Semantic UI React con alias

export default function Container({ children }) { // Corregido 'clildren' a 'children'
    return (
        <div className='container-bg'>
            <Content>{children}</Content> {/* Utiliza el componente Container de Semantic UI React */}
        </div>
    );
}
