function CardComponent(props){
    return(
        <li>
            <img src={props.image} alt=""/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div>This is test</div>
        </li>
    )
}
export {CardComponent}