// @flow
import React from 'react'
import remark from 'remark'
import html from 'remark-html'
import recommended from 'remark-preset-lint-recommended'
// import fetch from 'node-fetch'
import 'isomorphic-fetch'

import Layout from '../components/layout'

export default class ReleaseNotes extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://raw.githubusercontent.com/rhiokim/gona/master/CHANGELOG.md')
    const body = await res.text()

    const note = await remark()
      .use(recommended)
      .use(html)
      .process(body)

    return {body: note.contents}
  }

  render () {
    const {body} = this.props
    return (
      <Layout title="release notes" className="release-notes">
        <div className="container">
          <div className="row contents" dangerouslySetInnerHTML={{__html: body}}>
          </div>
        </div>
      </Layout>
    )
  }
}
