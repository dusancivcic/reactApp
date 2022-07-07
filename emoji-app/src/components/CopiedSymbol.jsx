

const CopiedSymbol = (props) =>{
    return(
        <div className={`copied-symbol ${props.active}`}><p>Your copied symbol is "{props.copiedSymbol}"</p></div>
    )
}

export default CopiedSymbol