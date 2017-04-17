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
        render: function() {
            return (
              <div>
                <h2>HELLO</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>
        
                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
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