import ogs from 'open-graph-scraper'
import Logger from './logger'

const log = Logger.getLogger('open-graph')

export default async (url: string) => {
    try {
        const { result } = await ogs({ url })
        const data = result as OpenGraphResponse // typings are wrong
        return {
            title: data.ogTitle,
            description: data.ogDescription,
            url,
            imageUrl: data.ogImage?.url
        }
    } catch (error: any) {
        log.info(`Error when retrieving open-graph for url: ${url}`)
        log.info(error)
    }
}
