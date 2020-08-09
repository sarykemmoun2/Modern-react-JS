import React from 'react';
import './App.css';
import BookList from './routes/bookList';
import { BookContextProvider } from './contexts/booksContexts';
import AppRouter from './routes/Router';
// import { ReactMediaRecorder } from "react-media-recorder";

function App() {
  
  return (
    <BookContextProvider>
      <div className="App">
        <AppRouter />
      </div>
    </BookContextProvider>

    //ReactMediaRecorder sample
  //   <div>
  //   <ReactMediaRecorder
    
  //     video
  //     onStop={(blobUrl, blob)=>{
  //       console.log('blobUrl', blob );
  //     }}
  //     render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
  //       <div>
  //         <p>{status}</p>
  //         <button onClick={startRecording}>Start Recording</button>
  //         <button onClick={stopRecording}>Stop Recording</button>
  //         <video src={mediaBlobUrl} controls autoplay loop />
  //       </div>
  //     )}
  //   />
  // </div>

    );
}

export default App;
