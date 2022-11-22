import CardPresentacion from '../CardPresentacion/CardPresentacion';
import './SectionPrincipal.css';

const SectionPrincipal = () => {
    return (
        <>
        <div className='position-relative divPrincipal'>
            <section className='container-xl d-flex flex-column w-100 sectionPrincipal'>
                <h1 className='py-4 py-xxl-5 text-white text-center fs-2 text-uppercase'>Piensa digital</h1>
                <CardPresentacion/>   
            </section>
            <div className='position-absolute bottom-0 start-0 svgContainer'>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%",}}><path d="M-2.54,66.60 C149.83,-42.92 285.83,141.60 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#ffffff",}}></path></svg>
            </div>
        </div>

        </>
        
    );
}

export default SectionPrincipal;