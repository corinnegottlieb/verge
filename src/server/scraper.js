const cheerio = require('cheerio');
const rp = require('request-promise');
const tempURL = `https://en.wikipedia.org/wiki/Samurai`;
const uuidv4 = require('uuid/v4');
const tempSearchQuery = `abraham lincoln`;
const tempSubTopic = '#Prairie_lawyer';

class Scraper {
    constructor() {
        this.searchQuery = '',
        this.url = ''
        this.treeNodes = {}
    }

    generateURL(searchQuery) {
        let word = searchQuery.split(' ').join(`_`)
        let url = `https://en.wikipedia.org/wiki/${word}`
        this.url = url
        return url
    }
    
    async getHTML(url) {
        const response = await rp(url)
        const $ = cheerio.load(response)
        const toc = $(`#toc`).html()
        return toc
    }

    async getTopicHTML(url, name) {
        const response = await rp(url)
        const $ = cheerio.load(response)
        const topicHTML = $(`${name}`).parent().nextUntil('h3', 'p')
        let htmlArray = []
        topicHTML.each((i, elem) => 
            htmlArray.push($(elem).html())
        )
        return htmlArray
        // let htmlString = ''
        // topicHTML.each((i, elem) => 
        //     htmlString += $(elem)
        // )
        // return htmlString
    }

    createTopic(html, parent) { //version that populates this.treeNodes with tree nodes
        const $ = cheerio.load(html)
        const isFirst = $.root().find(`div`).first().attr(`class`) === `toctitle`
        const topicObject = {}
        topicObject.name = isFirst ? this.searchQuery : $(`a`).attr(`href`)
        topicObject.url = isFirst ? this.url : `${this.url}${topicObject.name}`
        topicObject.level = isFirst ? 0 : parent.level + 1
        topicObject.relevance = true
        topicObject.tracked = false
        topicObject.checked = false
        topicObject.note = ''
        topicObject.menu = false
        this.treeNodes[topicObject.name] = topicObject
        const ulChild = $(`ul`)
        if (ulChild.html() !== null) { //current html has children
            topicObject.children = []
            ulChild
                .children(`li`)
                .filter(function(i,el) {
                    return $(el).parent().html() === ulChild.html() 
                })
                .each((i, element) => {
                    const temp = this.createTopic($(element).html(), topicObject)
                    topicObject.children.push(temp.name)
                })
        }
        return topicObject
    }

    // createTopic(html, parent) { //version that returns nested object
    //     const $ = cheerio.load(html)
    //     const isFirst = $.root().find(`div`).first().attr(`class`) === `toctitle`
    //     const topicObject = {}
    //     topicObject.name = isFirst ? this.searchQuery : $(`a`).attr(`href`)
    //     topicObject.url = isFirst ? this.url : `${this.url}${topicObject.name}`
    //     topicObject.level = isFirst ? 0 : parent.level + 1
    //     topicObject.relevance = true
    //     topicObject.tracked = false
    //     topicObject.checked = false
    //     topicObject.note = ''
    //     topicObject.menu = false
    //     const ulChild = $(`ul`)
    //     if (ulChild.html() !== null) { //current html has children
    //         topicObject.children = []
    //         ulChild
    //             .children(`li`)
    //             .filter(function(i,el) {
    //                 return $(el).parent().html() === ulChild.html() 
    //             })
    //             .each((i, element) => {
    //             topicObject.children.push(this.createTopic($(element).html(), topicObject))
    //         })
    //     }
    //     return topicObject
    // }

    retrieveText(html, name) {
        const $ = cheerio.load(html)
        console.log($.html())
        const topicHTML = $(`#${name}`).html()
        // console.log(topicHTML)
        // return topicHTML
    }
    
    async getTopicData(mainTopic, subTopic) {
        this.searchQuery = mainTopic
        const url = this.generateURL(this.searchQuery)
        const html = await this.getTopicHTML(url, subTopic)
        return html
        
    }

    async getData(searchQuery) {
        this.searchQuery = searchQuery
        const url = this.generateURL(searchQuery)
        const html = await this.getHTML(url)
        this.createTopic(html)
        return this.treeNodes
    }

    async test() {
        const data = await scraper.getData(tempSearchQuery)
        console.log(this.treeNodes)
        // console.log(data.children[0].children[5].children[1])
    }

}

// const scraper = new Scraper()
// scraper.test()

module.exports = Scraper;