import AppBar from './components/AppBar';
import TextArea from './components/TextArea';
import CardInformation from './components/CardInformation';
import useApp from './App.hook';
import './styles/index.css';
import LetterDensity from './components/LetterDensity';

function App() {
  const {
    text,
    setText,
    readTime,
    totalCharacters,
    totalWords,
    totalSentences,
    letterDensity,
  } = useApp();

  return (
    <main className="flex flex-col min-h-screen md:mx-56 mx-4 my-8 gap-12">
      <AppBar />
      <p className="text-preset-1 text-center self-center max-w-[510px] dark:text-neutral-100">
        Analyze your text in real-time.
      </p>
      <TextArea value={text} onChangeInput={setText} minute={readTime} />
      <div className="card-container grid gap-4 md:grid-cols-3 grid-cols-1">
        <CardInformation
          className={'bg-character-count bg-purple-400'}
          totalCharacters={totalCharacters}
          labelCard="Total Characters"
        />

        <CardInformation
          className={'bg-word-count bg-yellow-500'}
          totalCharacters={totalWords}
          labelCard="Words Count"
        />
        <CardInformation
          className={'bg-sentence-count bg-orange-500'}
          totalCharacters={totalSentences}
          labelCard="Sentences Count"
        />
      </div>
      <p className="text-preset-2">Letter Density</p>

      <LetterDensity letterDensity={letterDensity} />
    </main>
  );
}

export default App;
