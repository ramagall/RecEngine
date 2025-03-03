import './thanku.css'

function ThankUHeader() {
    return(
        <>
        <div className="thankUHeader">
            <h1 className="tagLine">Thank You</h1>
            <h2 className="thankUSubtitle" title="label">
                A member of our team will reach out shortly!<br /> In the meantime, 
                please check your email for a copy of your answers and feel 
                free to contact us with any questions.
            </h2>
        </div>
        </>
    );
    }
    
export {ThankUHeader}