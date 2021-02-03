
const Note = (props)=>{
    return (
        <div className="note">
            <div class="note-header">
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>{props.content}</p>
            </div>
         
        </div>
    )
}

export default Note;