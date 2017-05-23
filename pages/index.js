// @flow
import Layout from '../components/layout'
import AnimateTitle from '../components/animateTitle'

export default () => (
  <Layout>
    <div className="container">
      <div className="section philosophy">
        <div className="container">
          <AnimateTitle title="GONA" className="title"/>
          <div className="row story">
            Gona is Electron based application to manage tasks, meetings and alarms.<br/>
            And it's inspired by <i>I'm <strong>gonna</strong> <u>do</u> something</i><br/>
            <br/>
            <code>$ gona do 'task'</code>
          </div>
        </div>
      </div>

      <div className="section philosophy">
        <div className="container">
          <h2 className="title">You <b>gonna</b> <u>do</u> something?</h2>
          <div className="row story">
            <strong><u>Only five important things</u></strong><br/>
            It is enough today with <strong>five important things</strong> to do.<br/>
            You already have done a lot of things today<br/>
            <br/>
            Please don't be rush<br/>
            <br/>
            Walk slowly...<br/>
            And allow the world to see your step.<br/>
            <br/>
            #YOLO
          </div>
        </div>
      </div>

      <div className="section concept">
        <div className="container">
          <h4 className="section-heading"><b>Gona</b>: CLI and GUI</h4>
          <img src="/static/images/gona-cli.png" />
          <img src="/static/images/gona-tray-app.png" />
        </div>
      </div>

      <div className="section get-help">
        <div className="container">
          <h4 className="section-heading">Need help getting started?</h4>
          <p className="section-description">Gona is dead simple to manage TODO. If you want to learn more, just visit the help!</p>
        </div>
      </div>

      <div className="section download">
        <div className="container">
          <h4 className="section-heading">Download</h4>
          <a className="button button-primary" href="https://github.com/rhiokim/gona/releases">Mac OS</a>
          <a className="button button-primary" href="https://github.com/rhiokim/gona/releases">Win</a>
          <a className="button button-primary" href="https://github.com/rhiokim/gona/releases">Linux</a>
        </div>
      </div>
    </div>
  </Layout>
);
