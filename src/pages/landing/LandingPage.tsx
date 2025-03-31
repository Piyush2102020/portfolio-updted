import './style.css'
import Powered from '../../components/powered/Powered'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../functions/store'
import { useEffect } from 'react'
import { changePage } from '../../functions/slice'
import Editor from '../../components/landing-code-editor/editor'
import Typing from '../../functions/Typing'
export default function LandingPage() {

    const landingPage = useSelector((state: RootState) => state.isLandingPage);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!landingPage) {
            dispatch(changePage());
        }
    })
    return (
        <>




            <div className="landing-page">
                <div className='square'></div>
                <Header />
                <div className="content">

                    <div className="landing-text-content">

                        <h1><Typing message='A Developer’s Mind, An Innovator’s Vision' /></h1>
                        <span className='fade-text'>Hey There! I’m</span><br />
                        <h3>Piyush Bhatt – A Developer Passionate About Innovation</h3>
                        <div className="button-holder">
                            <Link className='link' to={'home'}><button className="dark-button button-base">Visit Portfolio</button></Link>
                            <Link className='link' to={'home/work'}><button className="light-button button-base">View Projects</button></Link>
                        </div>
                    </div>



                    <div className="image-editor">
                        <Editor />


                    </div>

                </div>


                <div className='landing-page-footer'>
                    <div className='powered'>
                        <span>Hosted On :-</span>
                        <Powered />
                    </div>
                </div>
            </div>




        </>
    )
}
