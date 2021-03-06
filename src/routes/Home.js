import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{
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
    return <section className="container">
      {isLoading?(<div className="loader">
        <span className="loader__text">Loading...</span>
      </div>):(<div className="movies">
        {movies.map(movie=> <Movie key={movie.id}
          year={movie.year}
          summary={movie.summary}
          title={movie.title}
          id={movie.id}
          poster={movie.medium_cover_image}
          genres={movie.genres}/>)}
      </div>)}
    </section>;
  }
}

export default Home;