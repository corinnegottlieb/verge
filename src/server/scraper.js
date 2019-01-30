const cheerio = require('cheerio');
const rp = require('request-promise');
const tempURL = `https://en.wikipedia.org/wiki/Samurai`;

class Topic {
    constructor() {
        

    }
}

class Scraper {
    constructor(url) {
        this.url = url
    }

    sanity() {
        rp(this.url)
            .then(function(html) {
                const $ = cheerio.load(html)
                const toc = $(`ul`, `#toc`).html()
                console.log(toc)
        })
    }
    
    async getHTML() {
        const response = await rp(this.url)
        const $ = cheerio.load(response)
        const toc = $(`#toc`).html()
        return toc
    }

    async retrieveChildren(html) {
        const data = await this.getHTML()
        const $ = cheerio.load(data)
        const liArray = []
        $(`ul`).first().children(`li`).each(function(i, element) {
            liArray.push($(this).html())
        })
        return liArray
    }

    async fillObject(parent, liMarkup) {
        const childrenArray = this.retrieveChildren()
        const liObject = new Topic()
        if (!childranArray) {
            parent[liObject.liName] = liObject;
            return null
        }
        childrenArray.foreEach(c => {
            fillObject(liObject, c)
        })

    }

}

const scraper = new Scraper(tempURL)
scraper.retrieveChildren()


// module.exports = Scraper;