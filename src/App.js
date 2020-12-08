import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading:true,
    movies:[]
  };

  componentDidMount(){
    this.getMovies();
  }

  getMovies = async () =>{
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(movies);
    this.setState({isLoading:false,movies});
  }




  render(props){
    const { isLoading, movies } = this.state;
    return <div>{isLoading?'Loading...':movies.map(movie => 
    <Movie key={movie.id}
        poster={movie.medium_cover_image}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
    />)}</div>;
  }
}

export default App;