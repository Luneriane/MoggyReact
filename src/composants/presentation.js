import React, { Component } from 'react'
import TagadaKimono from '../images/ukiyoe_kimono75.jpg'
import TagadaPirate from '../images/header_pirateparty.jpg'

export class Presentation extends Component {
    render() {
        return (
            <section id="presentation">
                <img id="tagadaKimono" src={TagadaKimono} alt=""/>
                <h1>Moggy et les Cactuars</h1>
                <h2>Sous-Titre</h2>
                <img id="tagadaPirate" src={TagadaPirate} alt=""/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nulla illo dolor dolorum distinctio itaque pariatur at non, nemo suscipit veniam! Dolorem iusto consequatur quibusdam! Unde fuga aliquid consequuntur culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dolores dolor, itaque ex aut laborum placeat voluptatibus, veniam tempore minus sequi quos ratione dolore harum ipsum perspiciatis odit delectus quaerat?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nulla illo dolor dolorum distinctio itaque pariatur at non, nemo suscipit veniam! Dolorem iusto consequatur quibusdam! Unde fuga aliquid consequuntur culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dolores dolor, itaque ex aut laborum placeat voluptatibus, veniam tempore minus sequi quos ratione dolore harum ipsum perspiciatis odit delectus quaerat?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nulla illo dolor dolorum distinctio itaque pariatur at non, nemo suscipit veniam! Dolorem iusto consequatur quibusdam! Unde fuga aliquid consequuntur culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dolores dolor, itaque ex aut laborum placeat voluptatibus, veniam tempore minus sequi quos ratione dolore harum ipsum perspiciatis odit delectus quaerat?
                </p>
            </section> 
        )
    }
}

export default Presentation
