# async-action-redux-toolkit
Azioni asincrone in Redux con Redux Toolkit
# Esempio di chiamata a metodo API utilizzando Redux Toolkit


**Redux Toolkit** include redux-thunk e quindi l'[esempio con redux-thunk](https://github.com/MaiNick/example-react-redux/tree/async-action-redux-thunk) funzionerebbe bene, 
tuttavia, per gestire le azioni asincrone Redux Toolkit fornisce un metodo chiamato createAsyncThunk. 

**createAsyncThunk crea in automatico le tre actions, accetta un identificatore e una callback che esegue la logica asincrona effettiva e 
restituisce una *promise* che gestirà l'invio delle actions pertinenti in base al suo stato.**