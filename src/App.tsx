import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <header className='bg-gray-800 text-white p-4'>
        <Navbar />
      </header>

      <main>
        <section className="left-section">
            <div>
                <img src="/img/WhatsApp Image 2025-03-29 at 18.56.39_d28bca3d.jpg" alt="" width="200" height="200" className="profile-image"/>
            </div>

            <hr/>

            <div>
                <h5></h5>
            </div>

            <hr/>

            <div>
                <img src="https://www.flaticon.com/free-icons/tweet" alt=""/>
                <a href="https://www.flaticon.com/free-icons/tweet" title="tweet icons">Tweet icons created by Freepik - Flaticon</a>

                <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>

                <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>

                <a href="https://www.flaticon.com/free-icons/medium" title="medium icons">Medium icons created by Freepik - Flaticon</a>
            </div>
        </section>

        <section className="right-section">
            <h1>Hey There..!</h1>

            <p>I am Prathmesh, an Undergrad IT student from India. </p>

            <div>
                <h3>Stack</h3>
                <ul>

                </ul>
            </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
