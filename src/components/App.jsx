import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes';

const App = ()=>{
    return (
        <div>
            <Header/>
            {notes.map(noteitem => (
                <Note
                    key={noteitem.key}
                    title={noteitem.title}
                    content={noteitem.content}
                />
            ))}
            <Footer/>
        </div>
    );
}
export default App;