import React, { Component } from 'react';
import { slender, average, muscular, obese, plain, patchy, spotted, striped } from '../assets';

const propertyMap = {
    backgroundColor: { 
        black: '#263238',
        white: '#cfd8dc',
        green: '#a5d6a7', 
        blue:  '#0277bd', 
        red:   '#b33232'
    },
    build: { slender, average, muscular, obese },
    pattern: { plain, striped, spotted, patchy },
    size: { small: 100, medium: 150, large: 200, huge: 250, gigantic: 300 }
};


class DragonAvatar extends Component {
    get DragonImage() {
        const dragonPropertyMap = {};
        
        this.props.dragon.traits.forEach(trait => {
            const { traitType, traitValue} = trait;

            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
        });

        const {backgroundColor, build, pattern, size } = dragonPropertyMap;

        const sizing = { width: size, height: size};

        return (
            <div className='dragon-avatar-image-wrapper'>
                <div className='dragon-avatar-image-background' style={{ backgroundColor, ...sizing}}></div>
                <img src={pattern}className='dragon-avatar-image-pattern' style={{...sizing}} />
                <img src={build}className='dragon-avatar-image' style={{...sizing}}/>
            </div>
        );
    }

    render() {
        const { generationId, dragonId, traits } = this.props.dragon;

        if(!dragonId) return <div></div>;

        return(
            <div>
                <span>G{generationId}. </span>
                <span>I{dragonId}. </span>
                { traits.map(trait => trait.traitValue).join(', ') }
                { this.DragonImage }
            </div>
        )
    }
}

export default DragonAvatar;