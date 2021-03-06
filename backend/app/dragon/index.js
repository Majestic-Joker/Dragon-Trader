const TRAITS = require('../../data/traits.json');

const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    generationId: undefined,
    dragonId: undefined,
    isPublic: false,
    saleValue: 0,
    get birthdate(){
        return new Date();
    },
    get randomTraits(){
        const traits = [];

        TRAITS.forEach(TRAIT => {
            const traitType = TRAIT.type;
            const traitValues = TRAIT.values;

            const traitValue = traitValues[Math.floor(Math.random() * traitValues.length)];

            traits.push({ traitType, traitValue });
        });

        return traits;
    }
}


class Dragon 
{
    constructor({ 
        dragonId,
        birthdate,
        nickname,
        traits,
        generationId,
        isPublic,
        saleValue
    } = {})
    {
        this.dragonId = dragonId || DEFAULT_PROPERTIES.dragonId;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
        this.isPublic = isPublic || DEFAULT_PROPERTIES.isPublic;
        this.saleValue = saleValue || DEFAULT_PROPERTIES.saleValue;       
    }
}

module.exports = Dragon;