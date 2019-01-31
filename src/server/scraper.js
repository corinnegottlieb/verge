const cheerio = require('cheerio');
const rp = require('request-promise');
const tempURL = `https://en.wikipedia.org/wiki/Samurai`;
const tempSearchQuery = `Samurai`

class Scraper {
    constructor() {
        this.searchQuery = ''
    }

    generateURL(searchQuery) {
        let word = searchQuery.split(' ').join(`_`)
        let url = `https://en.wikipedia.org/wiki/${word}`
        return url
    }
    
    async getHTML(url) {
        const response = await rp(url)
        const $ = cheerio.load(response)
        const toc = $(`#toc`).html()
        return toc
    }

    createTopic(html) {
        const $ = cheerio.load(html)
        const topicObject = {}
        const isFirst = $.root().find(`div`).first().attr(`class`) === `toctitle`
        topicObject.name = isFirst ? this.searchQuery : $(`a`).attr(`href`)
        const ulChild = $(`ul`)
        if (ulChild.html() !== null) { //current html has children
            topicObject.children = []
            ulChild
                .children(`li`)
                .filter(function(i,el) {
                    return $(el).parent().html() === ulChild.html() 
                })
                .each((i, element) => {
                topicObject.children.push(this.createTopic($(element).html()))
            })
        }
        return topicObject
    }

    async getData(searchQuery) {
        this.searchQuery = searchQuery
        const url = this.generateURL(searchQuery)
        const html = await this.getHTML(url)
        return this.createTopic(html)
    }

    async test() {
        const data = await scraper.getData(tempSearchQuery)
        console.log(data)
        // console.log(data.children[0].children[5].children[1])
    }

}

const scraper = new Scraper()
// scraper.test()

module.exports = Scraper;