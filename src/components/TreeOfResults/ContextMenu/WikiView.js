import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Popup from "reactjs-popup";
import Requester from '../../../stores/Requester';
const requester = new Requester();

@inject("lumberYard")
@observer
class WikiView extends Component {

  fillHTML = async () => {
    // console.log('you rang?')
    const mainTopic = this.props.lumberYard.currentTOR.name
    // console.log(mainTopic)
    const subTopic = this.props.currentTopic.name
    // console.log(subTopic)
    const data = await requester.getSubTopicHTML(mainTopic, subTopic)
    // console.log(data)
  }

  render() {
    this.fillHTML()
    return (
      <Popup
        trigger={<button className="open-note-button brown-text text-darken-4 btn-small waves-effect waves-light #4db6ac teal lighten-2">

          <i className="large material-icons">call_made</i>
        </button>}
        position="right center"
        modal
        closeOnDocumentClick>
        <div className="header flow-text">Wikipedia Koteret</div>
        <hr></hr>
        <div className="content">
          {/* In Japanese, they are usually referred to as bushi (武士, [bɯ.ɕi]) or buke (武家). According to translator William Scott Wilson:
          "In Chinese, the character 侍 was originally a verb meaning 'to wait upon', 'accompany persons' in the upper ranks of society,
          and this is also true of the original term in Japanese, saburau. In both countries the terms were nominalized to mean 'those who
          serve in close attendance to the nobility', the Japanese term saburai being the nominal form of the verb." According to Wilson,
          an early reference to the word samurai appears in the Kokin Wakashū (905–914), the first imperial anthology of poems, completed
          in the first part of the 10th century.[1]

  By the end of the 12th century, samurai became almost entirely synonymous with bushi, and the word was closely associated with the middle
  and upper echelons of the warrior class. The samurai were usually associated with a clan and their lord, and were trained as officers in
  military tactics and grand strategy. While the samurai numbered less than 10% of then Japan's population,[2] their teachings can still be
  found today in both everyday life and in modern Japanese martial arts. */}
          </div>
      </Popup>
    )
  }
}

export default WikiView


{/* <Popup
  trigger={<button>WikiView</button>} position="right center">
  <iframe title="wikiVIEW" src={this.props.currentTopic.url}
    width="1010px"
    height="550px"
    position="relative" />
</Popup> */}