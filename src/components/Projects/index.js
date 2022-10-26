export default function Projects (props) {
    return(
        props.projArr.map(proj => 
            <div key={proj.id}>
                <h1>{proj.title}</h1>
            </div>
        )
    )

}