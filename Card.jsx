import profileimage from './assets/Z.png'

function card(){
    return(
        <div className="card">
            <img className="card-image"src={profileimage} alt="Profile Image"></img>
            <h2 className="card-title">Dragon Ball Z</h2>
            <p>I am a big fan of Dragon Ball Z Series.</p>
        </div>
    );
}

export default card