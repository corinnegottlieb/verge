const cheerio = require('cheerio');
const rp = require('request-promise');
const tempURL = `https://en.wikipedia.org/wiki/Samurai`;

class Scraper {
    constructor(url) {
        this.searchName = `Samurai`
        this.url = url,
        this.html = ''
        this.topic = {
            name: '',
            children: []
        }
    }

    sanity() {
        rp(this.url)
            .then(function(html) {
                const $ = cheerio.load(html)
                const toc = $(`ul`, `#toc`).html()
                console.log(toc)
        })
    }
    
    async getHTML(searchQuery) {
        

        const response = await rp(this.url)
        const $ = cheerio.load(response)
        const toc = $(`#toc`).html()
        return toc
    }

    async parseHTML(html = null) {
        const tempHTML = !html ? await this.getHTML() : html  
        const $ = cheerio.load(tempHTML)
        const liData = {
            name: '',
            children: []
        }
        $(`ul`).first().children(`li`).each(function(i, element) {
            liData.children.push($(this).html())
        })
        liData.name = $(`a`).children(`.toctext`).html() || this.searchName
        return liData
    }
    
    async fillTopic(parent = this.topic, liHTML = null) {
        let liData = await this.parseHTML(liHTML)
        if (liData.children.length === 0) {
            parent.children.push(liData)
            console.log(liData)
            return null
        }
        //else if children array has items:
        parent.children.push({name: liData.name, children: []})
        const loopLength = liData.children.length
        console.log(liData)
        for (let i = 0; i < loopLength; i++) {
            await this.fillTopic(liData, liData.children[i])
        }
    }

    async test() {
        await this.fillTopic()
        console.log(this.topic)
    }

}

const scraper = new Scraper(tempURL)
scraper.fillTopic()



module.exports = Scraper;