import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Home extends React.Component{
    render(){
        return (
            <section name="home" class="full-hw">
                <div class="flex-r just-c">
                    <article>
                        <div class="flex-c">
                            <h1>Full Stack Developer</h1>
                            <p>I like to craft solid and scalable products with great user experiences.</p>
                        </div>
                    </article>
                    <figure>
                        <span aria-label="Photo of Kaushambi Gujral" class="pretty" role="img"></span>
                    </figure>
                </div>
            </section>
        );
    }

}

class Work extends React.Component{
    render(){
        return (
            <section class="full-hw">
                <div>Work</div>
            </section>
        );
    }

}

class Experience extends React.Component{
    render(){
        return (
            <section class="full-hw">
                <div>Experience</div>
            </section>
        );
    }

}

class Others extends React.Component{
    render(){
        return (
            <section class="full-hw">
                <div>Others</div>
            </section>
        );
    }

}


class Contact extends React.Component{
    render(){
        return (
            <section class="full-hw">
                <div>Contact</div>
            </section>
        );
    }

}

class Portfolio extends React.Component{

    render() {
        return (
            <div>
                <header></header>
                <main>
                    <Home/>
                    <Work/>
                    <Experience/>
                    <Others/>
                    <Contact/>
                </main>
                <footer></footer>
            </div>
          );
        }
}

//------------------------------------------
// Custom Mouse
//------------------------------------------


//------------------------------------------
// Create the root element
//------------------------------------------
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Portfolio />);