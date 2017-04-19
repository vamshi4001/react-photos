var {
        Router,
        Route,
        IndexRoute,
        IndexLink,
        Link
      } = ReactRouter
      var destination = document.querySelector("#container");  
      var Contact = React.createClass({
        render: function() {
            return (
              <div>
                <h2>GOT QUESTIONS?</h2>
                <p>The easiest thing to do is post on
                our <a href="http://forum.kirupa.com">forums</a>.
                </p>
              </div>
            );
          }
      });       
      var Stuff = React.createClass({
        render: function() {
            return (
              <div>
                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                rhoncus eget sapien:</p>
                <ol>
                  <li>Nulla pulvinar diam</li>
                  <li>Facilisis bibendum</li>
                  <li>Vestibulum vulputate</li>
                  <li>Eget erat</li>
                  <li>Id porttitor</li>
                </ol>
              </div>
            );
          }
      });
      var Home = React.createClass({
        getInitialState: function(){
          return {
            pages:[]
          }
        },
        componentDidMount: function(){
          var _this = this;
          this.serverRequest = 
            axios
              .get("http://mycollect.in:8080/pages/1/9")
              .then(function(response){
                _this.setState({
                  pages:response.data.results
                });
              })
        },
        componentWillUnmount: function(){
          this.serverRequest.abort();
        },
        render: function() {
            return (
              <div>
                {this.state.pages.map(function(page){
                  var location = page.location
                  return(
                      <div className="col-md-4">
                        <div className="profile-card text-center">
                          <img className="img-responsive" src={page.cover.source}/>
                          <div className="profile-info">
                            <h2 className="hvr-underline-from-center">{page.name}
                              
                            </h2>
                            <div className="row">
                              <div className="col-md-6"><a><i className="fa fa-thumbs-up fa-2x"></i> {page.likes}</a></div>
                              <div className="col-md-6"><a><i className="fa fa-comments fa-2x"></i> {page.talking_about_count}</a></div>
                            </div>
                            <div className="row">
                              <div className="col-md-6"><a href={page.link}><i className="fa fa-facebook fa-2x"></i></a></div>
                              <div className="col-md-6"><a href={page.website}><i className="fa fa-globe fa-2x"></i></a></div>
                            </div>
                            <div className="bio">{page.bio}</div>                            
                          </div>
                        </div>
                      </div>  
                    )
                })}
              </div>
            );
          }
      });
      var App = React.createClass({
        render: function() {
          return (
            <div>
              <div className="header">
                <div className="container">
                  <nav className="navbar navbar-inverse navbar-fixed-top navbar-right">
                    <div className="container">
                      <div id="navheader" className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                        <IndexLink to="/" className="logo">Photogs</IndexLink>    
                      </div>
                      <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                          <li><Link to="/stuff" activeClassName="active">Add your page</Link></li>
                          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="content">
                {this.props.children}
              </div>
            </div>
          )
        }
      });
      ReactDOM.render(
        <Router>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="stuff" component={Stuff} />
            <Route path="contact" component={Contact} />
          </Route>
        </Router>,
        destination
      );

      var fetchData = function(){
        axios
          .get("mycollect.in:8080/cities")
          .then(function(reponse){
            console.log(response)
          })
      }