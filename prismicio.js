
import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'

//------------------------------------------------------------------------------
//-- PRISMIC CLIENT --
//------------------------------------------------------------------------------

export function createClient() {
    const repoName = "repo-name"
    const endpoint = prismic.getRepositoryEndpoint(repoName)
    // const accessToken = ""
    const client = prismic.createClient(endpoint, {
        fetch
    })

    return client
}
