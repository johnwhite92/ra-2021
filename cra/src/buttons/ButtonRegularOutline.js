export const ButtonRegularOutline = props => {
    console.log(props);
    return <button className="btn btn-outline-primary" onClick={props.OnClickHandler}>{props.children}</button>
}