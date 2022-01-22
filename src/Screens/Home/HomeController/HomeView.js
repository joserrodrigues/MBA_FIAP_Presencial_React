import './Home.css'

const HomeView = ({ info }) => {

    //Utilizando o props info que recebemos na inicialização do componente
    return (
        <div className='container'>
            <div className='info'>Count {info}</div>            
        </div>
    )
}

export default HomeView;