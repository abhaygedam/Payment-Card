import "./Card.css";

function Apple() {
    return (
        <div>
            <div className="Card" style={{
                backgroundColor:"whitesmoke"
            }}>
                <div className="box1">
                    <p className="date">17 Sep 2020</p>
                    <p className="amazon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1724px-Apple_logo_black.svg.png"/></p>
                </div>
                <div className="butt">Case Study</div>
                <div className="heading">
                    <p>Apple Gift</p>
                     <p>Payment</p>
                </div>
                <div className="subHeading">
                    <p className="datee">Desktop - Mobile</p>
                    <p className="arrow" >&#8594;</p>
                 </div>
            </div>

        </div>
    );
}

export default Apple;