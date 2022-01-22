import './Home.css'

const HomeView = (props) => {

    //Utilizando o props info que recebemos na inicialização do componente
    return (
        <>
            <div>Count {props.info}</div>            
        </>
    )
}

export default HomeView;