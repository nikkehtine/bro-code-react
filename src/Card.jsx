import profilePic from "./assets/chlomaki.png";
import "./Card.css";

function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="Profile picture" />
            <h2>nikkehtine</h2>
            <p className="card-text">
                I&apos;m a professional frontend web developer and I like
                programming
            </p>
        </div>
    );
}

export default Card;
